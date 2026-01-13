"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
    size?: "sm" | "md" | "lg";
    glow?: boolean;
    children: React.ReactNode;
}

export function GlowButton({ className, size = "md", glow = true, children, onClick, ...props }: GlowButtonProps) {
    const sizeClasses = {
        sm: "px-6 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-5 text-lg" // Increased padding for premium feel
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(
                "group relative inline-flex items-center justify-center font-bold text-white rounded-full overflow-hidden transition-all duration-300",
                "bg-gradient-to-r from-[#2E8BFF] to-[#00F2FE]", // Brand Gradient
                glow && "shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_40px_rgba(0,242,254,0.6)]", // Enhanced Glow
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {/* Dynamic Shine Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 z-10" />

            {/* Content with optional Arrow Icon if implied */}
            <span className="relative z-20 flex items-center gap-2 tracking-wide">
                {children}
            </span>

            {/* Animated Border/Ring Effect (Subtle) */}
            <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors z-20 pointer-events-none" />
        </motion.button>
    );
}
