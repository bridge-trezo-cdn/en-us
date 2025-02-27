import React from 'react';
import { motion } from 'framer-motion';
import { Download, Usb, Settings, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Download className="h-12 w-12 text-white" />,
    title: "Download Trezor Bridge",
    description: "Visit the official Trezor website and download the latest version of Trezor Bridge compatible with your operating system."
  },
  {
    icon: <Settings className="h-12 w-12 text-white" />,
    title: "Install the Software",
    description: "Run the installer and follow the on-screen instructions to complete the installation process. No advanced configuration is required."
  },
  {
    icon: <Usb className="h-12 w-12 text-white" />,
    title: "Connect Your Device",
    description: "Connect your Trezor hardware wallet to your computer using the USB cable provided with your device."
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-white" />,
    title: "Start Using Your Wallet",
    description: "Open your preferred wallet interface, which will automatically detect your Trezor device through Trezor Bridge."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How Trezor Bridge Works</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Setting up Trezor Bridge is a simple process that takes just a few minutes. 
            Follow these steps to establish a secure connection between your Trezor device and computer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="bg-primary rounded-full p-4 mb-4 animate-pulse-slow">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-700 text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-light transform -translate-x-8">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-primary-dark rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;