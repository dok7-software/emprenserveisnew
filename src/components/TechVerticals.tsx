import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Leaf, Plane } from "lucide-react";
import { useContext } from "react";
import { LangContext } from "@/pages/Index";
import { useIsMobile } from "@/hooks/use-mobile";
import TechVerticalsDesktop from "./TechVerticalsDesktop";
import TechVerticalsMobile from "./TechVerticalsMobile";

const TechVerticals = () => {
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
  const isMobile = useIsMobile();

  return isMobile ? <TechVerticalsMobile /> : <TechVerticalsDesktop />;
};

export default TechVerticals;
