"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const clients = [
    { name: "Aquabeat", logo: "/assets/clients/client-11.png" },
    { name: "V4 Company", logo: "/assets/clients/client-12.png" },
    { name: "Client 13", logo: "/assets/clients/client-13.png" },
    { name: "Client 1", logo: "/assets/clients/client-01.png" },
    { name: "Client 2", logo: "/assets/clients/client-02.png" },
    { name: "Client 3", logo: "/assets/clients/client-03.png" },
    { name: "Client 4", logo: "/assets/clients/client-04.png" },
    { name: "Client 5", logo: "/assets/clients/client-05.png" },
    { name: "Belevita", logo: "/assets/clients/client-06.png" },
    { name: "Crater", logo: "/assets/clients/client-07.png" },
    { name: "Casa Tree", logo: "/assets/clients/client-08.png" },
    { name: "Z", logo: "/assets/clients/client-09.png" },
    { name: "Instituto João Tassinary", logo: "/assets/clients/client-10.png" },
];

export function LogoMarquee() {
    return (
        <section className="py-10 bg-black/50 overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm md:text-base font-medium tracking-widest text-muted-foreground uppercase">
                    PLAYERS QUE UTILIZAM NOSSO ECOSSISTEMA
                </p>
            </div>

            <div className="relative flex w-full whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60, // Slower: increased from 20s to 60s
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Double the list for seamless loop */}
                    {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative w-32 md:w-40 h-12 md:h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none",
                                (client.name === "Capital Concreto" || client.name === "Crater" || client.name === "Instituto João Tassinary") && "invert brightness-200"
                            )}
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
