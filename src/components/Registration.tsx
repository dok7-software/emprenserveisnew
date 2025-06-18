
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowRight, Zap } from "lucide-react";

const Registration = () => {
  return (
    <section id="inscripcion" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5F3F5' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-empren-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-empren-purple/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-empren-purple/10 text-empren-purple px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-empren-purple/15 transition-all duration-300">
              <Zap className="w-4 h-4 animate-bounce" />
              ¡Últimas plazas disponibles!
            </div>
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6">
              ¡Las inscripciones están <span className="text-empren-purple relative">
                abiertas
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-empren-purple/20 transform -skew-y-1"></div>
              </span>!
            </h2>
            <p className="font-poppins text-xl text-empren-text/70">
              No pierdas la oportunidad de formar parte del ecosistema emprendedor más dinámico de Europa
            </p>
          </div>

          <Card className="hover-card bg-white border-0 shadow-2xl group mb-12">
            <CardContent className="p-12 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-empren-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8 relative z-10">
                <div className="text-center group/item">
                  <div className="w-16 h-16 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/item:bg-empren-purple/20 group-hover/item:scale-110 transition-all duration-500">
                    <Calendar className="h-8 w-8 text-empren-purple group-hover/item:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="font-clash font-semibold text-lg text-empren-text mb-2 group-hover/item:text-empren-purple transition-colors duration-300">
                    Fecha límite
                  </h3>
                  <p className="font-poppins text-empren-text/70 font-bold text-lg group-hover/item:text-empren-purple transition-colors duration-300">
                    21 de julio 2024
                  </p>
                </div>

                <div className="text-center group/item">
                  <div className="w-16 h-16 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/item:bg-empren-purple/20 group-hover/item:scale-110 transition-all duration-500">
                    <Clock className="h-8 w-8 text-empren-purple group-hover/item:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="font-clash font-semibold text-lg text-empren-text mb-2 group-hover/item:text-empren-purple transition-colors duration-300">
                    Inicio programa
                  </h3>
                  <p className="font-poppins text-empren-text/70 font-bold text-lg group-hover/item:text-empren-purple transition-colors duration-300">
                    9 de septiembre 2024
                  </p>
                </div>

                <div className="text-center group/item">
                  <div className="w-16 h-16 bg-empren-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/item:bg-empren-purple/20 group-hover/item:scale-110 transition-all duration-500">
                    <Users className="h-8 w-8 text-empren-purple group-hover/item:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="font-clash font-semibold text-lg text-empren-text mb-2 group-hover/item:text-empren-purple transition-colors duration-300">
                    Plazas limitadas
                  </h3>
                  <p className="font-poppins text-empren-text/70 font-bold text-lg group-hover/item:text-empren-purple transition-colors duration-300">
                    Selección rigurosa
                  </p>
                </div>
              </div>

              <div className="text-center relative z-10">
                <Button 
                  size="lg" 
                  className="bg-empren-purple hover:bg-empren-purple/90 text-white px-12 py-4 text-lg font-medium group/btn transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10">Inscríbete ahora</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover/btn:translate-x-[-200%] transition-transform duration-700"></div>
                </Button>
                
                <p className="font-poppins text-empren-text/60 text-sm mt-4 group-hover:text-empren-text/80 transition-colors duration-300">
                  El proceso de selección incluye entrevista personal y evaluación del proyecto
                </p>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-empren-purple/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-empren-purple/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </CardContent>
          </Card>

          {/* Sponsors Section */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Financiado por */}
                <div>
                  <h3 className="font-clash font-semibold text-sm text-empren-text/60 mb-4 uppercase tracking-wide">
                    FINANCIADO POR:
                  </h3>
                  <div className="flex items-center gap-6">
                    {/* EU Logo */}
                    <div className="flex items-center gap-3 group/sponsor">
                      <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center group-hover/sponsor:scale-105 transition-transform duration-300">
                        <div className="grid grid-cols-3 gap-0.5">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-poppins text-xs text-empren-text/70 leading-tight">
                          Cofinanciado por<br />
                          <span className="font-medium text-empren-text">la Unión Europea</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Programa de */}
                <div>
                  <h3 className="font-clash font-semibold text-sm text-empren-text/60 mb-4 uppercase tracking-wide">
                    PROGRAMA DE:
                  </h3>
                  <div className="flex items-center gap-6">
                    {/* Generalitat Logo */}
                    <div className="flex items-center gap-3 group/sponsor">
                      <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center group-hover/sponsor:scale-105 transition-transform duration-300">
                        <div className="grid grid-cols-2 gap-0.5">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-1.5 h-4 bg-yellow-400"></div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-poppins text-sm font-medium text-empren-text">
                          Generalitat<br />
                          de Catalunya
                        </p>
                      </div>
                    </div>

                    {/* University Logos */}
                    <div className="flex items-center gap-3 group/sponsor">
                      <div className="w-12 h-8 bg-purple-800 rounded flex items-center justify-center group-hover/sponsor:scale-105 transition-transform duration-300">
                        <div className="text-white text-xs font-bold">EUHT</div>
                      </div>
                      <div>
                        <p className="font-poppins text-xs text-empren-text/70 leading-tight">
                          <span className="font-medium text-empren-text">ESCOLA UNIVERSITÀRIA</span><br />
                          D'HOTELERIA I TURISME
                        </p>
                      </div>
                    </div>

                    {/* FAGEM Logo */}
                    <div className="flex items-center gap-3 group/sponsor">
                      <div className="w-12 h-8 bg-gray-400 rounded flex items-center justify-center group-hover/sponsor:scale-105 transition-transform duration-300">
                        <div className="grid grid-cols-3 gap-0.5">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-white rounded"></div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-poppins text-xs text-empren-text/70 leading-tight">
                          <span className="font-medium text-empren-text">FEDERACIÓ D'ASSOCIACIONS</span><br />
                          I GREMIS EMPRESARIALS DEL MARESME
                        </p>
                      </div>
                    </div>
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

export default Registration;
