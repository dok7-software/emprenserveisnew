import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Network, MapPin } from "lucide-react";
import { useContext } from "react";
import { LangContext } from "@/pages/Index";

const Benefits = () => {
  const lang = useContext(LangContext);

  const benefits = [
    {
      icon: Users,
      title: lang === 'cat' ? 'Mentoria experta' : 'Mentoría experta',
      description: lang === 'cat'
        ? 'Accés a mentors especialitzats en diversos sectors tecnològics amb experiència provada en l’ecosistema emprenedor.'
        : 'Acceso a mentores especializados en diversos sectores tecnológicos con experiencia probada en el ecosistema emprendedor.',
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: lang === 'cat' ? 'Validació de negoci' : 'Validación de negocio',
      description: lang === 'cat'
        ? 'Metodologies provades per validar el teu producte i model de negoci abans de sortir al mercat.'
        : 'Metodologías probadas para validar tu producto y modelo de negocio antes de salir al mercado.',
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: lang === 'cat' ? 'Accés a inversors' : 'Acceso a inversores',
      description: lang === 'cat'
        ? 'Connexió directa amb inversors i sessions de pitch per presentar el teu projecte davant de potencials financiadors.'
        : 'Conexión directa con inversores y sesiones de pitch para presentar tu proyecto ante potenciales financiadores.',
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: lang === 'cat' ? 'Networking especialitzat' : 'Networking especializado',
      description: lang === 'cat'
        ? 'Xarxa de contactes amb altres emprenedors, corporacions i actors clau de l’ecosistema català.'
        : 'Red de contactos con otros emprendedores, corporaciones y actores clave del ecosistema catalán.',
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: MapPin,
      title: lang === 'cat' ? 'Ecosistema tecnològic' : 'Ecosistema tecnológico',
      description: lang === 'cat'
        ? 'Immersió completa al hub tecnològic més important del sud d’Europa, ubicat a Catalunya.'
        : 'Inmersión completa en el hub tecnológico más importante del sur de Europa, ubicado en Catalunya.',
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6 hover:text-empren-purple transition-colors duration-500" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
            {lang === 'cat'
              ? 'Per què triar'
              : '¿Por qué elegir'} <span className="text-empren-purple relative">
              EMPRÈN SERVEIS
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-empren-purple to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>{lang === 'cat' ? '' : '?'}
          </h2>
          <p className="font-poppins text-xl text-empren-text/70 max-w-3xl mx-auto">
            {lang === 'cat'
              ? 'Un programa integral dissenyat per accelerar el creixement de la teva startup amb el suport institucional més sòlid'
              : 'Un programa integral diseñado para acelerar el crecimiento de tu startup con el respaldo institucional más sólido'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-card group border-gray-200 hover:border-empren-purple/30 transition-all duration-500 overflow-hidden animate-on-scroll">
              <CardContent className="p-8 relative">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 bg-empren-purple/10 rounded-xl flex items-center justify-center group-hover:bg-empren-purple/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <benefit.icon className="h-7 w-7 text-empren-purple group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="font-clash font-semibold text-xl text-empren-text mb-4 group-hover:text-empren-purple transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="font-poppins text-empren-text/70 leading-relaxed group-hover:text-empren-text/90 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-empren-purple to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
