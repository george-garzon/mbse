import { Suspense } from "react"
import ChatPageClient from "./ChatPageClient"

export default function ChatPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading chat...</div>}>
            <ChatPageClient />
        </Suspense>
    )
}
