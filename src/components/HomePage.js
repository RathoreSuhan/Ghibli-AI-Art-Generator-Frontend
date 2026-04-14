import CtaSection from './CtaSection';
import DetailSection from './DetailSection';
import FaqSection from './FaqSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import GallerySection from './GallerySection';
import Header from './Header';
import HeroSection from './HeroSection';

function HomePage() {
  return (
    <div className="min-h-screen text-slate-800">
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

export default HomePage;
