"use client";

import React from "react";
import Image from "next/image";

export default function FooterGradient() {
    return (
        <div className="footer-gradient absolute bottom-0 left-0 right-0 min-h-[calc(100vh-133px)] overflow-hidden">

            {/* Blurred gradient background */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <Image
                    src="/gradient.png"
                    alt="Header gradient"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Rocket trail (hidden on mobile) */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <Image
                    src="/trail3.png"
                    alt="rocket trail"
                    width={650}
                    height={1000}
                    className="absolute top-0 right-0 text-transparent mx-auto object-contain"
                    priority
                />
            </div>

            {/* Stars overlay */}
            <div className="absolute inset-0 z-[3] pointer-events-none">
                <Image
                    src="/stars.png"
                    alt="star speckle"
                    width={1000}
                    height={400}
                    className="absolute top-0 left-0 object-cover opacity-70"
                    priority
                />
            </div>
        </div>
    );
}
