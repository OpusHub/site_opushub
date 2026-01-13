"use client";

import { motion } from "framer-motion";
import { GlowButton } from "../features/GlowButton";

const problems = [
    {
        emoji: "🔥",
        title: "Atendimento lento deixa dinheiro na mesa",
        description: "Cliente manda mensagem às 23h, acorda sem resposta, e compra do concorrente às 9h. Você nem sabe quantos pedidos perdeu ontem — porque ninguém mede."
    },
    {
        emoji: "😵‍💫",
        title: "Equipe sobrecarregada não resolve o caos",
        description: "Contratar mais gente custa R$ 3-5k/mês por pessoa, mas mensagens continuam perdidas e informações desencontradas. Você infla custo sem cortar o problema na raiz."
    },
    {
        emoji: "📉",
        title: "Você pilota a empresa no achismo",
        description: "\"Por que vendas caíram?\" \"Onde o funil está travando?\" Se responde com intuição, está dirigindo vendado."
    },
    {
        emoji: "🕰️",
        title: "Você está preso no operacional",
        description: "Seu dia some respondendo WhatsApp, resolvendo urgências, apagando incêndios. Sobra zero tempo para estratégia, growth, ou fazer o negócio realmente escalar."
    }
];

export function Problems() {
    return (
        <section className="relative py-24 px-6 md:px-20 bg-[#0f0f0f]">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16 text-white max-w-3xl mx-auto">
                    Se isso acontece na sua empresa, você <span className="text-primary">precisa ver isso:</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
                    {problems.map((prob, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02, borderColor: "rgba(0,242,254,0.5)" }}
                            className="p-8 bg-card border border-white/10 rounded-2xl hover:shadow-[0_0_30px_rgba(0,242,254,0.1)] transition-all duration-300 group"
                        >
                            <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                {prob.emoji}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {prob.title}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {prob.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <GlowButton size="lg" className="px-10 py-6 text-lg">
                        RESOLVER ISSO AGORA
                    </GlowButton>
                    <p className="text-sm text-muted-foreground mt-4">
                        Diagnóstico gratuito do seu cenário
                    </p>
                </div>
            </div>
        </section>
    );
}
