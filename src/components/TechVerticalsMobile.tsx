import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Leaf, Plane } from "lucide-react";
import { useContext } from "react";
import { LangContext } from "@/pages/Index";

const TechVerticalsMobile = () => {
  const verticals = [
    {
      icon: Brain,
      title: "AI & DataTech",
      titleCat: "IA & DataTech",
      description: "Inteligencia Artificial, Machine Learning, Big Data y Analytics",
      descriptionCat: "Intel·ligència Artificial, Machine Learning, Big Data i Analytics",
      color: "from-purple-500 to-indigo-600",
      hoverColor: "hover:from-purple-600 hover:to-indigo-700"
    },
    {
      icon: Heart,
      title: "HealthTech",
      titleCat: "HealthTech",
      description: "Salud digital, telemedicina, dispositivos médicos y biotecnología",
      descriptionCat: "Salut digital, telemedicina, dispositius mèdics i biotecnologia",
      color: "from-red-500 to-pink-600",
      hoverColor: "hover:from-red-600 hover:to-pink-700"
    },
    {
      icon: Leaf,
      title: "Bioeconomía",
      titleCat: "Bioeconomia",
      description: "Sostenibilidad, economía circular, energías renovables y GreenTech",
      descriptionCat: "Sostenibilitat, economia circular, energies renovables i GreenTech",
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-600 hover:to-emerald-700"
    },
    {
      icon: Plane,
      title: "TravelTech & FoodTech",
      titleCat: "TravelTech & FoodTech",
      description: "Turismo digital, hospitalidad tecnológica y innovación alimentaria",
      descriptionCat: "Turisme digital, hospitalitat tecnològica i innovació alimentària",
      color: "from-blue-500 to-cyan-600",
      hoverColor: "hover:from-blue-600 hover:to-cyan-700"
    }
  ];

  const lang = useContext(LangContext);

  return (
    <section id="verticales" className="py-12" style={{ backgroundColor: '#F5F3F5' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-clash font-bold text-3xl text-empren-text mb-4" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
            {lang === 'cat' ? 'Verticals ' : 'Verticales '}<span className="text-empren-purple">{lang === 'cat' ? 'Tecnològiques' : 'Tecnológicas'}</span>
          </h2>
          <p className="font-poppins text-lg text-empren-text/70 max-w-sm mx-auto" style={{ fontFamily: 'Poppins, Arial, sans-serif', fontWeight: 'normal' }}>
            {lang === 'cat'
              ? 'Sectors estratègics on enfoquem el nostre expertise i coneixement especialitzat'
              : 'Sectores estratégicos donde enfocamos nuestro expertise y conocimiento especializado'}
          </p>
        </div>

        <div className="space-y-4">
          {verticals.map((vertical, index) => (
            <Card key={index} className="hover-card group border-0 bg-white overflow-hidden relative">
              <CardContent className="p-6 relative z-10">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${vertical.color} ${vertical.hoverColor} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${vertical.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <vertical.icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${vertical.color} rounded-xl opacity-0 group-hover:opacity-20 animate-ping`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-clash font-semibold text-lg text-empren-text mb-2 group-hover:text-empren-purple transition-colors duration-300" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
                      {lang === 'cat' ? vertical.titleCat : vertical.title}
                    </h3>
                    
                    <p className="font-poppins text-empren-text/70 text-sm leading-relaxed group-hover:text-empren-text transition-colors duration-300" style={{ fontFamily: 'Poppins, Arial, sans-serif', fontWeight: 'normal' }}>
                      {lang === 'cat' ? vertical.descriptionCat : vertical.description}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-empren-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-empren-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechVerticalsMobile; 