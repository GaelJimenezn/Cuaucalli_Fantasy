import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Handshake, TrendingUp } from 'lucide-react';

export default function About() {
  const objectives = [
    {
      icon: Target,
      title: 'Fomentar la proyección del talento estudiantil',
      description: 'Brindar espacios para que los estudiantes muestren sus habilidades y proyectos'
    },
    {
      icon: TrendingUp,
      title: 'Fortalecer la oferta académica',
      description: 'Enriquecer la experiencia educativa con actividades prácticas y competitivas'
    },
    {
      icon: Users,
      title: 'Promover la integración universitaria',
      description: 'Crear vínculos entre estudiantes de diferentes carreras y niveles académicos'
    },
    {
      icon: Handshake,
      title: 'Impulsar el networking con profesionales',
      description: 'Conectar estudiantes con expertos de la industria y oportunidades laborales'
    }
  ];

  return (
    <section id="sobre-evento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-fantasy-title text-4xl md:text-5xl text-primary mb-6">
              Sobre el Evento
            </h2>
            <p className="font-fantasy-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cuauhcalli Fantasy es una iniciativa multidisciplinaria que busca brindar un espacio 
              integral de exposición, competencia, aprendizaje y recreación para estudiantes de 
              las áreas creativas y tecnológicas. Se integran master classes, conferencias, 
              concursos, talleres, galerías de arte y actividades recreativas, con el objetivo de 
              fortalecer vínculos entre academia, sector profesional y comunidad universitaria.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <Card key={index} className="hover-elevate cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-chart-3" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-fantasy-body font-bold text-lg text-foreground mb-2">
                          {objective.title}
                        </h3>
                        <p className="font-fantasy-body text-muted-foreground">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Venue Information */}
          <Card className="bg-gradient-to-r from-primary/5 to-chart-3/5">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-fantasy-title text-2xl text-primary mb-4">
                    Sede del Evento
                  </h3>
                  <p className="font-fantasy-body text-foreground mb-4">
                    Universidad Cuauhtémoc - Sede Constituyentes
                  </p>
                  <p className="font-fantasy-body text-muted-foreground mb-6">
                    El evento se realizará en las instalaciones de la Universidad, 
                    incluyendo el Auditorio, Explanada, Patio Central, Patio de 
                    Odontología y Pasillos, proporcionando un ambiente académico 
                    ideal para todas las actividades programadas.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>📍 Dirección: Universidad Cuauhtémoc - Sede Constituyentes</p>
                    <p>🕒 Horario: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="relative">
                  {/* Mock map - in real implementation this would be Google Maps */}
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center border-2 border-border">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-fantasy-body text-sm text-muted-foreground">
                        Mapa interactivo<br />Universidad Cuauhtémoc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}