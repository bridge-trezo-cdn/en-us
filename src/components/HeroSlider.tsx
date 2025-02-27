import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Slide } from '../types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides: Slide[] = [
  {
    id: 1,
    title: "Secure Your Digital Assets with Trezor Bridge",
    description: "Connect your Trezor hardware wallet securely to manage your cryptocurrency portfolio",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Easy Setup, Maximum Security",
    description: "Trezor Bridge provides a seamless connection between your device and wallet interface",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Compatible Across All Platforms",
    description: "Use Trezor Bridge on Windows, macOS, or Linux with the same level of security",
    image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="relative h-[500px] w-full overflow-hidden">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl text-white"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{slide.title}</h2>
                    <p className="text-xl mb-8">{slide.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary"
                    >
                      Learn More About Trezor Bridge
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;