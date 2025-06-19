import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowRight, Zap } from "lucide-react";
import { useContext } from "react";
import { LangContext } from "@/pages/Index";

const RegistrationMobile = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const lang = useContext(LangContext);

  return (
    <section id="inscripcion" className="py-12 relative overflow-hidden" style={{ backgroundColor: '#F5F3F5' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-empren-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-empren-purple/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-empren-purple/10 text-empren-purple px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-empren-purple/15 transition-all duration-300">
            <Zap className="w-4 h-4 animate-bounce" />
            {lang === 'cat' ? 'Últimes places disponibles!' : '¡Últimas plazas disponibles!'}
          </div>
          <h2 className="font-clash font-bold text-3xl text-empren-text mb-4" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
            {lang === 'cat' ? 'Les inscripcions estan ' : '¡Las inscripciones están '}<span className="text-empren-purple relative">
              {lang === 'cat' ? 'obertes' : 'abiertas'}
              <div className="absolute -bottom-1 left-0 w-full h-2 bg-empren-purple/20 transform -skew-y-1"></div>
            </span>{lang === 'cat' ? '!' : '!'}
          </h2>
          <p className="font-poppins text-lg text-empren-text/70">
            {lang === 'cat'
              ? "No perdis l'ancellationToken de formar part de l'ecosistema emprenedor més dinàmic d'Europa"
              : 'No pierdas la oportunidad de formar parte del ecosistema emprendedor más dinámico de Europa'}
          </p>
        </div>

        <Card className="hover-card bg-white border-0 shadow-xl group mb-8">
          <CardContent className="p-6 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-empren-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="grid grid-cols-1 gap-6 mb-6 relative z-10">
              <div className="text-center group/item">
                <div className="w-14 h-14 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover/item:bg-empren-purple/20 group-hover/item:scale-110 transition-all duration-500">
                  <Calendar className="h-7 w-7 text-empren-purple group-hover/item:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-clash font-semibold text-base text-empren-text mb-1 group-hover/item:text-empren-purple transition-colors duration-300">
                  {lang === 'cat' ? 'Data límit' : 'Fecha límite'}
                </h3>
                <p className="font-poppins text-empren-text/70 font-bold text-base group-hover/item:text-empren-purple transition-colors duration-300">
                  21 {lang === 'cat' ? 'de juliol 2025' : 'de julio 2025'}
                </p>
              </div>

              <div className="text-center group/item">
                <div className="w-14 h-14 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover/item:bg-empren-purple/20 group-hover/item:scale-110 transition-all duration-500">
                  <Clock className="h-7 w-7 text-empren-purple group-hover/item:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-clash font-semibold text-base text-empren-text mb-1 group-hover/item:text-empren-purple transition-colors duration-300">
                  {lang === 'cat' ? 'Inici programa' : 'Inicio programa'}
                </h3>
                <p className="font-poppins text-empren-text/70 font-bold text-base group-hover/item:text-empren-purple transition-colors duration-300">
                  9 {lang === 'cat' ? 'de setembre 2025' : 'de septiembre 2025'}
                </p>
              </div>

              <div className="text-center group/item">
                <div className="w-14 h-14 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover/item:bg-empren-purple/20 group-hover/item:scale-110 transition-all duration-500">
                  <Users className="h-7 w-7 text-empren-purple group-hover/item:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-clash font-semibold text-base text-empren-text mb-1 group-hover/item:text-empren-purple transition-colors duration-300">
                  {lang === 'cat' ? 'Places limitades' : 'Plazas limitadas'}
                </h3>
                <p className="font-poppins text-empren-text/70 font-bold text-base group-hover/item:text-empren-purple transition-colors duration-300">
                  {lang === 'cat' ? 'Selecció rigorosa' : 'Selección rigurosa'}
                </p>
              </div>
            </div>

            <div className="text-center relative z-10">
              <Button 
                size="lg" 
                className="w-full bg-empren-purple hover:bg-empren-purple/90 text-white py-6 text-lg font-medium group/btn transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => setOpen(true)}
              >
                <span className="relative z-10">{lang === 'cat' ? 'Inscriu-te ara' : 'Inscríbete ahora'}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover/btn:translate-x-[-200%] transition-transform duration-700"></div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sponsors Section */}
        <div className="animate-on-scroll">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="space-y-8">
              {/* Financiado por */}
              <div>
                <h3 className="font-clash font-semibold text-sm text-empren-text/60 mb-4 uppercase tracking-wide text-center">
                  {lang === 'cat' ? 'Finançat per:' : 'FINANCIADO POR:'}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <div className="flex items-center group/sponsor">
                    <img 
                      src="/lovable-uploads/Logo Color Union europea.png" 
                      alt="Unión Europea Logo" 
                      className="w-36 h-24 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                    />
                  </div>
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
              <div>
                <h3 className="font-clash font-semibold text-sm text-empren-text/60 mb-4 uppercase tracking-wide text-center">
                  {lang === 'cat' ? 'PROGRAMA DE:' : 'PROGRAMA DE:'}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <div className="flex items-center group/sponsor">
                    <img 
                      src="/lovable-uploads/Logo Escuela Universitaria color.png" 
                      alt="EUHT Logo" 
                      className="w-36 h-24 object-contain group-hover/sponsor:scale-105 transition-transform duration-300"
                    />
                  </div>
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
      </div>
    </section>
  );
};

export default RegistrationMobile; 