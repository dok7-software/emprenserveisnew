
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-empren-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="font-clash font-bold text-xl text-empren-text">EMPRÈN SERVEIS</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('programa')} className="text-empren-text hover:text-empren-purple transition-colors">
            Programa
          </button>
          <button onClick={() => scrollToSection('beneficios')} className="text-empren-text hover:text-empren-purple transition-colors">
            Beneficios
          </button>
          <button onClick={() => scrollToSection('verticales')} className="text-empren-text hover:text-empren-purple transition-colors">
            Verticales
          </button>
          <button onClick={() => scrollToSection('contacto')} className="text-empren-text hover:text-empren-purple transition-colors">
            Contacto
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection('inscripcion')}
          className="bg-empren-purple hover:bg-empren-purple/90 text-white px-6 py-2"
        >
          Inscríbete
        </Button>
      </div>
    </header>
  );
};

export default Header;
