import React, { useEffect, useState } from 'react'
import { ICurrency, ICurrencyInfo, ICurrentCurrencies } from '../types/types'
import { getConvertedValue, getExchangeRatesToUAH } from '../utils/utils'
import CurrencyConverter from './CurrencyConverter'

import Header from './Header'
import "../styles/Main.style.scss"

export const Main: React.FC = () => {

    const [currencyRates, setCurrencyRates] = useState<ICurrency[]>([]);
    const [currencyInfoFrom, setCurrencyInfoFrom] = useState<ICurrencyInfo>({ amount: 1, currencyCode: "UAH" })
    const [currencyInfoTo, setCurrencyInfoTo] = useState<ICurrencyInfo>({ amount: 1, currencyCode: "USD" })

    const handleUpdate = (type: string) => (value: ICurrencyInfo): void => {
        if (type === "from") {
            setCurrencyInfoFrom(value)
            setCurrencyInfoTo({
                ...currencyInfoTo,
                amount: getConvertedValue({ currency1: value, currency2: currencyInfoTo, currencyRates: currencyRates })
            })
        }
        if (type === "to") {
            setCurrencyInfoTo(value)
            setCurrencyInfoFrom({
                ...currencyInfoFrom,
                amount: getConvertedValue({ currency1: value, currency2: currencyInfoFrom, currencyRates: currencyRates })
            })
        }

    }



    useEffect(() => {
        getExchangeRatesToUAH(setCurrencyRates)
    }, []);

    return (
        <div className='main'>
            <Header currencyRates={currencyRates} />
            <div className="main-converters">
                <CurrencyConverter currencyInfo={currencyInfoTo} onUpdate={handleUpdate("to")} />
                <CurrencyConverter currencyInfo={currencyInfoFrom} onUpdate={handleUpdate("from")} />
            </div>

        </div>
    )
}

export default Main;
