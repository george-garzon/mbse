"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const menuItems = [
        { label: "ABOUT", href: "/about" },
        { label: "MISSIONS", href: "/missions" },
        { label: "SOLUTIONS", href: "/solutions" },
        { label: "CAREERS", href: "/careers" },
    ]

    return (
        <header className="relative z-50 bg-bolt-elements-background-depth-1 border-b border-[#292A2E] select-none">
            <div className="flex items-center justify-between h-[var(--header-height)] px-6 sm:px-10">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Arcfield_Symbol_White.png"
                        alt="Arcfield Logo"
                        width={35}
                        height={40}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10 text-bolt-elements-textSecondary text-lg tracking-wide">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="hover:text-[#f5c46b] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-lg hover:bg-[#1f1f1f] transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-64" : "max-h-0"
                }`}
            >
                <div className="bg-[#1a1a1a]/95 border-t border-[#292A2E] px-6 py-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2 px-3 rounded hover:bg-[#2a2a2a] transition-colors text-bolt-elements-textPrimary"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}
