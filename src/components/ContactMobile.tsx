import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useContext } from "react";
import { useToast } from "@/hooks/use-toast";
import { LangContext } from "@/pages/Index";

const ContactMobile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();
  const lang = useContext(LangContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-clash font-bold text-3xl text-empren-text mb-4" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
            {lang === 'cat' ? 'Tens ' : '¿Tienes '}<span className="text-empren-purple">{lang === 'cat' ? 'dubtes' : 'dudas'}</span>{lang === 'cat' ? '?' : '?'}
          </h2>
          <p className="font-poppins text-lg text-empren-text/70 max-w-sm mx-auto">
            {lang === 'cat'
              ? 'Som aquí per resoldre tots els teus dubtes sobre el programa'
              : 'Estamos aquí para resolver todas tus preguntas sobre el programa'}
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-clash font-semibold text-xl text-empren-text mb-6">
              {lang === 'cat' ? 'Informació de contacte' : 'Información de contacto'}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-empren-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-empren-purple" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-empren-text mb-1 text-sm">{lang === 'cat' ? 'Correu electrònic' : 'Email'}</h4>
                  <p className="font-poppins text-empren-text/70 text-sm">info@emprenserveis.cat</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-empren-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-empren-purple" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-empren-text mb-1 text-sm">{lang === 'cat' ? 'Telèfon' : 'Teléfono'}</h4>
                  <p className="font-poppins text-empren-text/70 text-sm">+34 93 123 45 67</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-empren-purple/5 rounded-xl">
              <h4 className="font-clash font-semibold text-base text-empren-text mb-2">
                {lang === 'cat' ? 'Catalunya: Hub Tecnològic Europeu' : 'Catalunya: Hub Tecnológico Europeo'}
              </h4>
              <p className="font-poppins text-empren-text/70 text-xs leading-relaxed">
                {lang === 'cat'
                  ? "Forma part de l'ecosistema emprenedor més dinàmic del sud d'Europa, amb accés directe a mercats internacionals, talent especialitzat i una xarxa d'inversors consolidada."
                  : 'Forma parte del ecosistema emprendedor más dinámico del sur de Europa, con acceso directo a mercados internacionales, talento especializado y una red de inversores consolidada.'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-poppins text-sm font-medium text-empren-text mb-2 block">
                    {lang === 'cat' ? 'Nom' : 'Nombre'} *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-empren-purple"
                  />
                </div>

                <div>
                  <label className="font-poppins text-sm font-medium text-empren-text mb-2 block">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-empren-purple"
                  />
                </div>

                <div>
                  <label className="font-poppins text-sm font-medium text-empren-text mb-2 block">
                    {lang === 'cat' ? 'Startup / Empresa' : 'Startup / Empresa'}
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-empren-purple"
                  />
                </div>

                <div>
                  <label className="font-poppins text-sm font-medium text-empren-text mb-2 block">
                    {lang === 'cat' ? 'Missatge' : 'Mensaje'} *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="border-gray-300 focus:border-empren-purple resize-none"
                    placeholder={lang === 'cat' ? "Explica'ns el teu projecte..." : 'Cuéntanos sobre tu proyecto...'}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-empren-purple hover:bg-empren-purple/90 text-white py-3"
                >
                  {lang === 'cat' ? 'Enviar missatge' : 'Enviar mensaje'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Logos Section */}
          <div className="mt-12 space-y-8">
            <div>
              <h4 className="font-clash font-semibold text-lg text-empren-text mb-4 text-center">
                {lang === 'cat' ? 'Finançat per:' : 'Financiado por:'}
              </h4>
              <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
                <img 
                  src="/lovable-uploads/Logo Union europea.png" 
                  alt="Logo Unión Europea" 
                  className="h-16 object-contain"
                />
                <img 
                  src="/lovable-uploads/Logo Generalitat de Catalunya.png" 
                  alt="Logo Generalitat de Catalunya" 
                  className="h-16 object-contain"
                />
              </div>
            </div>

            <div>
              <h4 className="font-clash font-semibold text-lg text-empren-text mb-4 text-center">
                {lang === 'cat' ? 'Programa de:' : 'Programa de:'}
              </h4>
              <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
                <img 
                  src="/lovable-uploads/Logo Escuela Universitaria color.png" 
                  alt="Logo Escuela Universitaria" 
                  className="h-16 object-contain"
                />
                <img 
                  src="/lovable-uploads/Logo Fagem.png" 
                  alt="Logo Fagem" 
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMobile; 