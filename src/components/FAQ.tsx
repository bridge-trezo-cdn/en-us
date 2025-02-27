import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Trezor Bridge and why do I need it?",
    answer: "Trezor Bridge is a communication tool that enables your computer to interact with your Trezor hardware wallet. It creates a secure connection that allows you to view your balances, initiate transactions, and manage your crypto assets while keeping your private keys protected within the hardware device."
  },
  {
    question: "Is Trezor Bridge safe to use?",
    answer: "Yes, Trezor Bridge is designed with security as its primary focus. It establishes an encrypted connection between your device and computer, protecting against potential attacks. The software undergoes regular security audits and updates to address any vulnerabilities."
  },
  {
    question: "Do I need to install Trezor Bridge on every computer I use?",
    answer: "Yes, if you want to use your Trezor device on multiple computers, you'll need to install Trezor Bridge on each one. The software is lightweight and easy to install, making this a simple process."
  },
  {
    question: "Can I use Trezor Bridge on my mobile device?",
    answer: "Trezor Bridge is designed for desktop operating systems (Windows, macOS, and Linux). For mobile devices, Trezor offers alternative connection methods through compatible mobile wallet apps that can connect to your Trezor device."
  },
  {
    question: "How do I update Trezor Bridge?",
    answer: "Trezor Bridge checks for updates automatically and will prompt you when a new version is available. You can also manually check for updates by visiting the official Trezor website and downloading the latest version."
  },
  {
    question: "What should I do if Trezor Bridge isn't detecting my device?",
    answer: "First, ensure your device is properly connected via USB. Try using a different USB port or cable. Restart Trezor Bridge and your computer. If issues persist, reinstall Trezor Bridge or check the Trezor support website for troubleshooting guides."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Find answers to common questions about Trezor Bridge and how it works with your hardware wallet.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="font-semibold text-left">{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-4 pb-4 rounded-b-lg shadow-sm"
                  >
                    <p className="text-gray-700">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;