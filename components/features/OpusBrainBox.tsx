"use client";

import { motion } from "framer-motion";
import { GlowButton } from "./GlowButton";
import { cn } from "@/lib/utils";

export function OpusBrainBox() {
    const features = [
        {
            title: "→ Dados em tempo real",
            desc: "Sentimento, objeções, horários de pico",
        },
        {
            title: "→ Cruzamento comercial",
            desc: "Taxa de conversão, abandono, ticket médio",
        },
        {
            title: "→ Inteligência preditiva",
            desc: "Gargalos, oportunidades, riscos de churn",
        },
    ];

    return (
        <section className="relative max-w-6xl mx-auto">
            {/* Main Container */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-black/40 backdrop-blur-xl border border-primary/30 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-[0_0_50px_rgba(0,242,254,0.1)]"
            >
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="text-5xl md:text-6xl mb-6">🧠</div>
                        <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">OPUS </span>
                            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,242,254,0.5)]">BRAIN</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-primary/80 font-medium">
                            Seu Segundo Cérebro Digital
                        </p>
                    </div>

                    <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12" />

                    {/* Description */}
                    <div className="text-center mb-16 space-y-4">
                        <p className="text-lg md:text-2xl text-white/90">
                            Não é dashboard que mostra gráficos.
                        </p>
                        <p className="text-lg md:text-2xl text-white/90">
                            É um <span className="text-primary font-bold">mastermind de C-Levels em IA</span> que conversa com você sobre seus dados em linguagem natural.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-16">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-colors group text-center md:text-left"
                            >
                                <h4 className="text-primary font-bold text-sm md:text-base mb-2 group-hover:translate-x-1 transition-transform">
                                    {f.title}
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Chat Mockup */}
                    <div className="w-full max-w-4xl bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 mb-16 relative overflow-hidden backdrop-blur-sm">
                        <div className="space-y-6">
                            {/* Question */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl">👤</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                                        EMPRESÁRIO PERGUNTA:
                                    </p>
                                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                        <p className="text-white/80 text-sm md:text-base italic">
                                            "Por que tanta gente reclama de calçados?"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Response */}
                            <div className="flex items-start gap-4 flex-row-reverse">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,242,254,0.3)] border border-primary/30">
                                    <span className="text-xl">🧠</span>
                                </div>
                                <div className="space-y-1 text-right w-full">
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">
                                        OPUS BRAIN RESPONDE:
                                    </p>
                                    <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 text-left ml-auto max-w-[90%]">
                                        <p className="text-white/80 text-sm md:text-base mb-4">
                                            "Calçados lideram em reclamações (<span className="text-primary font-bold">23% do total</span>). Analisei 1.847 conversas e identifiquei: 67% dos problemas são relacionados a tamanho. Tabela de medidas está gerando expectativa errada."
                                        </p>
                                        <p className="text-white/80 text-sm md:text-base">
                                            <strong className="text-primary">Sugestão:</strong> revisar fornecedor X e criar FAQ com guia de numeração. Implemento automaticamente?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="text-center mb-10 max-w-2xl">
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                            Não é relatório estático. É <span className="text-primary font-bold italic">inteligência conversacional</span> que gera gráficos, visualizações, e <span className="text-primary font-bold">planos de ação personalizados</span> na hora.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <GlowButton size="lg" className="px-12 py-7 text-lg uppercase tracking-widest font-bold">
                        AGENDAR DEMONSTRAÇÃO
                    </GlowButton>
                </div>
            </motion.div>
        </section>
    );
}
