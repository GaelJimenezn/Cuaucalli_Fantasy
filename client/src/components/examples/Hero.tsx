import Hero from '../Hero';

export default function HeroExample() {
  const handleExploreClick = () => {
    console.log('Explore event clicked from example');
  };

  return <Hero onExploreClick={handleExploreClick} />;
}