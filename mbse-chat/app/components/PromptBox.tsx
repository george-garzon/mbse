"use client"

import { useState } from "react"
import {TypingText} from "@/app/components/typing-text";

export default function PromptBox() {
    const [inputValue, setInputValue] = useState("")

    const templates = [
        "How can I help you today?",
        "Build something amazing...",
        "Let's create together.",
        "What would you like to build?",
        "Your next great idea starts here.",
    ]

    const showAnimation = inputValue.length === 0
    return (
        <div className="relative px-[var(--chat-padding)] w-full max-w-chat mx-auto z-prompt">
            <div className="relative shadow-xs rounded-[0.375rem] p-[1px] overflow-clip">
                {/* Border background */}
                <div className="absolute inset-0 bg-bolt-elements-prompt-border -z-1" />

                {/* Radial / gradient prompt background */}
                <div className="PromptContainer_border absolute top-0 left-0 right-0 h-[136px] rounded-[calc(0.375rem-1px)] -z-1" />

                {/* Subtle horizontal overlay gradient line */}
                <div className="absolute top-0 left-[10px] h-px w-[100px] bg-gradient-to-r from-accent-300/0 via-accent-300 to-accent-300/0 mix-blend-overlay" />

                {/* Main text area container */}
                <div className="bg-bolt-elements-prompt-background rounded-[calc(0.375rem-1px)]">
                    <div className="relative select-none">
                        {/* Hidden textarea for actual input */}
                        <textarea
                            className="w-full px-4 pt-4 pr-16 pb-4 focus:outline-none resize-none text-white placeholder-muted-foreground bg-transparent text-sm font-medium"
                            style={{ minHeight: "76px", maxHeight: "200px" }}
                            translate="no"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />

                        {/* Animated placeholder overlay */}
                        <div className="absolute top-4 left-4 right-16 pointer-events-none text-muted-foreground text-sm font-medium">
                            <TypingText
                                templates={templates}
                                typingSpeed={60}
                                deletingSpeed={30}
                                pauseDuration={2500}
                                isVisible={showAnimation}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between text-sm p-4 pt-2">
                        <div className="flex gap-1 items-center w-full">
                            <div
                                className="flex items-center justify-between w-full">
                                {/* Left: Create new button */}
                                <div>
                                    <button
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#48484A] hover:bg-[#2F2F2F] transition-colors text-fff"
                                        aria-label="Create new"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                             strokeWidth="2">
                                            <line x1="12" y1="5" x2="12" y2="19"/>
                                            <line x1="5" y1="12" x2="19" y2="12"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between ">

                                    {/* Right: Build now button */}
                                    <button
                                        className="flex items-center gap-2 px-6 py-2 bg-[#00597C] hover:bg-[#00597C] text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
                                    >
                                        Send
                                        <svg
                                            className="w-4 h-4 text-white transition-all duration-200 ease-in-out animate-in fade-in slide-in-from-right-2 hidden sm:block"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="m4.497 20.835l16.51-7.363c1.324-.59 1.324-2.354 0-2.944L4.497 3.164c-1.495-.667-3.047.814-2.306 2.202l3.152 5.904c.245.459.245 1 0 1.458l-3.152 5.904c-.74 1.388.81 2.87 2.306 2.202"></path>
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
