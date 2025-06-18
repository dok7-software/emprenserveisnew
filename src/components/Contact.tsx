
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

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
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-empren-text mb-6">
            ¿Tienes <span className="text-empren-purple">dudas</span>?
          </h2>
          <p className="font-poppins text-xl text-empren-text/70 max-w-3xl mx-auto">
            Estamos aquí para resolver todas tus preguntas sobre el programa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="font-clash font-semibold text-2xl text-empren-text mb-8">
              Información de contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-empren-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-empren-purple" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-empren-text mb-1">Email</h4>
                  <p className="font-poppins text-empren-text/70">info@emprenserveis.cat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-empren-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-empren-purple" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-empren-text mb-1">Teléfono</h4>
                  <p className="font-poppins text-empren-text/70">+34 93 123 45 67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-empren-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-empren-purple" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-empren-text mb-1">Ubicación</h4>
                  <p className="font-poppins text-empren-text/70">
                    Escuela Universitaria de Hostelería y Turismo<br />
                    Sant Pol de Mar, Catalunya
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-empren-purple/5 rounded-2xl">
              <h4 className="font-clash font-semibold text-lg text-empren-text mb-3">
                Catalunya: Hub Tecnológico Europeo
              </h4>
              <p className="font-poppins text-empren-text/70 text-sm leading-relaxed">
                Forma parte del ecosistema emprendedor más dinámico del sur de Europa, con acceso directo a mercados internacionales, talento especializado y una red de inversores consolidada.
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
                      Nombre *
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
                    Startup / Empresa
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
                    Mensaje *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-empren-purple resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-empren-purple hover:bg-empren-purple/90 text-white py-3"
                >
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
