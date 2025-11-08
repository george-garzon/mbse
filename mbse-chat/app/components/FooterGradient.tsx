"use client";

import React from "react";
import Image from "next/image";

export default function FooterGradient() {
    return (
        <div className="footer-gradient">

            {/* Blurred gradient */}
            <div className="absolute left-0 right-0 h-full blur-[45px] pointer-events-none z-[1]">
                <Image
                    src="/header-gradient-arcfield.svg"
                    alt="Header gradient"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-[1] blur-[px] pointer-events-none hidden md:block">
                <Image
                    src="/trail3.png"
                    alt="rocket trail"
                    width={650}
                    height={1000}
                    className="absolute top-0 right-0 bottom-0 text-transparent mx-auto"
                    priority
                />
            </div>

            <div className="absolute left-0 right-0 h-full pointer-events-none z-[1]">
                <Image
                    src="/stars.png"
                    alt="star speckle"
                    width={1000}
                    height={400}
                    className="absolute top-0 left-0 object-scale-down"
                    priority
                />
            </div>
        </div>
    );
}
