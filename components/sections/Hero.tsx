"use client";

import { GlowButton } from "../features/GlowButton";
import { motion } from "framer-motion";

export function Hero() {
    const scrollToForm = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Spotlights - Corrected Colors (Cyan/Purple) */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00f2fe]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6a11cb]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-20 relative z-10 text-center max-w-4xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Headline - Smaller & Harmonious */}
                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-[1.15] mb-8 tracking-tight text-white">
                        Seu atendimento está <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#6a11cb] animate-pulse-slow">
                            vazando dinheiro
                        </span> <br />
                        enquanto você apaga incêndios
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed mx-auto font-light">
                        Transforme sua operação em uma <strong className="text-white font-medium">empresa AI First</strong>: ecossistema inteligente que escala comercial e atendimento 24/7, enquanto gera dados que revelam exatamente onde você perde vendas.
                    </p>

                    {/* CTA - Using global GlowButton now */}
                    <div className="flex flex-col items-center gap-4">
                        <GlowButton size="lg" onClick={scrollToForm} className="text-xl">
                            AGENDAR DEMONSTRAÇÃO
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </GlowButton>
                        <p className="text-sm text-muted-foreground/60">
                            Demonstração gratuita para seu negócio
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
