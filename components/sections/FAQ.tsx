"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Opus funciona para o MEU tipo de negócio?",
        answer: "Atendemos ecommerce, infoprodutos, serviços high-ticket e qualquer negócio com volume que precisa escalar. Se você tem equipe sobrecarregada, Opus resolve."
    },
    {
        question: "Quanto tempo leva para implementar?",
        answer: "7 a 14 dias do contrato até operação rodando. Nosso time faz tudo — você valida etapas e fornece as informações necessárias."
    },
    {
        question: "Preciso demitir minha equipe?",
        answer: "Não. A equipe sai do operacional repetitivo e vai para funções de crescimento (relacionamento VIP, curadoria). IA assume volume, humanos assumem estratégia."
    },
    {
        question: "E se não der certo? Fico preso em contrato?",
        answer: "Contrato anual, mas com autonomia total. Se realmente não funcionar, conversamos abertamente (preferimos clareza a prender cliente insatisfeito)."
    },
    {
        question: "Como sei se vai ter ROI no meu caso?",
        answer: "Na demonstração, mapeamos seu cenário e simulamos ROI estimado ANTES de você contratar. Sem achismo, com números reais."
    }
];

export function FAQ() {
    return (
        <section className="py-24 px-6 md:px-20 bg-background" id="faq">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">
                    Perguntas que você provavelmente tem:
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl px-4 bg-secondary/5">
                            <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
