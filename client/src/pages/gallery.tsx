import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, User, Palette, Eye, Calendar, Trophy, X } from 'lucide-react';
import { Link } from 'wouter';
import duende1 from '@assets/image_1757966727161.png';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  technique: string;
  image: string;
  description: string;
  contest?: string;
  award?: string;
}

interface Edition {
  id: string;
  year: string;
  theme: string;
  date: string;
  artworks: Artwork[];
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);
  const [activeEdition, setActiveEdition] = useState('2024');

  // Mock data for current and future editions
  const editions: Edition[] = [
    {
      id: '2024',
      year: '2024',
      theme: 'Guardianes del Reino Mágico',
      date: 'Septiembre 2024',
      artworks: [
        {
          id: 1,
          title: 'Duende Mágico',
          artist: 'Estudiante de Diseño Gráfico',
          technique: 'Ilustración Digital',
          image: duende1,
          description: 'Personaje fantástico creado para el concurso de diseño de personajes',
          contest: 'Diseño de Personajes',
          award: 'Mención Honorífica'
        },
        {
          id: 2,
          title: 'Guardián del Bosque',
          artist: 'Ana García',
          technique: 'Concept Art Digital',
          image: '/api/placeholder/300/400',
          description: 'Criatura protectora del reino mágico con elementos naturales integrados en su diseño',
          contest: 'Diseño de Personajes',
          award: 'Primer Lugar'
        },
        {
          id: 3,
          title: 'Hechicera Élfica',
          artist: 'Carlos Mendoza',
          technique: 'Pintura Digital',
          image: '/api/placeholder/300/500',
          description: 'Personaje mágico con poderes elementales, diseñado con atención al detalle en vestimenta y accesorios',
          contest: 'Diseño de Personajes'
        },
        {
          id: 4,
          title: 'Dragón Ancestral',
          artist: 'María López',
          technique: 'Escultura Digital',
          image: '/api/placeholder/300/350',
          description: 'Criatura antigua guardiana de secretos milenarios, modelada con técnicas avanzadas de ZBrush',
          contest: 'Esculpido Digital',
          award: 'Segundo Lugar'
        },
        {
          id: 5,
          title: 'Guerrero Místico',
          artist: 'Jorge Ramírez',
          technique: 'Arte Conceptual',
          image: '/api/placeholder/300/450',
          description: 'Defensor del reino con armadura encantada, enfoque en diseño de equipamiento fantástico',
          contest: 'Diseño de Personajes'
        },
        {
          id: 6,
          title: 'Aventura en el Reino',
          artist: 'Sofia Hernández',
          technique: 'Storyboard',
          image: '/api/placeholder/300/380',
          description: 'Secuencia narrativa que cuenta la historia de un héroe en busca del tesoro perdido',
          contest: 'Storyboard',
          award: 'Primer Lugar'
        }
      ]
    },
    // Placeholder for future editions
    {
      id: '2025',
      year: '2025',
      theme: 'Próximamente...',
      date: 'Próxima edición',
      artworks: []
    }
  ];

  const currentEdition = editions.find(edition => edition.id === activeEdition);
  const awards = ['Primer Lugar', 'Segundo Lugar', 'Tercer Lugar', 'Mención Honorífica'];

  const handleImageClick = (artwork: Artwork) => {
    setSelectedImage(artwork);
    console.log('Gallery image clicked:', artwork.title);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getAwardColor = (award?: string) => {
    switch (award) {
      case 'Primer Lugar': return 'bg-chart-2 text-foreground';
      case 'Segundo Lugar': return 'bg-muted text-foreground';
      case 'Tercer Lugar': return 'bg-chart-4/60 text-foreground';
      case 'Mención Honorífica': return 'bg-chart-3/60 text-foreground';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Button 
                variant="secondary" 
                size="sm" 
                asChild
                data-testid="button-back-home"
              >
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
            </div>
            
            <div className="text-center">
              <h1 className="font-fantasy-title text-4xl md:text-6xl mb-4">
                Galería de Arte Digital
              </h1>
              <p className="font-fantasy-body text-primary-foreground/90 text-lg max-w-3xl mx-auto">
                Explora las increíbles creaciones de nuestros estudiantes a través de las diferentes 
                ediciones de Cuauhcalli Fantasy. Cada obra representa el talento y la creatividad 
                de nuestra comunidad universitaria.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Edition Selector */}
            <Tabs value={activeEdition} onValueChange={setActiveEdition} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-muted p-1">
                  {editions.map((edition) => (
                    <TabsTrigger 
                      key={edition.id} 
                      value={edition.id}
                      className="font-fantasy-body data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {edition.year}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {editions.map((edition) => (
                <TabsContent key={edition.id} value={edition.id}>
                  {/* Edition Info */}
                  <Card className="mb-12 bg-gradient-to-r from-primary/5 to-chart-3/5">
                    <CardHeader className="text-center">
                      <CardTitle className="font-fantasy-title text-3xl text-primary">
                        Edición {edition.year}
                      </CardTitle>
                      <div className="space-y-2">
                        <p className="font-fantasy-body text-xl text-foreground">
                          {edition.theme}
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="font-fantasy-body">{edition.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Artworks Grid */}
                  {edition.artworks.length > 0 ? (
                    <>
                      {/* Awards Filter */}
                      <div className="mb-8 text-center">
                        <h3 className="font-fantasy-body text-lg text-foreground mb-4">
                          Obras Premiadas
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2">
                          {awards.map((award) => {
                            const awardedWorks = edition.artworks.filter(work => work.award === award);
                            return awardedWorks.length > 0 ? (
                              <Badge key={award} className={getAwardColor(award)}>
                                <Trophy className="h-3 w-3 mr-1" />
                                {award} ({awardedWorks.length})
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>

                      {/* Gallery Grid */}
                      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {edition.artworks.map((artwork) => (
                          <div 
                            key={artwork.id}
                            className="break-inside-avoid cursor-pointer hover-elevate transition-all duration-300 group"
                            onClick={() => handleImageClick(artwork)}
                            data-testid={`gallery-item-${artwork.id}`}
                          >
                            <Card className="overflow-hidden">
                              <div className="relative overflow-hidden">
                                <img 
                                  src={artwork.image} 
                                  alt={artwork.title}
                                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {artwork.award && (
                                  <div className="absolute top-2 right-2">
                                    <Badge className={getAwardColor(artwork.award)}>
                                      <Trophy className="h-3 w-3 mr-1" />
                                      {artwork.award}
                                    </Badge>
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                  <Button variant="secondary" size="sm" className="backdrop-blur-sm">
                                    <Eye className="h-4 w-4 mr-2" />
                                    Ver Detalles
                                  </Button>
                                </div>
                              </div>
                              <CardContent className="p-4">
                                <h3 className="font-fantasy-body font-semibold text-foreground mb-1">
                                  {artwork.title}
                                </h3>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-1">
                                  <User className="h-3 w-3" />
                                  <span>{artwork.artist}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
                                  <Palette className="h-3 w-3" />
                                  <span>{artwork.technique}</span>
                                </div>
                                {artwork.contest && (
                                  <Badge variant="outline" className="text-xs">
                                    {artwork.contest}
                                  </Badge>
                                )}
                              </CardContent>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    /* Empty State for Future Editions */
                    <Card className="text-center py-16">
                      <CardContent>
                        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                          <Palette className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h3 className="font-fantasy-title text-2xl text-primary mb-4">
                          Próximamente
                        </h3>
                        <p className="font-fantasy-body text-muted-foreground mb-6 max-w-md mx-auto">
                          Esta edición está por llegar. Mantente atento para descubrir las nuevas 
                          creaciones de nuestros talentosos estudiantes.
                        </p>
                        <Button asChild>
                          <Link href="/#contacto">
                            Mantenerme Informado
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>

      {/* Modal for detailed view */}
      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="font-fantasy-title text-2xl text-primary">
                  {selectedImage.title}
                </DialogTitle>
                <DialogDescription className="font-fantasy-body text-muted-foreground">
                  Obra de {selectedImage.artist} - {selectedImage.technique}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span className="font-fantasy-body">Artista: {selectedImage.artist}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Palette className="h-4 w-4" />
                        <span className="font-fantasy-body">Técnica: {selectedImage.technique}</span>
                      </div>
                      {selectedImage.contest && (
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Trophy className="h-4 w-4" />
                          <span className="font-fantasy-body">Concurso: {selectedImage.contest}</span>
                        </div>
                      )}
                    </div>
                    {selectedImage.award && (
                      <Badge className={`mt-2 ${getAwardColor(selectedImage.award)}`}>
                        <Trophy className="h-3 w-3 mr-1" />
                        {selectedImage.award}
                      </Badge>
                    )}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={closeModal}
                    data-testid="button-close-gallery-modal"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              
              <div className="flex justify-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-96 object-contain rounded-lg"
                />
              </div>
              
              <div>
                <h3 className="font-fantasy-body font-semibold text-lg mb-2">Descripción</h3>
                <p className="font-fantasy-body text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}