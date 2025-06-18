
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Network, MapPin } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Mentoría experta",
      description: "Acceso a mentores especializados en diversos sectores tecnológicos con experiencia probada en el ecosistema emprendedor."
    },
    {
      icon: Target,
      title: "Validación de negocio",
      description: "Metodologías probadas para validar tu producto y modelo de negocio antes de salir al mercado."
    },
    {
      icon: TrendingUp,
      title: "Acceso a inversores",
      description: "Conexión directa con inversores y sesiones de pitch para presentar tu proyecto ante potenciales financiadores."
    },
    {
      icon: Network,
      title: "Networking especializado",
      description: "Red de contactos con otros emprendedores, corporaciones y actores clave del ecosistema catalán."
    },
    {
      icon: MapPin,
      title: "Ecosistema tecnológico",
      description: "Inmersión completa en el hub tecnológico más importante del sur de Europa, ubicado en Catalunya."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6">
            ¿Por qué elegir <span className="text-empren-purple">EMPRÈN SERVEIS</span>?
          </h2>
          <p className="font-poppins text-xl text-empren-text/70 max-w-3xl mx-auto">
            Un programa integral diseñado para acelerar el crecimiento de tu startup con el respaldo institucional más sólido
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-empren-purple/30">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-empren-purple/10 rounded-xl flex items-center justify-center group-hover:bg-empren-purple/20 transition-colors">
                    <benefit.icon className="h-7 w-7 text-empren-purple" />
                  </div>
                </div>
                <h3 className="font-clash font-semibold text-xl text-empren-text mb-4">
                  {benefit.title}
                </h3>
                <p className="font-poppins text-empren-text/70 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
