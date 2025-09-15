import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import heroBackground from '@assets/generated_images/Fantasy_university_hero_background_30bd6843.png';

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const aboutSection = document.getElementById('sobre-evento');
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('Explore event clicked');
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Logo */}
          <div className="mb-8">
            <img 
              src="/api/placeholder/200/100" 
              alt="Cuauhcalli Fantasy Logo" 
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>

          {/* Title */}
          <h1 className="font-fantasy-title text-5xl md:text-7xl text-white mb-4">
            Cuauhcalli Fantasy
          </h1>
          
          {/* Subtitle */}
          <p className="font-fantasy-body text-xl md:text-2xl text-white/90 mb-8">
            Donde florece el arte universitario
          </p>

          {/* Event Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5 text-chart-2" />
                <span className="font-fantasy-body">Primera semana del cuatrimestre</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5 text-chart-2" />
                <span className="font-fantasy-body">10:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5 text-chart-2" />
                <span className="font-fantasy-body">Universidad Cuauhtémoc</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-chart-2 hover:bg-chart-2/90 text-foreground font-fantasy-body text-lg px-8 py-6"
            onClick={handleExploreClick}
            data-testid="button-explore-event"
          >
            Explora el Evento
          </Button>
        </div>
      </div>
    </section>
  );
}