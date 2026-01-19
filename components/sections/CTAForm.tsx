"use client";

import { GlowButton } from "../features/GlowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function CTAForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [whatsapp, setWhatsapp] = useState("");
    const [market, setMarket] = useState("");
    const [revenue, setRevenue] = useState("");
    const [leads, setLeads] = useState("");

    const formatWhatsApp = (value: string) => {
        const numbers = value.replace(/\D/g, "").slice(0, 11);
        if (numbers.length <= 2) return `(${numbers}`;
        if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    };

    const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWhatsapp(formatWhatsApp(e.target.value));
    };


    const dropdownOptions = {
        market: [
            "Serviços", "Ecommerce", "Consultoria", "Infoprodutos", "Mentoria", "SaaS", "Outro"
        ],
        revenue: [
            "Não Faturo Ainda",
            "Menos de R$100 mil",
            "Entre R$100 mil e R$500 mil",
            "Entre R$500 mil e R$1 milhão",
            "Entre R$1 milhão e R$5 milhões",
            "Entre R$5 milhões e R$15 milhões",
            "Entre R$15 milhões e R$30 milhões",
            "Acima de R$30 milhões"
        ],
        leads: [
            "Até 500",
            "501 a 1.000",
            "1.001 a 5.000",
            "5.000 a 10.000",
            "10.000 a 50.000",
            "50.000 a 200.000",
            "Acima de 200.000",
            "Não Tenho Leads"
        ]
    };

    return (
        <section className="py-32 px-6 md:px-20 bg-background relative overflow-hidden" id="contact">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-start relative z-10">

                {/* Left: Copy */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                            Agende sua <br />
                            <span className="text-primary italic">demonstração</span>
                        </h2>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white/90 uppercase tracking-widest text-sm">O que acontece na demonstração:</h3>
                            <ul className="space-y-6">
                                {[
                                    { title: "Diagnóstico do seu cenário", desc: "Mapeamos volume de atendimento, gargalos, custos atuais" },
                                    { title: "Simulação de ROI", desc: "Calculamos economia estimada no SEU caso específico" },
                                    { title: "Traçar seu plano de ação", desc: "Definimos roadmap personalizado de implementação baseado na sua situação real e objetivos" }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 border border-primary/30 text-primary text-xs font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">{item.title}</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl inline-flex flex-col gap-2">
                        <p className="text-white/80"><span className="text-primary font-bold">Tempo:</span> 30-45 minutos</p>
                        <p className="text-white/80"><span className="text-primary font-bold">Formato:</span> Videochamada com um dos fundadores</p>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-card/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 relative">
                    {/* Form Shine */}
                    <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    {status === "success" ? (
                        <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                            <div className="text-6xl mb-6 shadow-[0_0_30px_rgba(0,242,254,0.3)] w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto border border-primary/20">✅</div>
                            <h3 className="text-3xl font-bold text-white mb-2">Solicitação Recebida!</h3>
                            <p className="text-muted-foreground max-w-xs mx-auto">Nossos fundadores entrarão em contato via WhatsApp em breve para o agendamento.</p>
                        </div>
                    ) : status === "error" ? (
                        <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                            <div className="text-6xl mb-6 w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto border border-red-500/20">❌</div>
                            <h3 className="text-3xl font-bold text-white mb-2">Ops! Algo deu errado</h3>
                            <p className="text-muted-foreground max-w-xs mx-auto mb-4">Tente novamente ou entre em contato pelo WhatsApp.</p>
                            <button onClick={() => setStatus("idle")} className="text-primary hover:underline">Tentar novamente</button>
                        </div>
                    ) : (
                        <form
                            action="https://formsubmit.co/victor@opusbr.com"
                            method="POST"
                            className="space-y-6"
                        >
                            {/* Hidden Fields for configuration */}
                            <input type="hidden" name="_subject" value="🚀 Novo Lead Opus Hub!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_next" value="https://www.opusbr.com/#contact" />

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-white ml-1">Nome completo</Label>
                                    <Input id="name" name="name" placeholder="Seu nome" required className="bg-white/[0.03] border-white/10 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="whatsapp" className="text-white ml-1">WhatsApp</Label>
                                    <Input
                                        id="whatsapp"
                                        name="whatsapp"
                                        value={whatsapp}
                                        onChange={handleWhatsAppChange}
                                        placeholder="(XX) XXXXX-XXXX"
                                        required
                                        className="bg-white/[0.03] border-white/10 h-12"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-white ml-1">E-mail Corporativo</Label>
                                    <Input id="email" name="email" type="email" placeholder="voce@empresa.com" required className="bg-white/[0.03] border-white/10 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company" className="text-white ml-1">Empresa</Label>
                                    <Input id="company" name="company" placeholder="Nome da empresa" required className="bg-white/[0.03] border-white/10 h-12" />
                                </div>
                            </div>

                            {/* Hidden inputs to capture state values that might not send if using custom select components without hidden fields using native names */}
                            <input type="hidden" name="market" value={market} />
                            <input type="hidden" name="revenue" value={revenue} />
                            <input type="hidden" name="leads" value={leads} />

                            <div className="space-y-2">
                                <Label className="text-white ml-1">Qual mercado você trabalha atualmente?</Label>
                                <Select onValueChange={setMarket} required>
                                    <SelectTrigger className="bg-white/[0.03] border-white/10 h-12">
                                        <SelectValue placeholder="Selecione o mercado..." />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-900 border-white/10 text-white">
                                        {dropdownOptions.market.map(opt => (
                                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {market === "Outro" && (
                                <div className="space-y-2 transition-all animate-in slide-in-from-top-2 duration-300">
                                    <Label htmlFor="other_market" className="text-white ml-1">Especifique o seu mercado</Label>
                                    <Input id="other_market" name="other_market" placeholder="Descreva seu nicho..." required className="bg-white/[0.03] border-white/10 h-12" />
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label className="text-white ml-1">Faixa de Faturamento Mensal</Label>
                                <Select onValueChange={setRevenue} required>
                                    <SelectTrigger className="bg-white/[0.03] border-white/10 h-12">
                                        <SelectValue placeholder="Selecione o faturamento..." />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-900 border-white/10">
                                        {dropdownOptions.revenue.map(opt => (
                                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-white ml-1">Volume de Atendimentos/Leads por mês</Label>
                                <Select onValueChange={setLeads} required>
                                    <SelectTrigger className="bg-white/[0.03] border-white/10 h-12">
                                        <SelectValue placeholder="Selecione o volume..." />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-900 border-white/10">
                                        {dropdownOptions.leads.map(opt => (
                                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="pt-4">
                                <GlowButton className="w-full py-7 text-lg font-bold uppercase tracking-widest">
                                    AGENDAR DEMONSTRAÇÃO
                                </GlowButton>
                            </div>

                            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                                Prometemos zero spam. Seus dados estão seguros e criptografados.
                            </p>
                        </form>
                    )}
                </div>

            </div>
        </section>
    );
}
