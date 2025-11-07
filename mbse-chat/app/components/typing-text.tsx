"use client"

import { useState, useEffect } from "react"

interface TypingTextProps {
    templates: string[]
    typingSpeed?: number
    deletingSpeed?: number
    pauseDuration?: number
    isVisible?: boolean
}

export function TypingText({
                               templates,
                               typingSpeed = 50,
                               deletingSpeed = 30,
                               pauseDuration = 2000,
                               isVisible = true,
                           }: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("")
    const [templateIndex, setTemplateIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isWaiting, setIsWaiting] = useState(false)

    const currentTemplate = templates[templateIndex]

    useEffect(() => {
        if (!isVisible) {
            return
        }

        let timeout: NodeJS.Timeout

        if (isWaiting) {
            // Pause before deleting
            timeout = setTimeout(() => {
                setIsWaiting(false)
                setIsDeleting(true)
            }, pauseDuration)
        } else if (isDeleting) {
            // Deleting characters
            if (displayedText.length === 0) {
                setIsDeleting(false)
                setTemplateIndex((prev) => (prev + 1) % templates.length)
            } else {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1))
                }, deletingSpeed)
            }
        } else {
            // Typing characters
            if (displayedText === currentTemplate) {
                setIsWaiting(true)
            } else {
                timeout = setTimeout(() => {
                    setDisplayedText(currentTemplate.slice(0, displayedText.length + 1))
                }, typingSpeed)
            }
        }

        return () => clearTimeout(timeout)
    }, [
        displayedText,
        isDeleting,
        isWaiting,
        currentTemplate,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        templates,
        isVisible,
    ])

    if (!isVisible) {
        return null
    }

    return (
        <span className="inline-flex items-center gap-1">
      {displayedText}
            <span className="w-0.5 h-5 bg-current animate-pulse" aria-hidden="true" />
    </span>
    )
}
