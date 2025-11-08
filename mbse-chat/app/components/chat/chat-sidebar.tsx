"use client"

import { Plus, MessageCircle, Trash2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/stories/Button"
import React from "react";

interface ChatSession {
    id: string
    title: string
    messages: unknown[]
    createdAt: Date
}

interface ChatSidebarProps {
    sessions: ChatSession[]
    currentSessionId: string | null
    onSelectSession: (sessionId: string) => void
    onDeleteSession: (sessionId: string) => void
    onNewChat: () => void
    onCloseSidebar?: () => void

}

export default function ChatSidebar({
                                        sessions,
                                        currentSessionId,
                                        onSelectSession,
                                        onDeleteSession,
                                        onNewChat,
                                        onCloseSidebar
                                    }: ChatSidebarProps) {
    return (
        <div className="w-64 max-w-[300px] h-full flex flex-col flex-shrink-0 border-r border-[#2F2F2F] bg-gradient-to-b from-navy-900 to-navy-950 flex-1 min-h-0">
            {/* Header with Logo */}
            <div className="p-4 border-b border-[#2F2F2F] flex flex-row gap-4 w-full">
                <Button
                    label="New Chat"
                    iconRight={false}
                    icon={
                        <Plus className="w-4 h-4"/>
                    }
                    onClick={onNewChat}
                    className="w-full"
                />

                {/* Need button here to close the chat*/}
                {onCloseSidebar && (
                    <button
                        onClick={onCloseSidebar}
                        className=" p-2 rounded-lg hover:bg-[#2F2F2F] text-gray-300 md:hidden"
                        aria-label="Close sidebar"
                    >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                             className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-2.293 4.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.414 0z"></path>
                        </svg>
                    </button>
                )}
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {sessions.length === 0 ? (
                    <div className="text-sm text-gray-400 text-center py-8">No chats yet. Start new conversation!</div>
                ) : (
                    sessions.map((session) => (
                        <div
                            key={session.id}
                            onClick={() => onSelectSession(session.id)}
                            className={`p-3 rounded-[calc(0.375rem-1px)] cursor-pointer group transition-all ${
                                currentSessionId === session.id
                                    ? "bg-[#171717] border border-[#303030] text-white"
                                    : "hover:bg-[#303030] text-gray-300 hover:text-white"
                            }`}
                        >
                            <div className="flex items-start gap-2 justify-between">
                                <div className="flex items-start gap-2 flex-1 min-w-0">
                                    <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{session.title}</p>
                                        <p className="text-xs text-gray-500 mt-1">{session.createdAt.toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onDeleteSession(session.id)
                                    }}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-500/20 rounded"
                                >
                                    <Trash2 className="w-3 h-3 text-red-400" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            <div
                className="p-4 border-t border-[#2F2F2F] text-xs text-gray-500 text-center flex flex-col items-center gap-2">
                {/* Avatar + Name */}
                <div className="flex items-center justify-center gap-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="/GGHeadshot.jpg" alt="Arcfield AI"
                                     className="object-cover w-full h-full"
                        />
                        <AvatarFallback>GG</AvatarFallback>
                    </Avatar>
                    <span className="text-gray-400 font-medium">Arcfield AI</span>
                </div>

                {/* Text */}
                <span className="text-[11px] text-gray-500 leading-tight">
        Chats are saved up to 30 days.
      </span>
            </div>        </div>
    )
}
