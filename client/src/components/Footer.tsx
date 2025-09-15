import { Heart, Calendar, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre el Evento', href: '#sobre-evento' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Concursos', href: '#concursos' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Patrocinadores', href: '#patrocinadores' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    console.log(`Footer navigation to ${href}`);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Event Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/api/placeholder/40/40" 
                  alt="Cuauhcalli Fantasy Logo" 
                  className="h-10 w-auto"
                />
                <h3 className="font-fantasy-title text-xl">
                  Cuauhcalli Fantasy
                </h3>
              </div>
              <p className="font-fantasy-body text-primary-foreground/80 text-sm mb-4">
                Donde florece el arte universitario. Un evento que celebra 
                la creatividad y el talento estudiantil.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-chart-2" />
                  <span className="font-fantasy-body">Primera semana del cuatrimestre</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-chart-2" />
                  <span className="font-fantasy-body">Universidad Cuauhtémoc</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-fantasy-title text-lg mb-4">
                Enlaces Rápidos
              </h4>
              <nav className="space-y-2">
                {footerLinks.slice(0, 4).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="block font-fantasy-body text-sm text-primary-foreground/80 hover:text-chart-2 transition-colors text-left"
                    data-testid={`footer-link-${link.href.replace('#', '')}`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* More Links */}
            <div>
              <h4 className="font-fantasy-title text-lg mb-4">
                Más Información
              </h4>
              <nav className="space-y-2">
                {footerLinks.slice(4).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="block font-fantasy-body text-sm text-primary-foreground/80 hover:text-chart-2 transition-colors text-left"
                    data-testid={`footer-link-${link.href.replace('#', '')}`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Event Details */}
            <div>
              <h4 className="font-fantasy-title text-lg mb-4">
                Detalles del Evento
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-fantasy-body font-semibold text-chart-2 mb-1">
                    Horario
                  </p>
                  <p className="font-fantasy-body text-primary-foreground/80">
                    10:00 AM - 5:00 PM
                  </p>
                </div>
                <div>
                  <p className="font-fantasy-body font-semibold text-chart-2 mb-1">
                    Organizadoras
                  </p>
                  <p className="font-fantasy-body text-primary-foreground/80">
                    Paula Samantha Tapia Vega<br />
                    Elida Sarahi González Monárrez
                  </p>
                </div>
                <div>
                  <p className="font-fantasy-body font-semibold text-chart-2 mb-1">
                    Contacto
                  </p>
                  <p className="font-fantasy-body text-primary-foreground/80">
                    cuauhcalli.fantasy@ucuauhtemoc.edu.mx
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="font-fantasy-body text-sm text-primary-foreground/80">
                  © {currentYear} Cuauhcalli Fantasy. Todos los derechos reservados.
                </p>
                <p className="font-fantasy-body text-sm text-primary-foreground/80">
                  Universidad Cuauhtémoc - Sede Constituyentes
                </p>
              </div>
              
              <div className="flex items-center space-x-1 text-sm">
                <span className="font-fantasy-body text-primary-foreground/80">
                  Hecho con
                </span>
                <Heart className="h-4 w-4 text-chart-2 fill-current" />
                <span className="font-fantasy-body text-primary-foreground/80">
                  para la comunidad estudiantil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}