import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useContext } from "react";
import { useToast } from "@/hooks/use-toast";
import { LangContext } from "@/pages/Index";

const ContactDesktop = () => {
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
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6" style={{ fontFamily: 'ClashDisplay, Poppins, Arial, sans-serif', fontWeight: 'bold' }}>
            {lang === 'cat' ? 'Tens ' : '¿Tienes '}<span className="text-empren-purple">{lang === 'cat' ? 'dubtes' : 'dudas'}</span>{lang === 'cat' ? '?' : '?'}
          </h2>
          <p className="font-poppins text-xl text-empren-text/70 max-w-3xl mx-auto">
            {lang === 'cat'
              ? 'Som aquí per resoldre tots els teus dubtes sobre el programa'
              : 'Estamos aquí para resolver todas tus preguntas sobre el programa'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="font-clash font-semibold text-2xl text-empren-text mb-8">
              {lang === 'cat' ? 'Informació de contacte' : 'Información de contacto'}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-empren-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-empren-purple" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-empren-text mb-1">{lang === 'cat' ? 'Correu electrònic' : 'Email'}</h4>
                  <p className="font-poppins text-empren-text/70">info@emprenserveis.cat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-empren-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-empren-purple" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-empren-text mb-1">{lang === 'cat' ? 'Telèfon' : 'Teléfono'}</h4>
                  <p className="font-poppins text-empren-text/70">+34 93 123 45 67</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-empren-purple/5 rounded-2xl">
              <h4 className="font-clash font-semibold text-lg text-empren-text mb-3">
                {lang === 'cat' ? 'Catalunya: Hub Tecnològic Europeu' : 'Catalunya: Hub Tecnológico Europeo'}
              </h4>
              <p className="font-poppins text-empren-text/70 text-sm leading-relaxed">
                {lang === 'cat'
                  ? "Forma part de l'ecosistema emprenedor més dinàmic del sud d'Europa, amb accés directe a mercats internacionals, talent especialitzat i una xarxa d'inversors consolidada."
                  : 'Forma parte del ecosistema emprendedor más dinámico del sur de Europa, con acceso directo a mercados internacionales, talento especializado y una red de inversores consolidada.'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                    rows={5}
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
        </div>
      </div>
    </section>
  );
};

export default ContactDesktop; 