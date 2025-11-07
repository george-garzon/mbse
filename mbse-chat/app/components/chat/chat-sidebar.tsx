"use client"

import { Plus, MessageCircle, Trash2 } from "lucide-react"

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
}

export default function ChatSidebar({
                                        sessions,
                                        currentSessionId,
                                        onSelectSession,
                                        onDeleteSession,
                                        onNewChat,
                                    }: ChatSidebarProps) {
    return (
        <div className="w-64 max-w-[300px] flex flex-col flex-shrink-0 border-r border-[#2F2F2F] bg-gradient-to-b from-navy-900 to-navy-950 flex-1 min-h-0">
            {/* Header with Logo */}
            <div className="p-4 border-b border-[#2F2F2F]">
                {/* Need button here to close the chat*/}
                <div className="close-sidebar">

                </div>

                <button
                    onClick={onNewChat}
                    className="w-full px-6 py-2 bg-[#00597C] hover:[#00597C] text-white rounded-full flex items-center justify-center gap-2 font-medium"
                >
                    <Plus className="w-4 h-4"/>
                    New Chat
                </button>
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
                            className={`p-3 rounded-lg cursor-pointer group transition-all ${
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
            <div className="p-4 border-t border-[#2F2F2F] text-xs text-gray-500 text-center">Arcfield AI</div>
        </div>
    )
}
