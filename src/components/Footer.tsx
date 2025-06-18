
const Footer = () => {
  return (
    <footer className="bg-empren-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-empren-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-clash font-bold text-xl">EMPRÈN SERVEIS</span>
            </div>
            <p className="font-poppins text-white/70 text-sm leading-relaxed">
              Programa de preaceleración impulsado por la Generalitat de Catalunya y la Unión Europea para startups tecnológicas.
            </p>
          </div>

          <div>
            <h4 className="font-clash font-semibold text-lg mb-4">Colaboradores</h4>
            <ul className="font-poppins text-white/70 text-sm space-y-2">
              <li>Generalitat de Catalunya</li>
              <li>Unión Europea</li>
              <li>Escuela Universitaria Sant Pol de Mar</li>
              <li>FAGEM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-clash font-semibold text-lg mb-4">Contacto</h4>
            <div className="font-poppins text-white/70 text-sm space-y-2">
              <p>info@emprenserveis.cat</p>
              <p>+34 93 123 45 67</p>
              <p>Sant Pol de Mar, Catalunya</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-poppins text-white/60 text-sm">
            © 2024 EMPRÈN SERVEIS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
