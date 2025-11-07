import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex items-center justify-between h-[var(--header-height)] px-10  border-b border-[#292A2E] select-none">
            {/* Left Logo */}
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Arcfield_Symbol_White.png"
                        alt="Arcfield Logo"
                        width={35}
                        height={40}
                        priority
                    />
                </Link>
            </div>

            {/* Center Navigation */}
            <nav className="flex items-center gap-10 text-bolt-elements-textSecondary text-lg tracking-wide">
                <Link href="/about" className="hover:text-[#f5c46b] transition-colors">
                    ABOUT
                </Link>
                <Link href="/missions" className="hover:text-[#f5c46b] transition-colors">
                    MISSIONS
                </Link>
                <Link href="/solutions" className="hover:text-[#f5c46b] transition-colors">
                    SOLUTIONS
                </Link>
                <Link href="/careers" className="hover:text-[#f5c46b] transition-colors">
                    CAREERS
                </Link>
            </nav>

            {/* Spacer (or right-side content placeholder) */}
            <div className="w-[35px]" />
        </header>
    )
}
