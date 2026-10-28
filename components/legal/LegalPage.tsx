import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { company } from "@/lib/company";

interface LegalPageProps {
    title: string;
    updatedAt: string;
    children: ReactNode;
}

export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
    return (
        <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary">
            <header className="border-b border-white/5">
                <div className="container mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
                    <Link href="/" aria-label="Voltar para a página inicial da Opus Hub" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/assets/opus-logo-recortada.png"
                            alt="Opus Hub"
                            width={120}
                            height={36}
                            className="object-contain"
                            priority
                        />
                    </Link>
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao site
                    </Link>
                </div>
            </header>

            <main className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-white">{title}</h1>
                <p className="mt-3 text-sm text-muted-foreground">Última atualização: {updatedAt}</p>
                <div className="mt-12 space-y-12">{children}</div>
            </main>

            <Footer />
        </div>
    );
}

interface LegalSectionProps {
    id?: string;
    title: string;
    children: ReactNode;
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
    return (
        <section id={id} className="space-y-4 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-white">{title}</h2>
            <div className="space-y-4 text-base leading-relaxed text-white/80 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4">
                {children}
            </div>
        </section>
    );
}

export function CompanyCard() {
    return (
        <dl className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed grid gap-3 sm:grid-cols-[9rem_1fr]">
            <dt className="text-muted-foreground">Razão social</dt>
            <dd className="text-white font-semibold">{company.legalName}</dd>
            <dt className="text-muted-foreground">CNPJ</dt>
            <dd className="text-white font-semibold">{company.cnpj}</dd>
            <dt className="text-muted-foreground">Endereço</dt>
            <dd className="text-white/80">{company.address}</dd>
            <dt className="text-muted-foreground">E-mail de contato</dt>
            <dd>
                <a href={`mailto:${company.contactEmail}`} className="text-primary underline underline-offset-4">
                    {company.contactEmail}
                </a>
            </dd>
        </dl>
    );
}
