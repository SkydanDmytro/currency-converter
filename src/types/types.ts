export interface ICurrency {
  rate: number;
  cc: string;
}
export interface IExchangeRate {
  usd: number;
  eur: number;
}
export interface ICurrentCurrencies {
  from: string;
  to: string;
}
export interface ICurrencyInfo {
  amount: number;
  currencyCode: string;
}

export type CurrencyConverterProps = {
  currencyInfo: ICurrencyInfo;
  onUpdate: (_: ICurrencyInfo) => void;
};

export type HeaderProps = {
  currencyRates: ICurrency[];
};

export type getConvertedValueProps = {
  currency1: ICurrencyInfo;
  currency2: ICurrencyInfo;
  currencyRates: ICurrency[];
};
