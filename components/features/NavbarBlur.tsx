"use client";

import { GlowButton } from "./GlowButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function NavbarBlur() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#0a0a0a]/80 backdrop-blur-md py-2 shadow-sm"
                    : "bg-transparent py-2"
            )}
        >
            {/* Ultra-thin shiny gradient border line (Only visible when scrolled or always? User guidelines imply style. Let's make it subtle always, stronger on scroll if needed, or just always nice) */}
            <div
                className={cn(
                    "absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2fe]/50 to-transparent transition-opacity duration-300",
                    scrolled ? "opacity-100" : "opacity-0"
                )}
            />
            <div className="container mx-auto px-6 md:px-20 flex items-center justify-between">
                <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
                    <Image
                        src="/assets/opus-logo-recortada.png"
                        alt="Opus Hub Logo"
                        width={120}
                        height={36}
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="hidden md:block"></div>

                <GlowButton size="sm" className="hidden md:inline-flex">
                    AGENDAR DEMONSTRAÇÃO
                </GlowButton>
            </div>
        </nav>
    );
}
