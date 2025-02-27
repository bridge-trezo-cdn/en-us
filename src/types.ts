export interface CryptoPrice {
  id: string;
  name: string;
  symbol: string;
  price: number;
  priceChange24h: number;
}

export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}