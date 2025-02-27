import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CryptoPriceTracker from './components/CryptoPriceTracker';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import MainContent from './components/MainContent';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Trezor Bridge",
      "applicationCategory": "UtilitySoftware",
      "operatingSystem": "Windows, macOS, Linux",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Trezor Bridge is essential software for connecting your Trezor hardware wallet to your computer, enabling secure cryptocurrency management."
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <CryptoPriceTracker />
      </div>
      <Features />
      <HowItWorks />
      <MainContent />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;