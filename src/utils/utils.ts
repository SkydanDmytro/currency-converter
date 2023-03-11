import { ICurrency, ICurrencyInfo } from "../types/types";

export const getExchangeRatesToUAH = async (
  onChange: (_: ICurrency[]) => void
) => {
  fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    .then((response) => response.json())
    .then((data: ICurrency[]) => {
      const currencyList = data
        .filter((currency) => currency.cc === "USD" || currency.cc === "EUR")
        .map((currency) => ({
          cc: currency.cc,
          rate: Number(currency.rate.toFixed(2)),
        }));
      currencyList.push({ cc: "UAH", rate: 1 });
      onChange(currencyList);
    });
};
/**
 * Calculate the amount of currency at the rate
 *
 * @param currencyFrom starting currency
 * @param currencyTo final currency
 * @param currencyRates Rate
 * @returns Amount in final currency
 */
export const getConvertedValue = (
  currencyFrom: ICurrencyInfo,
  currencyTo: ICurrencyInfo,
  currencyRates: ICurrency[]
): number => {
  const currencyCode1 = currencyFrom.currencyCode;
  const currencyRate1 = currencyRates.find(
    (item) => item.cc === currencyCode1
  )?.rate;
  const currencyCode2 = currencyTo.currencyCode;
  const currencyRate2 = currencyRates.find(
    (item) => item.cc === currencyCode2
  )?.rate;

  return currencyRate1 && currencyRate2
    ? (currencyRate1 / currencyRate2) * currencyFrom.amount
    : 1;
};
