"use client";

import { motion } from "framer-motion";
import { GlowButton } from "../features/GlowButton";
import { YouTubeFacade } from "../features/YouTubeFacade";
import { ArrowUpRight } from "lucide-react";

const numbers = [
    { value: "R$ 44K", label: "Economizados/mês em salários" },
    { value: "81.7%", label: "Taxa de Resposta (vs 12% anterior)" },
    { value: "R$ 682K", label: "Receita recuperada em 90 dias" },
    { value: "24/7", label: "Disponibilidade real" },
];

export function CaseStudy() {
    const scrollToForm = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] relative overflow-hidden" id="case">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Case <span className="text-primary italic">Belevita</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left: Video Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[9/16] max-w-[320px] mx-auto w-full group"
                    >
                        <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full w-full rounded-3xl border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl">
                            <YouTubeFacade videoId="5BPqC8wD8f4" title="Belevita Case Study" />
                        </div>
                    </motion.div>

                    {/* Right: Results & Metrics */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-8 border-l-4 border-primary pl-4">
                                DEPOIS DA OPUS HUB:
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {numbers.map((num, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-primary/30 transition-all group"
                                    >
                                        <div className="text-2xl md:text-3xl font-black text-primary mb-1 group-hover:scale-105 transition-transform origin-left">
                                            {num.value}
                                        </div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                                            {num.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Insight Box Refined */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ArrowUpRight className="w-12 h-12 text-primary" />
                            </div>

                            <div className="flex gap-4 items-start relative z-10">
                                <div className="p-3 bg-primary/20 rounded-2xl">
                                    <span className="text-2xl">💡</span>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        O <strong className="text-primary">Opus Brain</strong> identificou que <span className="text-primary font-bold">59%</span> dos atendimentos eram "Onde está meu pedido?" — problema cortado em <span className="text-primary font-bold">60%</span> com notificações proativas.
                                    </p>
                                    <div className="pt-4 border-t border-primary/10 font-bold text-primary flex items-center gap-2 italic">
                                        Belevita reduziu volume operacional massivamente.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Conclusion & CTA */}
                <div className="pt-12 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto text-center md:text-left">
                        <div className="max-w-md">
                            <p className="text-xl text-white/80 leading-relaxed">
                                <span className="text-primary font-bold">O diferencial que importa:</span> Belevita não demitiu ninguém. Realocou a equipe para funções estratégicas.
                            </p>
                        </div>
                        <GlowButton size="lg" onClick={scrollToForm} className="px-10 py-7 text-lg uppercase tracking-widest font-bold">
                            QUERO ESSE RESULTADO
                        </GlowButton>
                    </div>
                </div>

            </div>
        </section>
    );
}
