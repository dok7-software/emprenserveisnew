
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Leaf, Plane } from "lucide-react";

const TechVerticals = () => {
  const verticals = [
    {
      icon: Brain,
      title: "AI & DataTech",
      description: "Inteligencia Artificial, Machine Learning, Big Data y Analytics",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "HealthTech",
      description: "Salud digital, telemedicina, dispositivos médicos y biotecnología",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Leaf,
      title: "Bioeconomía",
      description: "Sostenibilidad, economía circular, energías renovables y GreenTech",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Plane,
      title: "TravelTech & FoodTech",
      description: "Turismo digital, hospitalidad tecnológica y innovación alimentaria",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="verticales" className="py-20" style={{ backgroundColor: '#F5F3F5' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6">
            Verticales <span className="text-empren-purple">Tecnológicas</span>
          </h2>
          <p className="font-poppins text-xl text-empren-text/70 max-w-3xl mx-auto">
            Sectores estratégicos donde enfocamos nuestro expertise y conocimiento especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vertical, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${vertical.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <vertical.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-clash font-semibold text-xl text-empren-text mb-4">
                  {vertical.title}
                </h3>
                <p className="font-poppins text-empren-text/70 text-sm leading-relaxed">
                  {vertical.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechVerticals;
