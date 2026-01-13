"use client";

import { motion } from "framer-motion";
import { OpusBrainBox } from "../features/OpusBrainBox";
import { X, Check } from "lucide-react";

export function Differentiators() {
    return (
        <section className="relative py-32 px-6 md:px-20 bg-background overflow-hidden" id="features">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none opacity-50" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto">
                        Opus Hub não é chatbot. É o ecossistema que transforma sua empresa em <span className="text-primary">operação AI First</span>.
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        A diferença é estrutural:
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
                    {/* Chatbot Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl border border-red-500/30 bg-red-500/5 backdrop-blur-sm"
                    >
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                            <X className="text-red-500 w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-red-500 mb-4">Chatbot Tradicional</h3>
                        <p className="text-muted-foreground text-lg">
                            Responde perguntas básicas, parece robótico e trava quando o cliente sai do script. Gera frustração e perde vendas.
                        </p>
                    </motion.div>

                    {/* Opus Hub Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl border border-primary/50 bg-primary/5 backdrop-blur-sm shadow-[0_0_50px_rgba(0,242,254,0.1)]"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <Check className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Opus Hub</h3>
                        <p className="text-muted-foreground text-lg">
                            É um <strong className="text-white">Time de IA especializado</strong>: agentes dedicados com contexto, memória e autonomia para negociar e resolver.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-20" />

                {/* Opus Brain Visual */}
                <div className="mb-20">
                    <p className="text-2xl md:text-3xl text-center text-primary mb-12 font-heading">
                        Mas o diferencial que nenhum concorrente oferece:
                    </p>
                    <OpusBrainBox />
                </div>

            </div>
        </section>
    );
}
