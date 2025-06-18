
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";

const Hero = () => {
  const scrollToInscription = () => {
    const element = document.getElementById('inscripcion');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F5F3F5' }}>
      {/* Background with people image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/42de9cfc-3488-4f7f-be53-2f9d94cc1ee7.png" 
            alt="Professional team" 
            className="absolute right-0 top-0 h-full w-auto object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-empren-bg via-empren-bg/90 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block bg-empren-purple/10 text-empren-purple px-4 py-2 rounded-full text-sm font-medium mb-4">
              Programa de Preaceleración 2024
            </span>
          </div>
          
          <h1 className="font-clash font-bold text-5xl md:text-7xl text-empren-text mb-6 leading-tight animate-slide-in-left">
            EMPRÈN
            <span className="text-empren-purple"> SERVEIS</span>
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl text-empren-text/80 mb-8 max-w-3xl animate-fade-in">
            Impulsa tu startup con el programa de preaceleración respaldado por la 
            <span className="font-semibold text-empren-purple"> Generalitat de Catalunya</span> y la 
            <span className="font-semibold text-empren-purple"> Unión Europea</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
            <Button 
              onClick={scrollToInscription}
              size="lg" 
              className="bg-empren-purple hover:bg-empren-purple/90 text-white px-8 py-4 text-lg font-medium group"
            >
              Inscríbete ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-empren-purple text-empren-purple hover:bg-empren-purple hover:text-white px-8 py-4 text-lg"
            >
              Conoce más
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-empren-text/70 animate-fade-in">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-empren-purple" />
              <span className="font-poppins">Inscripciones hasta 21 julio</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-empren-purple" />
              <span className="font-poppins">Inicio: 9 septiembre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
