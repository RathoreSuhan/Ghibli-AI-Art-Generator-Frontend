import CtaSection from './components/CtaSection';
import DetailSection from './components/DetailSection';
import FaqSection from './components/FaqSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-slate-800">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <DetailSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
