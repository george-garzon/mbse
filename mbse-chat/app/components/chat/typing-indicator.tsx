"use client"

export default function TypingIndicator() {
    return (
        <div className="flex justify-start">
            <div className="bg-[#171717] border border-[#2F2F2F] rounded-lg rounded-bl-none px-6 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
            </div>
        </div>
    )
}
