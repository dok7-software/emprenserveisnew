import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Sparkles } from "lucide-react";
import { useEffect, useContext } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import StepForm from "./StepForm";
import { LangContext } from "@/pages/Index";

const HeroMobile = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const { gsap } = useGSAP();
  const lang = useContext(LangContext);

  const scrollToBenefits = () => {
    const element = document.getElementById('beneficios');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Simplified floating animation for mobile
    gsap.to('.floating-element-mobile', {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });
  }, [gsap]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4" style={{ backgroundColor: '#F5F3F5' }}>
      {/* Modal de inscripción */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
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

      {/* Simplified animated background elements for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element-mobile absolute top-16 left-4 w-12 h-12 bg-empren-purple/10 rounded-full blur-lg"></div>
        <div className="floating-element-mobile absolute top-32 right-6 w-16 h-16 bg-empren-purple/5 rounded-full blur-xl"></div>
        <div className="floating-element-mobile absolute bottom-24 left-1/3 w-14 h-14 bg-empren-purple/8 rounded-full blur-lg"></div>
      </div>

      {/* Mobile-optimized background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/42de9cfc-3488-4f7f-be53-2f9d94cc1ee7.png" 
            alt="Professional team" 
            className="absolute right-0 top-0 h-full w-auto object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-empren-bg via-empren-bg/80 to-empren-bg/60"></div>
        </div>
      </div>

      {/* Mobile Content - Reorganized for better UX */}
      <div className="relative z-10 flex flex-col items-center text-center pt-20 pb-8">
        {/* Badge */}
        <div className="mb-4 hero-badge">
          <span className="inline-flex items-center gap-2 bg-empren-purple/10 text-empren-purple px-4 py-2 rounded-full text-xs font-medium border border-empren-purple/20">
            <Sparkles className="w-3 h-3 animate-pulse" />
            {lang === 'cat' ? 'Programa de Preacceleració 2025' : 'Programa de Preaceleración 2025'}
          </span>
        </div>
        
        {/* Title */}
        <h1 className="hero-title font-clash font-bold text-3xl text-empren-text mb-4 leading-tight" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
          {lang === 'cat' ? 'EMPRÈN' : 'EMPRÈN'}
          <span className="text-empren-purple relative block">
            {lang === 'cat' ? 'SERVEIS' : 'SERVEIS'}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-empren-purple rounded-full animate-ping"></div>
          </span>
        </h1>
        
        {/* Description */}
        <p className="hero-description font-poppins text-lg text-empren-text/80 mb-6 max-w-sm">
          {lang === 'cat'
            ? 'Agafa impuls i fes de la teva idea una realitat'
            : 'Coge impulso y haz de tu idea una realidad'}
        </p>
        
        {/* Buttons - Stacked vertically */}
        <div className="hero-buttons flex flex-col gap-3 mb-6 w-full max-w-xs">
          <Button 
            size="lg" 
            className="bg-empren-purple hover:bg-empren-purple/90 text-white px-6 py-3 text-base font-medium group transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => setOpen(true)}
          >
            {lang === 'cat' ? 'Inscriu-te ara' : 'Inscríbete ahora'}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-empren-purple text-empren-purple hover:bg-empren-purple hover:text-white px-6 py-3 text-base transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={scrollToBenefits}
          >
            {lang === 'cat' ? 'Coneix més' : 'Conoce más'}
          </Button>
        </div>

        {/* Info - Compact layout */}
        <div className="hero-info flex flex-col gap-3 text-empren-text/70 mb-8 text-sm">
          <div className="flex items-center justify-center gap-2 group">
            <Calendar className="h-4 w-4 text-empren-purple" />
            <span className="font-poppins">
              {lang === 'cat' ? 'Inscripcions fins 21 juliol' : 'Inscripciones hasta 21 julio'}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 group">
            <Users className="h-4 w-4 text-empren-purple" />
            <span className="font-poppins">
              {lang === 'cat' ? 'Inici: 9 setembre' : 'Inicio: 9 septiembre'}
            </span>
          </div>
        </div>

        {/* Sponsor Logos Section - Mobile optimized */}
        <div className="w-full max-w-sm">
          <div className="space-y-8">
            {/* Financiado por */}
            <div className="animate-on-scroll">
              <h3 className="font-clash font-semibold text-xs text-empren-text/60 mb-4 uppercase tracking-wide text-center">
                {lang === 'cat' ? 'FINANÇAT PER:' : 'FINANCIADO POR:'}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {/* EU Logo */}
                <div className="flex items-center group/sponsor">
                  <img 
                    src="/lovable-uploads/Logo Color Union europea.png" 
                    alt="Unión Europea Logo" 
                    className="w-36 h-24 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Generalitat Logo */}
                <div className="flex items-center group/sponsor">
                  <img 
                    src="/lovable-uploads/Logo Color Generalitat de Catalunya.png" 
                    alt="Generalitat de Catalunya Logo" 
                    className="w-36 h-24 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Programa de */}
            <div className="animate-on-scroll">
              <h3 className="font-clash font-semibold text-xs text-empren-text/60 mb-4 uppercase tracking-wide text-center">
                {lang === 'cat' ? 'PROGRAMA DE:' : 'PROGRAMA DE:'}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {/* University Logo */}
                <div className="flex items-center group/sponsor">
                  <img 
                    src="/lovable-uploads/Logo Escuela Universitaria color.png" 
                    alt="EUHT Logo" 
                    className="w-36 h-24 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* FAGEM Logo */}
                <div className="flex items-center group/sponsor">
                  <img 
                    src="/lovable-uploads/Logo Fagem.png" 
                    alt="FAGEM Logo" 
                    className="w-36 h-24 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile; 