import Header from '../Header';

export default function HeaderExample() {
  const handleNavigate = (section: string) => {
    console.log(`Navigation to ${section} clicked`);
  };

  return <Header onNavigate={handleNavigate} />;
}