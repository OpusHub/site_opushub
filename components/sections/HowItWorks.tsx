"use client";

import { motion } from "framer-motion";
import { GlowButton } from "../features/GlowButton";

const pillars = [
    {
        step: "1",
        title: "Estruturação Completa 360°",
        description: "Agentes especializados em cada etapa: atendimento inicial, qualificação, a recuperação. Treinados no SEU processo."
    },
    {
        step: "2",
        title: "Acompanhamento Individual",
        description: "Análise comportamental de cada lead: identifica padrões, detecta riscos de abandono e mapeia objeções."
    },
    {
        step: "3",
        title: "Inteligência que Gera Ação",
        description: "Opus Brain revela gargalos e horários de pico — e sugere planos de ação práticos, não só gráficos."
    },
    {
        step: "4",
        title: "Evolução Contínua de Dados",
        description: "Quanto mais sua operação roda, mais inteligente o sistema fica. Aprende com o comportamento do seu cliente."
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 px-6 md:px-20 bg-background border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-6 text-white">
                    Como o Ecossistema Opus funciona na prática:
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative p-8 bg-card rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group h-full flex flex-col justify-start overflow-hidden"
                        >
                            {/* Number - Subtle watermark background at the bottom-right */}
                            <div className="text-9xl font-black text-primary/10 absolute -bottom-6 -right-4 pointer-events-none transition-all duration-300 group-hover:text-primary/20 group-hover:scale-110 z-0 select-none">
                                {item.step}
                            </div>

                            <div className="relative z-10 w-full">
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Connector Line (Desktop only, except last) */}
                            {i !== pillars.length - 1 && (
                                <div className="hidden lg:block absolute top-[20%] -right-4 w-8 h-px bg-white/10 z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Setup Info */}
                <div className="mt-20 text-center max-w-3xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-4">Setup Completo Feito pelo Nosso Time</h3>
                    <p className="text-muted-foreground mb-8">
                        Você não implementa sozinho. Nós estruturamos, integramos, treinamos os agentes — você só valida etapas e fornece informações do seu negócio.
                    </p>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold">
                        Prazo: 7 a 14 dias do contrato à operação rodando.
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <GlowButton
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        size="lg"
                        className="px-10 py-7 text-lg uppercase tracking-widest font-bold"
                    >
                        AGENDAR DEMONSTRAÇÃO
                    </GlowButton>
                    <p className="text-sm text-muted-foreground mt-4">Diagnóstico gratuito do seu cenário • É grátis</p>
                </div>

            </div>
        </section>
    );
}
