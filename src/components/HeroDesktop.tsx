import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Sparkles } from "lucide-react";
import { useEffect, useContext } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import StepForm from "./StepForm";
import { LangContext } from "@/pages/Index";

const HeroDesktop = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const { gsap } = useGSAP();
  const lang = useContext(LangContext);

  const scrollToBenefits = () => {
    const element = document.getElementById('beneficios');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Floating animation for background elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });
  }, [gsap]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F5F3F5' }}>
      {/* Modal de inscripción */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-empren-purple text-2xl font-bold z-10"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <StepForm />
          </div>
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-empren-purple/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-empren-purple/5 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-20 h-20 bg-empren-purple/8 rounded-full blur-xl"></div>
      </div>

      {/* Background with people image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/42de9cfc-3488-4f7f-be53-2f9d94cc1ee7.png" 
            alt="Professional team" 
            className="absolute right-0 top-0 h-full w-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-empren-bg via-empren-bg/90 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 pt-28 sm:pt-32 md:pt-36 lg:pt-40">
        <div className="max-w-4xl">
          <div className="mb-6 hero-badge">
            <span className="inline-flex items-center gap-2 bg-empren-purple/10 text-empren-purple px-6 py-3 rounded-full text-sm font-medium border border-empren-purple/20 hover:bg-empren-purple/15 transition-all duration-300 cursor-default">
              <Sparkles className="w-4 h-4 animate-pulse" />
              {lang === 'cat' ? 'Programa de Preacceleració 2025' : 'Programa de Preaceleración 2025'}
            </span>
          </div>
          
          <h1 className="hero-title font-clash font-bold text-5xl md:text-7xl text-empren-text mb-6 leading-tight" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
            {lang === 'cat' ? 'EMPRÈN' : 'EMPRÈN'}
            <span className="text-empren-purple relative">
              {lang === 'cat' ? ' SERVEIS' : ' SERVEIS'}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-empren-purple rounded-full animate-ping"></div>
            </span>
          </h1>
          
          <p className="hero-description font-poppins text-xl md:text-2xl text-empren-text/80 mb-8 max-w-3xl">
            {lang === 'cat'
              ? 'Agafa impuls i fes de la teva idea una实实在'
              : 'Agarra impulso y haz de tu idea una realidad'}
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-empren-purple hover:bg-empren-purple/90 text-white px-8 py-4 text-lg font-medium group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => setOpen(true)}
            >
              {lang === 'cat' ? 'Inscriu-te ara' : 'Inscríbete ahora'}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-empren-purple text-empren-purple hover:bg-empren-purple hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={scrollToBenefits}
            >
              {lang === 'cat' ? 'Coneix més' : 'Conoce más'}
            </Button>
          </div>

          <div className="hero-info flex flex-col sm:flex-row gap-6 text-empren-text/70 mb-8">
            <div className="flex items-center gap-2 group cursor-default">
              <Calendar className="h-5 w-5 text-empren-purple group-hover:scale-110 transition-transform duration-300" />
              <span className="font-poppins group-hover:text-empren-text transition-colors duration-300">
                {lang === 'cat' ? 'Inscripcions fins 21 juliol' : 'Inscripciones hasta 21 julio'}
              </span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Users className="h-5 w-5 text-empren-purple group-hover:scale-110 transition-transform duration-300" />
              <span className="font-poppins group-hover:text-empren-text transition-colors duration-300">
                {lang === 'cat' ? 'Inici: 9 setembre' : 'Inicio: 9 septiembre'}
              </span>
            </div>
          </div>

          {/* Sponsor Logos Section */}
          <div className="max-w-2xl">
            <div className="space-y-6">
              {/* Financiado por */}
              <div className="animate-on-scroll">
                <h3 className="font-clash font-semibold text-xs text-empren-text/60 mb-1 uppercase tracking-wide">
                  {lang === 'cat' ? 'FINANÇAT PER:' : 'FINANCIADO POR:'}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {/* EU Logo */}
                  <div className="flex items-center group/sponsor">
                    <img 
                      src="/lovable-uploads/Logo Color Union europea.png" 
                      alt="Unión Europea Logo" 
                      className="w-72 h-48 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Generalitat Logo */}
                  <div className="flex items-center group/sponsor">
                    <img 
                      src="/lovable-uploads/Logo Color Generalitat de Catalunya.png" 
                      alt="Generalitat de Catalunya Logo" 
                      className="w-72 h-48 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Programa de */}
              <div className="animate-on-scroll">
                <h3 className="font-clash font-semibold text-xs text-empren-text/60 mb-1 uppercase tracking-wide">
                  {lang === 'cat' ? 'PROGRAMA DE:' : 'PROGRAMA DE:'}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {/* University Logo */}
                  <div className="flex items-center group/sponsor">
                    <img 
                      src="/lovable-uploads/Logo Escuela Universitaria color.png" 
                      alt="EUHT Logo" 
                      className="w-72 h-28 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* FAGEM Logo */}
                  <div className="flex items-center group/sponsor">
                    <img 
                      src="/lovable-uploads/Logo Fagem.png" 
                      alt="FAGEM Logo" 
                      className="w-72 h-28  object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop; 