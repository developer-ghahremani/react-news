export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  description?: string;
  color: string;
  iconUrl: string;
  websiteUrl?: string;
  links?: [
    {
      name: string;
      url: string;
      type: string;
    }
  ];
  supply?: {
    confirmed: boolean;
    circulating: string;
    total: string;
  };
  "24hVolume": string;
  marketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  numberOfMarkets?: number;
  numberOfExchanges?: number;
  listedAt: number;
  sparkline: string[];
  allTimeHigh?: {
    price: string;
    timestamp: number;
  };
  coinrankingUrl: string;
}

export interface CoinHistoryPrice {
  price: string;
  timestamp: number;
}
