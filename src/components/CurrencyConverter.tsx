import React, { useEffect, useState } from 'react'
import { ICurrency, ICurrencyInfo } from '../types/types'
import { getConvertedValue, getExchangeRatesToUAH } from '../utils/utils'
import Header from './Header'
import "../styles/CurrencyConverter.style.scss"
import CurrencySelector from './CurrencySelector'

export const CurrencyConverter: React.FC = () => {

	const [currencyRates, setCurrencyRates] = useState<ICurrency[]>([]);
	const [currencyInfoFrom, setCurrencyInfoFrom] = useState<ICurrencyInfo>({ amount: 1, currencyCode: "UAH" })
	const [currencyInfoTo, setCurrencyInfoTo] = useState<ICurrencyInfo>({ amount: 1, currencyCode: "USD" })

	const handleUpdate = (type: string) => (value: ICurrencyInfo): void => {
		if (type === "from") {
			setCurrencyInfoFrom(value)
			setCurrencyInfoTo({
				...currencyInfoTo,
				amount: getConvertedValue(value, currencyInfoTo, currencyRates)
			})
		}
		if (type === "to") {
			setCurrencyInfoTo(value)
			setCurrencyInfoFrom({
				...currencyInfoFrom,
				amount: getConvertedValue(value, currencyInfoFrom, currencyRates)
			})
		}
	}

	useEffect(() => {
		getExchangeRatesToUAH(setCurrencyRates)
	}, []);

	return (
		<div className='converter'>
			<Header currencyRates={currencyRates} />
			<div className="converter-selectors">
				<CurrencySelector currencyInfo={currencyInfoTo} onUpdate={handleUpdate("to")} currencyRates={currencyRates} />
				<CurrencySelector currencyInfo={currencyInfoFrom} onUpdate={handleUpdate("from")} currencyRates={currencyRates} />
			</div>
		</div>
	)
}

export default CurrencyConverter;
