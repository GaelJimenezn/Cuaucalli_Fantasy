import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Oficial',
      content: 'cuauhcalli.fantasy@ucuauhtemoc.edu.mx',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+52 (XXX) XXX-XXXX',
      color: 'text-chart-3'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Universidad Cuauhtémoc - Sede Constituyentes',
      color: 'text-chart-2'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-fantasy-title text-4xl md:text-5xl text-primary mb-6">
              Contacto
            </h2>
            <p className="font-fantasy-body text-lg text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes dudas sobre el evento, los concursos o quieres ser patrocinador? 
              ¡Contáctanos! Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-fantasy-title text-2xl text-primary flex items-center space-x-2">
                  <MessageSquare className="h-6 w-6" />
                  <span>Envíanos un mensaje</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="font-fantasy-body font-semibold text-lg text-foreground mb-2">
                      Formulario de Contacto
                    </h3>
                    <p className="font-fantasy-body text-muted-foreground mb-6">
                      Utiliza nuestro formulario oficial para enviar tus consultas, 
                      solicitudes de patrocinio o cualquier pregunta sobre el evento.
                    </p>
                  </div>

                  <Button 
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    data-testid="button-contact-form"
                  >
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSftWc0Cd4329zc8tQr7ElbN-HDG2EyJ60_wwHvuNqZZB7ZnDA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Abrir Formulario de Contacto</span>
                    </a>
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    El formulario se abrirá en una nueva ventana
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="hover-elevate">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-muted ${info.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-fantasy-body font-semibold text-foreground">
                              {info.title}
                            </h3>
                            <p className="font-fantasy-body text-muted-foreground">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Additional Info */}
              <Card className="bg-gradient-to-r from-primary/5 to-chart-3/5">
                <CardContent className="p-6">
                  <h3 className="font-fantasy-title text-xl text-primary mb-4">
                    Organizadoras del Evento
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-fantasy-body font-semibold text-foreground">
                        Paula Samantha Tapia Vega
                      </p>
                      <p className="font-fantasy-body text-sm text-muted-foreground">
                        Supervisora General
                      </p>
                    </div>
                    <div>
                      <p className="font-fantasy-body font-semibold text-foreground">
                        Elida Sarahi González Monárrez
                      </p>
                      <p className="font-fantasy-body text-sm text-muted-foreground">
                        Supervisora General
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-chart-3/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-chart-3" />
                  </div>
                  <h3 className="font-fantasy-body font-semibold text-foreground mb-2">
                    Tiempo de Respuesta
                  </h3>
                  <p className="font-fantasy-body text-sm text-muted-foreground">
                    Respondemos todas las consultas en menos de 24 horas durante días hábiles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}