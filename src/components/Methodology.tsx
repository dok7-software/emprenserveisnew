
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, CheckCircle, Users } from "lucide-react";

const Methodology = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: "Transformación, Innovación y Sostenibilidad",
      subtitle: "TIS",
      description: "Identificación de oportunidades de mejora y desarrollo de propuestas de valor innovadoras y sostenibles.",
      step: "01"
    },
    {
      icon: Rocket,
      title: "Business Development",
      subtitle: "BD",
      description: "Desarrollo y refinamiento del modelo de negocio con estrategias de crecimiento escalables.",
      step: "02"
    },
    {
      icon: CheckCircle,
      title: "Validación de producto",
      subtitle: "MVP",
      description: "Testeo y validación del producto mínimo viable con usuarios reales y feedback del mercado.",
      step: "03"
    },
    {
      icon: Users,
      title: "Conexión con ecosistema",
      subtitle: "Network",
      description: "Integración en la red emprendedora catalana con acceso a inversores, corporaciones y partners.",
      step: "04"
    }
  ];

  return (
    <section id="programa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6">
            Nuestra <span className="text-empren-purple">Metodología</span>
          </h2>
          <p className="font-poppins text-xl text-empren-text/70 max-w-3xl mx-auto">
            Un proceso estructurado en 4 fases diseñado para maximizar el potencial de tu startup
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-2 border-gray-200 hover:border-empren-purple/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="relative">
                      <span className="absolute -top-4 -right-4 bg-empren-purple text-white font-bold text-sm px-3 py-1 rounded-full">
                        {phase.step}
                      </span>
                      <div className="w-16 h-16 bg-empren-purple/10 rounded-2xl flex items-center justify-center group-hover:bg-empren-purple/20 transition-colors">
                        <phase.icon className="h-8 w-8 text-empren-purple" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-clash font-semibold text-lg text-empren-text mb-2">
                    {phase.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-empren-purple/10 text-empren-purple px-3 py-1 rounded-full text-sm font-medium">
                      {phase.subtitle}
                    </span>
                  </div>
                  
                  <p className="font-poppins text-empren-text/70 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector line */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-empren-purple/30 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
