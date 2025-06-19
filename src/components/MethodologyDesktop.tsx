import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, CheckCircle, Users } from "lucide-react";
import { useContext } from "react";
import { LangContext } from "@/pages/Index";

const MethodologyDesktop = () => {
  const lang = useContext(LangContext);
  const phases = [
    {
      icon: Lightbulb,
      title: lang === 'cat' ? "Transformació, Innovació i Sostenibilitat" : "Transformación, Innovación y Sostenibilidad",
      subtitle: lang === 'cat' ? "TIS" : "TIS",
      description: lang === 'cat'
        ? "Identificació d'oportunitats de millora i desenvolupament de propostes de valor innovadores i sostenibles."
        : "Identificación de oportunidades de mejora y desarrollo de propuestas de valor innovadoras y sostenibles.",
      step: "01",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Rocket,
      title: lang === 'cat' ? "Business Development" : "Business Development",
      subtitle: lang === 'cat' ? "BD" : "BD",
      description: lang === 'cat'
        ? "Desenvolupament i refinament del model de negoci amb estratègies de creixement escalables."
        : "Desarrollo y refinamiento del modelo de negocio con estrategias de crecimiento escalables.",
      step: "02",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: CheckCircle,
      title: lang === 'cat' ? "Validació de producte" : "Validación de producto",
      subtitle: lang === 'cat' ? "MVP" : "MVP",
      description: lang === 'cat'
        ? "Testatge i validació del producte mínim viable amb usuaris reals i feedback del mercat."
        : "Testeo y validación del producto mínimo viable con usuarios reales y feedback del mercado.",
      step: "03",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Users,
      title: lang === 'cat' ? "Connexió amb ecosistema" : "Conexión con ecosistema",
      subtitle: lang === 'cat' ? "Network" : "Network",
      description: lang === 'cat'
        ? "Integració a la xarxa emprenedora catalana amb accés a inversors, corporacions i partners."
        : "Integración en la red emprendedora catalana con acceso a inversores, corporaciones y partners.",
      step: "04",
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
            {lang === 'cat' ? 'La nostra' : 'Nuestra'} <span className="text-empren-purple relative">
              {lang === 'cat' ? 'Metodologia' : 'Metodología'}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M0 8C50 4 100 4 150 8C175 10 200 6 200 6" stroke="#8971F4" strokeWidth="3" fill="none" opacity="0.3"/>
              </svg>
            </span>
          </h2>
          <p className="font-poppins text-xl text-empren-text/70 max-w-3xl mx-auto">
            {lang === 'cat'
              ? 'Un procés estructurat en 4 fases dissenyat per maximitzar el potencial de la teva startup'
              : 'Un proceso estructurado en 4 fases diseñado para maximizar el potencial de tu startup'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative animate-on-scroll">
              <Card className="hover-card h-full border-2 border-gray-200 hover:border-empren-purple/30 group overflow-hidden">
                <CardContent className="p-8 flex flex-col h-full relative">
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon container with fixed height */}
                  <div className="h-24 relative z-10">
                    <div className="relative">
                      <span className="absolute -top-6 -right-6 bg-empren-purple text-white font-bold text-lg px-4 py-2 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                        {phase.step}
                      </span>
                      <div className="w-16 h-16 bg-empren-purple/10 rounded-2xl flex items-center justify-center group-hover:bg-empren-purple/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <phase.icon className="h-8 w-8 text-empren-purple group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content container */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-clash font-semibold text-lg text-empren-text h-14 mb-4 group-hover:text-empren-purple transition-colors duration-300">
                      {phase.title}
                    </h3>
                    
                    <div className="mb-4">
                      <span className={`inline-block bg-gradient-to-r ${phase.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                        {phase.subtitle}
                      </span>
                    </div>
                    
                    <p className="font-poppins text-empren-text/70 text-sm leading-relaxed group-hover:text-empren-text/90 transition-colors duration-300">
                      {phase.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="w-full h-1 bg-gray-200 mt-6">
                    <div className={`h-full bg-gradient-to-r ${phase.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Animated connector line */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-empren-purple to-empren-purple/30 z-10 overflow-hidden">
                  <div className="w-full h-full bg-empren-purple transform translate-x-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyDesktop; 