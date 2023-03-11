import { getConvertedValueProps, ICurrency } from "../types/types";

export const getExchangeRatesToUAH = async (onChange: any) => {
  fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    .then((response) => response.json())
    .then((data) => {
      const currencyList = data
        .filter(
          (currency: ICurrency) =>
            currency.cc === "USD" || currency.cc === "EUR"
        )
        .map((currency: ICurrency) => ({
          cc: currency.cc,
          rate: currency.rate.toFixed(2),
        }));
      currencyList.push({ cc: "UAH", rate: 1 });
      onChange(currencyList);
    });
};

export const getConvertedValue = (props: getConvertedValueProps): number => {
  const currencyCode1 = props.currency1.currencyCode;
  const currencyRate1 = props.currencyRates.find(
    (item) => item.cc === currencyCode1
  )?.rate;
  const currencyCode2 = props.currency2.currencyCode;
  const currencyRate2 = props.currencyRates.find(
    (item) => item.cc === currencyCode2
  )?.rate;

  return currencyRate1 && currencyRate2
    ? (currencyRate1 / currencyRate2) * props.currency1.amount
    : 1;
};
