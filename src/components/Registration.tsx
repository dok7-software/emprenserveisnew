
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const Registration = () => {
  return (
    <section id="inscripcion" className="py-20" style={{ backgroundColor: '#F5F3F5' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6">
              ¡Las inscripciones están <span className="text-empren-purple">abiertas</span>!
            </h2>
            <p className="font-poppins text-xl text-empren-text/70">
              No pierdas la oportunidad de formar parte del ecosistema emprendedor más dinámico de Europa
            </p>
          </div>

          <Card className="bg-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-empren-purple" />
                  </div>
                  <h3 className="font-clash font-semibold text-lg text-empren-text mb-2">
                    Fecha límite
                  </h3>
                  <p className="font-poppins text-empren-text/70">
                    21 de julio 2024
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-empren-purple" />
                  </div>
                  <h3 className="font-clash font-semibold text-lg text-empren-text mb-2">
                    Inicio programa
                  </h3>
                  <p className="font-poppins text-empren-text/70">
                    9 de septiembre 2024
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-empren-purple" />
                  </div>
                  <h3 className="font-clash font-semibold text-lg text-empren-text mb-2">
                    Plazas limitadas
                  </h3>
                  <p className="font-poppins text-empren-text/70">
                    Selección rigurosa
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-empren-purple hover:bg-empren-purple/90 text-white px-12 py-4 text-lg font-medium group"
                >
                  Inscríbete ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="font-poppins text-empren-text/60 text-sm mt-4">
                  El proceso de selección incluye entrevista personal y evaluación del proyecto
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;
