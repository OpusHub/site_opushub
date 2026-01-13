"use client";

import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 px-6 md:px-20 bg-background border-t border-white/5">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading text-white mb-2">Opus Hub</h3>
                        <p className="text-muted-foreground text-sm">
                            &copy; {new Date().getFullYear()} Opus Hub. Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/company/opusbr/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/opushub.br" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
