"use client";

import { motion } from "framer-motion";

const transformations = [
    {
        feature: "Equipe",
        before: "Equipe sobrecarregada respondendo WhatsApp 12h/dia",
        after: "Time de IA opera 24/7 sem férias, sem atestado"
    },
    {
        feature: "Gestão",
        before: "Dono preso no operacional sem tempo para estratégia",
        after: "Você delega atendimento e foca em crescimento"
    },
    {
        feature: "Decisões",
        before: "Decisões no achismo (\"acho que é frete...\")",
        after: "Dados claros que revelam gargalos reais do funil"
    },
    {
        feature: "Escala",
        before: "Contratar mais gente = mais custo sem resolver caos",
        after: "Escala operação sem aumentar folha salarial"
    },
    {
        feature: "Recuperação",
        before: "Cliente abandona carrinho e você nem sabe quantos",
        after: "Recuperação automática com follow-up personalizado"
    },
    {
        feature: "Dados",
        before: "Informação travada em planilhas que ninguém olha",
        after: "Inteligência conversacional que gera ação imediata"
    }
];

export function Transformation() {
    return (
        <section className="py-24 px-6 md:px-20 bg-[#0a0a0a]">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16 text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    A transformação que você vai experimentar:
                </h2>

                <div className="bg-secondary/5 rounded-3xl border border-white/10 overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-12 gap-4 p-6 md:p-8 bg-white/5 border-b border-white/10 font-bold text-lg md:text-xl text-white">
                        <div className="col-span-12 md:col-span-3">Critério</div>
                        <div className="col-span-6 md:col-span-4 text-red-400">ANTES (Sua Empresa)</div>
                        <div className="col-span-6 md:col-span-4 text-primary">DEPOIS (Opus Hub)</div>
                        <div className="hidden md:block col-span-1"></div>
                    </div>

                    {/* Rows */}
                    {transformations.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-12 gap-4 p-6 md:p-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center"
                        >
                            <div className="col-span-12 md:col-span-3 font-semibold text-muted-foreground uppercase tracking-wider text-sm">
                                {item.feature}
                            </div>
                            <div className="col-span-6 md:col-span-4 text-muted-foreground pr-2 flex items-start gap-2">
                                <span className="text-red-500 mt-1">✕</span> {item.before}
                            </div>
                            <div className="col-span-6 md:col-span-4 text-white pl-2 font-medium flex items-start gap-2 shadow-[0_0_20px_rgba(0,242,254,0.05)] rounded-lg">
                                <span className="text-primary mt-1">✓</span> {item.after}
                            </div>
                            <div className="hidden md:flex col-span-1 justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
