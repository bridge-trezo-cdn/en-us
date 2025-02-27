import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { CryptoPrice } from '../types';

const CryptoPriceTracker: React.FC = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 60000, priceChange24h: 2.5 },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 3000, priceChange24h: 1.8 },
    { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 1.2, priceChange24h: -0.5 },
    { id: 'solana', name: 'Solana', symbol: 'SOL', price: 100, priceChange24h: 3.2 },
    { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 20, priceChange24h: -1.2 },
  ]);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prevPrices => 
        prevPrices.map(crypto => {
          const randomChange = (Math.random() * 2 - 1) * 0.5;
          const newPrice = crypto.price * (1 + randomChange / 100);
          return {
            ...crypto,
            price: parseFloat(newPrice.toFixed(2)),
            priceChange24h: parseFloat((crypto.priceChange24h + randomChange / 10).toFixed(2))
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div className="p-2 bg-primary text-white font-semibold text-center">
        Live Cryptocurrency Prices
      </div>
      <div className="flex overflow-x-auto py-2 px-1 scrollbar-hide">
        {prices.map((crypto) => (
          <motion.div
            key={crypto.id}
            className="crypto-price mx-2 min-w-[150px] bg-gray-50"
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-medium">{crypto.name}</div>
            <div className="text-sm text-gray-500">{crypto.symbol}</div>
            <div className="font-bold">${crypto.price.toLocaleString()}</div>
            <div className={`text-sm flex items-center ${crypto.priceChange24h >= 0 ? 'crypto-price-up' : 'crypto-price-down'}`}>
              {crypto.priceChange24h >= 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
              {Math.abs(crypto.priceChange24h)}%
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CryptoPriceTracker;