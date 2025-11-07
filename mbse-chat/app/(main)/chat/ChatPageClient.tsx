"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ChatSidebar from "@/app/components/chat/chat-sidebar"
import ChatArea from "@/app/components/chat/chat-area"

interface ChatMessage {
    id: string
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

interface ChatSession {
    id: string
    title: string
    messages: ChatMessage[]
    createdAt: Date
}

// --- Cookie helpers ---
const getCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null
    return null
}

const setCookie = (name: string, value: string, days = 30) => {
    if (typeof document === "undefined") return
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

// --- Main client component ---
export default function ChatPageClient() {
    const [sessions, setSessions] = useState<ChatSession[]>([])
    const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isInitialized, setIsInitialized] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)


    const searchParams = useSearchParams()
    const incomingMessage = searchParams.get("msg")

    useEffect(() => {
        const savedSessions = getCookie("chatSessions")
        const savedCurrentId = getCookie("currentSessionId")

        if (savedSessions) {
            try {
                const parsedSessions = JSON.parse(decodeURIComponent(savedSessions)).map((session: ChatSession) => ({
                    ...session,
                    createdAt: new Date(session.createdAt),
                    messages: session.messages.map((msg: ChatMessage) => ({
                        ...msg,
                        timestamp: new Date(msg.timestamp),
                    })),
                }))
                setSessions(parsedSessions)

                if (savedCurrentId && parsedSessions.some((s: ChatSession) => s.id === savedCurrentId)) {
                    setCurrentSessionId(savedCurrentId)
                    const session = parsedSessions.find((s: ChatSession) => s.id === savedCurrentId)
                    if (session) {
                        setMessages(session.messages)
                    }
                } else if (parsedSessions.length > 0) {
                    setCurrentSessionId(parsedSessions[0].id)
                    setMessages(parsedSessions[0].messages)
                } else {
                    simulateBotResponse("What do you want to build?", 0)
                }
            } catch (e) {
                simulateBotResponse("What do you want to build?", 0)
            }
        } else {
            simulateBotResponse("What do you want to build?", 0)
        }

        setIsInitialized(true)
    }, [])

    useEffect(() => {
        if (isInitialized) {
            setCookie("chatSessions", encodeURIComponent(JSON.stringify(sessions)))
        }
    }, [sessions, isInitialized])

    useEffect(() => {
        if (isInitialized && currentSessionId) {
            setCookie("currentSessionId", currentSessionId)
        }
    }, [currentSessionId, isInitialized])

    const simulateBotResponse = (text: string, delay = 1000) => {
        setIsLoading(true)
        setTimeout(() => {
            const newMessage: ChatMessage = {
                id: Math.random().toString(36),
                text,
                sender: "bot",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, newMessage])
            setIsLoading(false)
        }, delay)
    }

    const handleSendMessage = (text: string) => {
        const userMessage: ChatMessage = {
            id: Math.random().toString(36),
            text,
            sender: "user",
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, userMessage])

        setTimeout(() => {
            simulateBotResponse("This is a sample response. In a real app, this would connect to your AI service.", 1500)
        }, 300)

        if (currentSessionId) {
            setSessions((prev) =>
                prev.map((session) =>
                    session.id === currentSessionId ? { ...session, messages: [...session.messages, userMessage] } : session,
                ),
            )
        } else {
            const newSession: ChatSession = {
                id: Math.random().toString(36),
                title: text.substring(0, 30) + (text.length > 30 ? "...": ""),
                messages: [userMessage],
                createdAt: new Date(),
            }
            setSessions((prev) => [newSession, ...prev])
            setCurrentSessionId(newSession.id)
        }
    }

    const handleSelectSession = (sessionId: string) => {
        setCurrentSessionId(sessionId)
        const session = sessions.find((s) => s.id === sessionId)
        if (session) {
            setMessages(session.messages)
        }
    }

    const handleDeleteSession = (sessionId: string) => {
        setSessions((prev) => prev.filter((s) => s.id !== sessionId))
        if (currentSessionId === sessionId) {
            setCurrentSessionId(null)
            setMessages([])
            simulateBotResponse("What do you want to build?", 0)
        }
    }

    const handleNewChat = () => {
        setCurrentSessionId(null)
        setMessages([])
        simulateBotResponse("What do you want to build?", 0)
    }

    // 👇 Handle redirect from homepage and start a fresh chat
    useEffect(() => {
        if (!isInitialized || !incomingMessage) return

        const newMessage: ChatMessage = {
            id: Math.random().toString(36),
            text: incomingMessage,
            sender: "user",
            timestamp: new Date(),
        }

        // Create a fresh session with this first message
        const newSession: ChatSession = {
            id: Math.random().toString(36),
            title:
                incomingMessage.substring(0, 30) +
                (incomingMessage.length > 30 ? "..." : ""),
            messages: [newMessage],
            createdAt: new Date(),
        }

        setSessions((prev) => [newSession, ...prev])
        setCurrentSessionId(newSession.id)
        setMessages([newMessage])

        // Simulate bot reply right after redirect
        simulateBotResponse("This is a sample response. In a real app, this would connect to your AI service.", 1200)
    }, [isInitialized, incomingMessage])


    if (!isInitialized) return null

    return (
        <div className="flex flex-1 min-h-0 text-foreground">
            {/* SIDEBAR */}
            <div
                className={`
    fixed top-[65px] bottom-0 left-0 z-40 w-64 transform
    bg-[#000] to-navy-950 border-r border-gold/20
    transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:relative md:top-0 md:translate-x-0 md:flex md:flex-col
  `}
            >
                <ChatSidebar
                    sessions={sessions}
                    currentSessionId={currentSessionId}
                    onSelectSession={(id) => {
                        handleSelectSession(id)
                        setIsSidebarOpen(false)
                    }}
                    onDeleteSession={handleDeleteSession}
                    onNewChat={() => {
                        handleNewChat()
                        setIsSidebarOpen(false)
                    }}
                    onCloseSidebar={() => setIsSidebarOpen(false)}
                />
            </div>

            {/* OVERLAY (mobile only) */}
            {isSidebarOpen && (
                <div
                    className="
      fixed top-[65px] bottom-0 right-0 z-30 bg-black/50 backdrop-blur-sm md:hidden
      pl-64   /* leaves sidebar region clickable */
    "
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}


            {/* CHAT AREA */}
            <div className="flex-1 flex flex-col">
                <ChatArea
                    messages={messages}
                    isLoading={isLoading}
                    onSendMessage={handleSendMessage}
                    onToggleSidebar={() => setIsSidebarOpen(true)}
                />
            </div>
        </div>
    )
}