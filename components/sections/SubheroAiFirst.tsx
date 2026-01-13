"use client";

import { motion } from "framer-motion";

export function SubheroAiFirst() {
    return (
        <section className="relative py-24 px-6 md:px-20 bg-background overflow-hidden border-b border-white/5">

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        Empresas que crescem sem contratar não usam IA como ferramenta isolada.<br className="hidden md:block" />
                        Elas se tornam <strong className="text-primary font-bold">operações AI First</strong> — onde automação não é pontual, mas estrutural.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative p-8 rounded-2xl border border-primary/20 bg-secondary/5 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">O que isso significa na prática:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Você não adiciona "um chatbot" no WhatsApp.<br /><br />
                            Você constrói um <strong className="text-white">Time de IA especializado</strong> que opera 24/7 em atendimento, qualificação, recuperação de vendas, pós-venda — e um <strong className="text-white">segundo cérebro digital</strong> que cruza dados e revela gargalos invisíveis do seu negócio.
                        </p>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[40px] rounded-full pointer-events-none" />
                    </motion.div>

                    <div className="flex flex-col items-start gap-6">
                        <div className="px-6 py-4 rounded-lg bg-primary/10 border border-primary/20 text-primary uppercase font-bold text-sm tracking-wider">
                            AI FIRST OPERATION
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
                            Automação não é pontual. <span className="text-primary">É estrutural.</span>
                        </h2>
                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="text-white font-bold tracking-wide border-b border-primary hover:text-primary transition-colors pb-1"
                        >
                            AGENDAR DEMONSTRAÇÃO
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
