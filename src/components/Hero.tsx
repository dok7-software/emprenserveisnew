
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useGSAP } from "@/hooks/useGSAP";

const Hero = () => {
  const { gsap } = useGSAP();

  const scrollToInscription = () => {
    const element = document.getElementById('inscripcion');
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
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 hero-badge">
            <span className="inline-flex items-center gap-2 bg-empren-purple/10 text-empren-purple px-6 py-3 rounded-full text-sm font-medium border border-empren-purple/20 hover:bg-empren-purple/15 transition-all duration-300 cursor-default">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Programa de Preaceleración 2024
            </span>
          </div>
          
          <h1 className="hero-title font-clash font-bold text-5xl md:text-7xl text-empren-text mb-6 leading-tight">
            EMPRÈN
            <span className="text-empren-purple relative">
              {" "}SERVEIS
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-empren-purple rounded-full animate-ping"></div>
            </span>
          </h1>
          
          <p className="hero-description font-poppins text-xl md:text-2xl text-empren-text/80 mb-8 max-w-3xl">
            Impulsa tu startup con el programa de preaceleración respaldado por la 
            <span className="font-semibold text-empren-purple hover:text-empren-purple/80 transition-colors cursor-default"> Generalitat de Catalunya</span> y la 
            <span className="font-semibold text-empren-purple hover:text-empren-purple/80 transition-colors cursor-default"> Unión Europea</span>
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={scrollToInscription}
              size="lg" 
              className="bg-empren-purple hover:bg-empren-purple/90 text-white px-8 py-4 text-lg font-medium group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Inscríbete ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-empren-purple text-empren-purple hover:bg-empren-purple hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Conoce más
            </Button>
          </div>

          <div className="hero-info flex flex-col sm:flex-row gap-6 text-empren-text/70">
            <div className="flex items-center gap-2 group cursor-default">
              <Calendar className="h-5 w-5 text-empren-purple group-hover:scale-110 transition-transform duration-300" />
              <span className="font-poppins group-hover:text-empren-text transition-colors duration-300">Inscripciones hasta 21 julio</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Users className="h-5 w-5 text-empren-purple group-hover:scale-110 transition-transform duration-300" />
              <span className="font-poppins group-hover:text-empren-text transition-colors duration-300">Inicio: 9 septiembre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
