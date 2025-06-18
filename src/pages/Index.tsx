
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import TechVerticals from "@/components/TechVerticals";
import Methodology from "@/components/Methodology";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <TechVerticals />
      <Methodology />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
