import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Users, Gamepad2, Palette, Mic } from 'lucide-react';

export default function Activities() {
  const conferences = [
    {
      time: '10:25 AM - 11:05 AM',
      title: 'Conferencia: Sofia Colombia',
      speaker: 'Se Asoman (invitada de Colombia)',
      location: 'Auditorio',
      type: 'conference'
    },
    {
      time: '11:15 AM - 11:55 AM',
      title: 'Masterclass: Jesus Alberto Mendoza Pozas',
      speaker: 'Docente',
      location: 'Auditorio',
      type: 'masterclass'
    },
    {
      time: '12:05 PM - 12:45 PM',
      title: 'Masterclass: Richard Christensen',
      speaker: 'Docente',
      location: 'Auditorio',
      type: 'masterclass'
    },
    {
      time: '2:25 PM - 3:05 PM',
      title: 'Masterclass: Alexis Octavio Colin Ortiz y Miriam Karina Melgoza Gómez',
      speaker: 'Docentes',
      location: 'Auditorio',
      type: 'masterclass'
    },
    {
      time: '3:15 PM - 3:55 PM',
      title: 'Conferencia: Pixelatl',
      speaker: 'Invitado especial',
      location: 'Auditorio',
      type: 'conference'
    }
  ];

  const activities = [
    {
      icon: Mic,
      title: 'Conferencias y Masterclasses',
      location: 'Auditorio',
      description: 'Charlas especializadas con profesionales de la industria y docentes expertos',
      schedule: 'Todo el día',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Users,
      title: 'Stands Empresariales',
      location: 'Patio Central',
      description: 'Stands de empresas como Pixelatl, XP-Pen, Utopía Comics y artistas independientes',
      schedule: '10:00 AM - 5:00 PM',
      color: 'bg-chart-3/10 text-chart-3'
    },
    {
      icon: Palette,
      title: 'Show de Medio Tiempo',
      location: 'Patio Central',
      description: 'Presentación especial durante el intermedio del evento',
      schedule: '1:45 PM - 2:15 PM',
      color: 'bg-chart-2/10 text-chart-2'
    },
    {
      icon: Gamepad2,
      title: 'Zona de Juegos',
      location: 'Patio de Odontología',
      description: 'Just Dance, Gartic Phone, taller de acuarelas y presentación de demos de videojuegos',
      schedule: '10:00 AM - 5:00 PM',
      color: 'bg-chart-4/10 text-chart-4'
    }
  ];

  return (
    <section id="actividades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-fantasy-title text-4xl md:text-5xl text-primary mb-6">
              Actividades del Evento
            </h2>
            <p className="font-fantasy-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Un día completo de aprendizaje, creatividad y entretenimiento con actividades 
              para todos los gustos e intereses en el mundo del arte y la tecnología.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${activity.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="font-fantasy-body text-xl">
                          {activity.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{activity.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{activity.schedule}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="font-fantasy-body text-muted-foreground">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Conference Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="font-fantasy-title text-2xl text-center">
                Cronograma de Conferencias y Masterclasses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conferences.map((event, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover-elevate border border-border">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'conference' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-chart-3/10 text-chart-3'
                      }`}>
                        {event.type === 'conference' ? 'Conferencia' : 'Masterclass'}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-32 text-sm text-muted-foreground">
                      {event.time}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-fantasy-body font-semibold text-foreground">
                        {event.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {event.speaker}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-sm text-muted-foreground flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}