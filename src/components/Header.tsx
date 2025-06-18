import { Button } from "@/components/ui/button";
import { useState, useContext } from "react";
import { Switch } from "@/components/ui/switch";
import { LangContext } from "@/pages/Index";

const Header = ({ onOpenInscripcion }: { onOpenInscripcion: () => void }) => {
  const lang = useContext(LangContext);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-empren-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="font-clash font-bold text-xl text-empren-text">EMPRÈN SERVEIS</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('programa')} className="text-empren-text hover:text-empren-purple transition-colors">
            {lang === 'cat' ? 'Programa' : 'Programa'}
          </button>
          <button onClick={() => scrollToSection('beneficios')} className="text-empren-text hover:text-empren-purple transition-colors">
            {lang === 'cat' ? 'Beneficis' : 'Beneficios'}
          </button>
          <button onClick={() => scrollToSection('verticales')} className="text-empren-text hover:text-empren-purple transition-colors">
            {lang === 'cat' ? 'Verticals' : 'Verticales'}
          </button>
          <button onClick={() => scrollToSection('contacto')} className="text-empren-text hover:text-empren-purple transition-colors">
            {lang === 'cat' ? 'Contacte' : 'Contacto'}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-xs ${lang === 'es' ? 'text-empren-purple' : 'text-gray-400'}`}>ES</span>
            <Switch
              checked={lang === 'cat'}
              onCheckedChange={() => {
                const newLang = lang === 'es' ? 'cat' : 'es';
                localStorage.setItem('lang', newLang);
                window.dispatchEvent(new Event('languageChange'));
              }}
              aria-label="Cambiar idioma"
              className="data-[state=checked]:bg-empren-purple"
            />
            <span className={`font-bold text-xs ${lang === 'cat' ? 'text-empren-purple' : 'text-gray-400'}`}>CAT</span>
          </div>
        </div>

        <Button 
          onClick={onOpenInscripcion}
          className="bg-empren-purple hover:bg-empren-purple/90 text-white px-6 py-2"
        >
          {lang === 'cat' ? 'Inscriu-te' : 'Inscríbete'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
