import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import TechVerticals from "@/components/TechVerticals";
import Methodology from "@/components/Methodology";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState, createContext, useEffect } from "react";

export const LangContext = createContext<'es' | 'cat'>('es');

const Index = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<'es' | 'cat'>(localStorage.getItem('lang') === 'cat' ? 'cat' : 'es');

  useEffect(() => {
    const handler = () => setLang(localStorage.getItem('lang') === 'cat' ? 'cat' : 'es');
    window.addEventListener('languageChange', handler);
    return () => window.removeEventListener('languageChange', handler);
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <div className="min-h-screen">
        <Header onOpenInscripcion={() => setOpen(true)} />
        <Hero open={open} setOpen={setOpen} />
        <Benefits />
        <TechVerticals />
        <Methodology />
        <Registration open={open} setOpen={setOpen} />
        <Contact />
        <Footer />
      </div>
    </LangContext.Provider>
  );
};

export default Index;
