"use client"

import React, { useState, useRef, useEffect } from "react"
import { Send, Plus } from "lucide-react"
import TypingIndicator from "./typing-indicator"

interface ChatMessage {
    id: string
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

interface ChatAreaProps {
    messages: ChatMessage[]
    isLoading: boolean
    onSendMessage: (text: string) => void
    onToggleSidebar?: () => void

}

export default function ChatArea({ messages, isLoading, onSendMessage , onToggleSidebar}: ChatAreaProps) {
    const [inputValue, setInputValue] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isLoading])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputValue.trim()) {
            onSendMessage(inputValue)
            setInputValue("")
            inputRef.current?.focus()
        }
    }

    return (
        <div className="flex-1 flex flex-col bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-0 w-1 h-96 bg-gradient-to-b from-gold/80 to-transparent opacity-30 transform -skew-x-12" />
            </div>
            {/* Mobile menu button */}
            <div className="absolute top-4 left-4 z-30 md:hidden">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 rounded-lg bg-[#171717] hover:bg-[#2F2F2F] border border-[#2F2F2F] text-gray-300 hover:text-white transition-colors"
                    aria-label="Open sidebar"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>


            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 relative z-10">
                {messages.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                            <h2 className="text-5xl font-bold text-white mb-4">What do you want to build?</h2>
                            <p className="text-gray-300 text-lg mb-8">Arcfield presents Intelligent MBSE on Desktop</p>
                        </div>
                    </div>
                ) : (
                    <>
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-2xl px-6 py-3 rounded-lg ${
                                        message.sender === "user"
                                            ? "bg-[#00597C] text-white rounded-br-none shadow-lg"
                                            : "bg-[#171717] text-gray-100 rounded-bl-none border border-[#2F2F2F] shadow-lg backdrop-blur-sm"
                                    }`}
                                >
                                    <p className="text-base leading-relaxed">{message.text}</p>
                                    <p className={`text-xs mt-2 ${message.sender === "user" ? "text-blue-100/70" : "text-gray-400"}`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {isLoading && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </>
                )}
            </div>

            {/* Input Area */}
            <div className="relative z-20 border-t border-gold/20 p-8 bg-gradient-to-t from-navy-950 to-transparent">
                <form onSubmit={handleSubmit} className="flex gap-4 max-w-3xl mx-auto">
                    <button
                        type="button"
                        className="rounded-full w-10 h-10 flex items-center justify-center bg-gold/10 hover:bg-gold/20 text-gold transition-colors flex-shrink-0"
                    >
                        <Plus className="w-5 h-5"/>
                    </button>

                    <input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="I would like to"
                        disabled={isLoading}
                        className="flex-1 bg-[#171717] border border-[#2F2F2F] text-white placeholder-gray-500 rounded-lg px-6 py-3 focus:border-blue-500 focus:outline-none focus:ring-0"
                    />

                    <button
                        type="submit"
                        disabled={isLoading || !inputValue.trim()}
                        className={`bg-[#00597C] hover:bg-[#00597C] disabled:bg-gray-200 disabled:text-black text-white rounded-lg px-8 font-medium flex items-center gap-2 transition-colors duration-200`}
                    >
                        Send
                        <svg
                            className={`w-4 h-4 transition-all duration-200 ease-in-out animate-in fade-in slide-in-from-right-2 hidden sm:block ${
                                isLoading || !inputValue.trim() ? "text-black" : "text-white"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="m4.497 20.835 16.51-7.363c1.324-.59 1.324-2.354 0-2.944L4.497 3.164c-1.495-.667-3.047.814-2.306 2.202l3.152 5.904c.245.459.245 1 0 1.458l-3.152 5.904c-.74 1.388.81 2.87 2.306 2.202"/>
                        </svg>
                    </button>

                </form>
            </div>
        </div>
    )
}
