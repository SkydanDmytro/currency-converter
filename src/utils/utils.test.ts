import { getConvertedValueProps } from "../types/types";
import { getConvertedValue } from "./utils";

describe("getConvertedValue", () => {
  const currency1 = { currencyCode: "UAH", amount: 38.74 };
  const currency2 = { currencyCode: "EUR", amount: 1 };
  const currency3 = { currencyCode: "USD", amount: 1 };
  const currencyRates = [
    { cc: "USD", rate: 36.57 },
    { cc: "EUR", rate: 38.74 },
    { cc: "UAH", rate: 1 },
  ];

  const props: getConvertedValueProps = {
    currency1,
    currency2,
    currencyRates,
  };

  const props2: getConvertedValueProps = {
    currency1: currency2,
    currency2: currency3,
    currencyRates,
  };

  it("should return 1 if currencyRate1 or currencyRate2 is undefined", () => {
    const convertedValue = getConvertedValue({
      ...props,
      currencyRates: [],
    });

    expect(convertedValue).toEqual(1);
  });

  it("should return converted value case1", () => {
    const convertedValue = getConvertedValue(props);

    expect(Math.round(convertedValue)).toEqual(1);
  });

  it("should return converted value case2", () => {
    const convertedValue = getConvertedValue(props2);

    expect(Number(convertedValue.toFixed(2))).toEqual(1.06);
  });
});
