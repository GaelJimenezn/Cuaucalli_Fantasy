import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, User, Palette, Eye } from 'lucide-react';
import duende1 from '@assets/image_1757966727161.png';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // //todo: remove mock functionality - replace with real gallery data
  const artworks = [
    {
      id: 1,
      title: 'Duende Mágico',
      artist: 'Estudiante de Diseño Gráfico',
      technique: 'Ilustración Digital',
      image: duende1,
      description: 'Personaje fantástico creado para el concurso de diseño de personajes'
    },
    {
      id: 2,
      title: 'Guardián del Bosque',
      artist: 'Ana García',
      technique: 'Concept Art Digital',
      image: '/api/placeholder/300/400',
      description: 'Criatura protectora del reino mágico'
    },
    {
      id: 3,
      title: 'Hechicera Élfica',
      artist: 'Carlos Mendoza',
      technique: 'Pintura Digital',
      image: '/api/placeholder/300/500',
      description: 'Personaje mágico con poderes elementales'
    },
    {
      id: 4,
      title: 'Dragón Ancestral',
      artist: 'María López',
      technique: 'Escultura Digital',
      image: '/api/placeholder/300/350',
      description: 'Criatura antigua guardiana de secretos milenarios'
    },
    {
      id: 5,
      title: 'Guerrero Místico',
      artist: 'Jorge Ramírez',
      technique: 'Arte Conceptual',
      image: '/api/placeholder/300/450',
      description: 'Defensor del reino con armadura encantada'
    },
    {
      id: 6,
      title: 'Fairy Princess',
      artist: 'Sofia Hernández',
      technique: 'Watercolor Digital',
      image: '/api/placeholder/300/380',
      description: 'Princesa de las hadas con poderes de la naturaleza'
    },
    {
      id: 7,
      title: 'Ogro Noble',
      artist: 'Luis Torres',
      technique: 'Modelado 3D',
      image: '/api/placeholder/300/420',
      description: 'Ogro con corazón noble que protege a los débiles'
    },
    {
      id: 8,
      title: 'Mago Erudito',
      artist: 'Elena Vargas',
      technique: 'Ilustración Tradicional',
      image: '/api/placeholder/300/460',
      description: 'Sabio conocedor de todos los hechizos antiguos'
    }
  ];

  const handleImageClick = (artwork: any) => {
    setSelectedImage(artwork);
    console.log('Gallery image clicked:', artwork.title);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-fantasy-title text-4xl md:text-5xl text-primary mb-6">
              Galería Virtual
            </h2>
            <p className="font-fantasy-body text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Explora las increíbles creaciones de nuestros estudiantes. Esta galería virtual 
              complementa la exposición física que tendrá lugar durante el evento.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span className="font-fantasy-body">
                Haz clic en cualquier imagen para ver los detalles completos
              </span>
            </div>
          </div>

          {/* Pinterest-style Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {artworks.map((artwork) => (
              <div 
                key={artwork.id}
                className="break-inside-avoid cursor-pointer hover-elevate transition-all duration-300 group"
                onClick={() => handleImageClick(artwork)}
                data-testid={`gallery-item-${artwork.id}`}
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
                  <div className="relative overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button variant="secondary" size="sm" className="backdrop-blur-sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-fantasy-body font-semibold text-foreground mb-1">
                      {artwork.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-1">
                      <User className="h-3 w-3" />
                      <span>{artwork.artist}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Palette className="h-3 w-3" />
                      <span>{artwork.technique}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Physical Gallery Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-chart-3/5 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="font-fantasy-title text-2xl text-primary mb-4">
                Galería Física
              </h3>
              <p className="font-fantasy-body text-muted-foreground">
                Durante el evento, también podrás visitar nuestra galería física donde se 
                exhibirán trabajos originales de los estudiantes. Una experiencia única 
                para apreciar el arte en toda su dimensión.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for detailed view */}
      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-fantasy-title text-2xl text-primary mb-2">
                    {selectedImage.title}
                  </h2>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span className="font-fantasy-body">Artista: {selectedImage.artist}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Palette className="h-4 w-4" />
                      <span className="font-fantasy-body">Técnica: {selectedImage.technique}</span>
                    </div>
                  </div>
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
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}