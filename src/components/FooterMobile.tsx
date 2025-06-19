import { useContext } from "react";
import { LangContext } from "@/pages/Index";

const FooterMobile = () => {
  const lang = useContext(LangContext);
  return (
    <footer className="bg-empren-text text-white py-8">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Logo and Description */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-7 h-7 bg-empren-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-clash font-bold text-lg">EMPRÈN SERVEIS</span>
            </div>
            <p className="font-poppins text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
              {lang === 'cat'
                ? 'Programa de preacceleració impulsat per la Generalitat de Catalunya i la Unió Europea per a startups tecnològiques.'
                : 'Programa de preaceleración impulsado por la Generalitat de Catalunya y la Unión Europea para startups tecnológicas.'}
            </p>
          </div>

          {/* Collaborators and Contact - Stacked */}
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="font-clash font-semibold text-base mb-3">{lang === 'cat' ? 'Col·laboradors' : 'Colaboradores'}</h4>
              <ul className="font-poppins text-white/70 text-sm space-y-1">
                <li>Generalitat de Catalunya</li>
                <li>{lang === 'cat' ? 'Unió Europea' : 'Unión Europea'}</li>
                <li>{lang === 'cat' ? 'Escola Universitària Sant Pol de Mar' : 'Escuela Universitaria Sant Pol de Mar'}</li>
                <li>FAGEM</li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="font-clash font-semibold text-base mb-3">{lang === 'cat' ? 'Contacte' : 'Contacto'}</h4>
              <div className="font-poppins text-white/70 text-sm space-y-1">
                <p>info@emprenserveis.cat</p>
                <p>+34 93 123 45 67</p>
                <p>{lang === 'cat' ? 'Sant Pol de Mar, Catalunya' : 'Sant Pol de Mar, Cataluña'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6 text-center">
          <p className="font-poppins text-white/60 text-xs">
            © 2025 EMPRÈN SERVEIS. {lang === 'cat' ? 'Tots els drets reservats.' : 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile; 