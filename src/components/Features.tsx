import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Zap, Globe, RefreshCw, Layers } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Enhanced Security",
    description: "Trezor Bridge establishes a secure connection between your hardware wallet and computer, protecting your private keys from online threats."
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "End-to-End Encryption",
    description: "All communications between your Trezor device and computer are encrypted, ensuring your sensitive data remains private."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Fast Transactions",
    description: "Trezor Bridge optimizes the connection speed, allowing for quick transaction signing and verification."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Cross-Platform Compatibility",
    description: "Works seamlessly on Windows, macOS, and Linux, providing a consistent experience across all operating systems."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    title: "Automatic Updates",
    description: "Trezor Bridge checks for and installs updates automatically, ensuring you always have the latest security features."
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Multi-Wallet Support",
    description: "Connect to various wallet interfaces including Trezor Suite, MetaMask, and other third-party wallets that support Trezor."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section animated-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Trezor Bridge?</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Trezor Bridge provides essential connectivity between your hardware wallet and computer, 
            with advanced features designed to enhance security and usability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="feature-card"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;