import { NavbarBlur } from "@/components/features/NavbarBlur";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Problems } from "@/components/sections/Problems";
import { Differentiators } from "@/components/sections/Differentiators";
import { Transformation } from "@/components/sections/Transformation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { FAQ } from "@/components/sections/FAQ";
import { CTAForm } from "@/components/sections/CTAForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary">
      <NavbarBlur />

      <Hero />
      <LogoMarquee />
      <Problems />
      <Differentiators />
      <Transformation />
      <HowItWorks />
      <CaseStudy />
      <FAQ />
      <CTAForm />
      <Footer />
    </main>
  );
}
