import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, HandHeart, Gift } from 'lucide-react';

export default function Sponsors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // //todo: remove mock functionality - replace with real sponsor data
  const sponsors = [
    {
      id: 1,
      name: 'XP-Pen',
      logo: '/api/placeholder/150/80',
      description: 'Tabletas gráficas y pantallas interactivas para artistas digitales',
      category: 'Tecnología'
    },
    {
      id: 2,
      name: 'Wacom',
      logo: '/api/placeholder/150/80',
      description: 'Líder mundial en tabletas digitales y soluciones creativas',
      category: 'Tecnología'
    },
    {
      id: 3,
      name: 'Pixelatl',
      logo: '/api/placeholder/150/80',
      description: 'Festival de animación, videojuegos y cómic',
      category: 'Industria'
    },
    {
      id: 4,
      name: 'Utopía Comics',
      logo: '/api/placeholder/150/80',
      description: 'Editorial y distribuidora de cómics independientes',
      category: 'Industria'
    }
  ];

  // //todo: remove mock functionality - replace with real supporter data
  const prizeSupporters = [
    {
      id: 1,
      name: 'Richard',
      contribution: 'Impresión 3D para primer lugar de Esculpido Digital',
      icon: Gift
    },
    {
      id: 2,
      name: 'Chucho y Santiago',
      contribution: 'Sudaderas, playeras y termos para premiación',
      icon: Gift
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
    );
    console.log('Next sponsor slide');
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sponsors.length - 1 : prevIndex - 1
    );
    console.log('Previous sponsor slide');
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    console.log(`Go to sponsor slide ${index}`);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="patrocinadores" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-fantasy-title text-4xl md:text-5xl text-primary mb-6">
              Patrocinadores y Aliados
            </h2>
            <p className="font-fantasy-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Gracias a nuestros increíbles patrocinadores y aliados que hacen posible 
              este evento y brindan oportunidades únicas a nuestros estudiantes.
            </p>
          </div>

          {/* Main Sponsors Carousel */}
          <div className="mb-16">
            <h3 className="font-fantasy-title text-2xl text-center text-primary mb-8">
              Patrocinadores Principales
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className="w-full flex-shrink-0">
                      <Card className="mx-4">
                        <CardContent className="p-8 text-center">
                          <div className="flex flex-col items-center space-y-4">
                            <div className="w-40 h-20 bg-muted rounded-lg flex items-center justify-center border-2 border-border">
                              <img 
                                src={sponsor.logo} 
                                alt={`${sponsor.name} Logo`}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <div>
                              <h4 className="font-fantasy-body font-bold text-xl text-foreground mb-2">
                                {sponsor.name}
                              </h4>
                              <p className="font-fantasy-body text-muted-foreground mb-3">
                                {sponsor.description}
                              </p>
                              <span className="inline-block px-3 py-1 bg-chart-3/10 text-chart-3 rounded-full text-sm font-fantasy-body">
                                {sponsor.category}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={prevSlide}
                data-testid="button-sponsor-prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={nextSlide}
                data-testid="button-sponsor-next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {sponsors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                    data-testid={`sponsor-dot-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Prize Supporters */}
          <div className="mb-16">
            <h3 className="font-fantasy-title text-2xl text-center text-primary mb-8">
              Colaboradores de Premios
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {prizeSupporters.map((supporter) => {
                const IconComponent = supporter.icon;
                return (
                  <Card key={supporter.id} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-chart-2/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-chart-2" />
                        </div>
                        <div>
                          <h4 className="font-fantasy-body font-bold text-lg text-foreground">
                            {supporter.name}
                          </h4>
                          <p className="font-fantasy-body text-sm text-muted-foreground">
                            {supporter.contribution}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <Card className="bg-gradient-to-r from-primary/5 to-chart-3/5 border-2 border-dashed border-primary/30">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-fantasy-title text-2xl text-primary mb-4">
                  ¡Tu Marca Aquí!
                </h3>
                <p className="font-fantasy-body text-muted-foreground mb-6">
                  ¿Interesado en patrocinar nuestro evento? Únete a nosotros y 
                  forma parte de esta increíble experiencia que impulsa el talento 
                  estudiantil en el ámbito creativo y tecnológico.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    console.log('Become sponsor clicked');
                    const contactSection = document.getElementById('contacto');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-testid="button-become-sponsor"
                >
                  Conviértete en Patrocinador
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}