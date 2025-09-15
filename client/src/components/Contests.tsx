import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, Trophy, Users } from 'lucide-react';

export default function Contests() {
  const [activeTab, setActiveTab] = useState('character-design');

  const contests = [
    {
      id: 'character-design',
      title: 'Diseño de Personajes',
      theme: 'Guardianes del Reino Mágico',
      duration: '2 días',
      judges: ['Chucho', 'Miriam', 'Alexis'],
      requirements: [
        'Ilustración final del personaje en formato JPG o PNG, 300 dpi, tamaño mínimo A4',
        'Hoja de vistas del personaje (frontal, lateral, 3/4)',
        'Video del proceso en formato MP4',
        'Hoja de presentación con nombre y descripción del personaje'
      ],
      criteria: [
        'Originalidad y creatividad del personaje',
        'Alineación con el tema del festival',
        'Diseño visual (claridad, estilo, paleta de colores)',
        'Narrativa del personaje (historia, coherencia)'
      ],
      prizes: {
        first: 'Sudadera + Peluche Cuau',
        second: 'Playera + Peluche Cuau',
        third: 'Termo + Peluche Cuau'
      }
    },
    {
      id: 'digital-sculpting',
      title: 'Esculpido Digital',
      theme: 'Criaturas y Guardianes del Reino Mágico',
      duration: '2 días',
      judges: ['Richard', 'Alex', 'Alexis'],
      requirements: [
        'Renders en alta resolución desde mínimo 3 ángulos distintos',
        'Formato JPG, PNG o PDF, 300 dpi, fondo neutro',
        'Video del proceso en formato MP4',
        'Hoja de presentación con descripción y software utilizado'
      ],
      criteria: [
        'Originalidad y creatividad del personaje',
        'Alineación con el tema del concurso',
        'Diseño visual (claridad, estilo, silueta)',
        'Técnica de esculpido digital'
      ],
      prizes: {
        first: 'Impresión 3D + Peluche Cuau',
        second: 'Playera + Peluche Cuau',
        third: 'Termo + Peluche Cuau'
      }
    },
    {
      id: 'storyboard',
      title: 'Storyboard',
      theme: 'Aventuras en el Reino Mágico',
      duration: '2 días',
      judges: ['Chucho', 'Jarac', 'Miriam'],
      requirements: [
        'Storyboard completo basado en el guión proporcionado',
        'Formato JPG, PNG o PDF, 300 dpi, tamaño mínimo 1920 x 1080',
        'Video del proceso en formato MP4',
        'Ficha técnica con interpretación narrativa del guión'
      ],
      criteria: [
        'Fidelidad al guión proporcionado',
        'Claridad en la transmisión de acción y emociones',
        'Narrativa visual y secuenciación',
        'Uso de planos cinematográficos'
      ],
      prizes: {
        first: 'Sudadera + Peluche Cuau',
        second: 'Playera + Peluche Cuau',
        third: 'Termo + Peluche Cuau'
      }
    },
    {
      id: 'short-film',
      title: 'Cineminuto',
      theme: 'Magia en 60 Segundos',
      duration: '4 días',
      judges: ['Chucho', 'Miriam', 'Jarac'],
      requirements: [
        'Video de máximo 60 segundos en formato MP4',
        'Técnicas: Stop motion, Animación 2D/3D, Acción viva',
        'Video del proceso creativo',
        'Ficha técnica con créditos y descripción'
      ],
      criteria: [
        'Originalidad y creatividad narrativa',
        'Calidad técnica de producción',
        'Alineación con el tema del concurso',
        'Impacto audiovisual en 60 segundos'
      ],
      prizes: {
        first: 'Sudadera + Peluche Cuau',
        second: 'Playera + Peluche Cuau',
        third: 'Termo + Peluche Cuau'
      }
    }
  ];

  const currentContest = contests.find(contest => contest.id === activeTab);

  const handleDownloadPDF = () => {
    console.log('Download contest PDF clicked');
    // In real implementation, this would download the actual PDF
  };

  return (
    <section id="concursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-fantasy-title text-4xl md:text-5xl text-primary mb-6">
              Concursos
            </h2>
            <p className="font-fantasy-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Participa en nuestros emocionantes concursos y demuestra tu talento en diferentes 
              disciplinas artísticas y creativas. ¡Premios increíbles te esperan!
            </p>
          </div>

          {/* Contest Cards Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contests.map((contest) => (
              <Card 
                key={contest.id} 
                className={`hover-elevate cursor-pointer transition-all ${
                  activeTab === contest.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveTab(contest.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-fantasy-body text-lg">
                    {contest.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {contest.theme}
                  </p>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Badge variant="secondary" className="mb-2">
                    {contest.duration}
                  </Badge>
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Jueces: {contest.judges.join(', ')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Contest Information */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {contests.map((contest) => (
                <TabsTrigger key={contest.id} value={contest.id} className="font-fantasy-body text-xs md:text-sm">
                  {contest.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {contests.map((contest) => (
              <TabsContent key={contest.id} value={contest.id} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Contest Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-fantasy-title text-2xl text-primary">
                          {contest.title}
                        </CardTitle>
                        <p className="font-fantasy-body text-lg text-muted-foreground">
                          Tema: "{contest.theme}"
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Requirements */}
                        <div>
                          <h4 className="font-fantasy-body font-semibold text-lg mb-3">
                            Requisitos de Entrega
                          </h4>
                          <ul className="space-y-2">
                            {contest.requirements.map((req, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                                <span className="font-fantasy-body text-sm text-muted-foreground">
                                  {req}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Evaluation Criteria */}
                        <div>
                          <h4 className="font-fantasy-body font-semibold text-lg mb-3">
                            Criterios de Evaluación
                          </h4>
                          <ul className="space-y-2">
                            {contest.criteria.map((criteria, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-2 h-2 bg-chart-3 rounded-full mt-2"></span>
                                <span className="font-fantasy-body text-sm text-muted-foreground">
                                  {criteria}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sidebar Info */}
                  <div className="space-y-6">
                    {/* Judges */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-fantasy-body text-lg">
                          Jurado
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {contest.judges.map((judge, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                <Users className="h-5 w-5 text-muted-foreground" />
                              </div>
                              <span className="font-fantasy-body text-sm">
                                {judge}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Prizes */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-fantasy-body text-lg">
                          Premios
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-chart-2 text-foreground">1°</Badge>
                            <span className="font-fantasy-body text-sm">
                              {contest.prizes.first}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">2°</Badge>
                            <span className="font-fantasy-body text-sm">
                              {contest.prizes.second}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">3°</Badge>
                            <span className="font-fantasy-body text-sm">
                              {contest.prizes.third}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Important Dates */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-fantasy-body text-lg">
                          Fechas Importantes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-chart-3" />
                            <span className="font-fantasy-body">
                              Inscripciones: 14-19 Sept
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-chart-3" />
                            <span className="font-fantasy-body">
                              Competencia: 20-21 Sept
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-chart-3" />
                            <span className="font-fantasy-body">
                              Premiación: 26 Sept
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Download Button */}
                    <Button 
                      onClick={handleDownloadPDF}
                      className="w-full"
                      data-testid="button-download-contest-pdf"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Descargar Convocatoria Completa
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}