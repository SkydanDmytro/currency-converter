import React, { ChangeEvent } from 'react'
import { CurrencySelectorProps, } from '../types/types'
import "../styles/CurrencySelector.style.scss"

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ currencyInfo, onUpdate, currencyRates }) => {

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onUpdate({
			...currencyInfo,
			amount: Number(event.target.value),
		})
	}
	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		onUpdate({
			...currencyInfo,
			currencyCode: event.target.value,
		})
	}

	return (
		<div className='selector'>
			<label className='selector__label'>
				Amount:
				<input className='selector__input' value={currencyInfo.amount} onChange={handleInputChange} />
			</label>
			<label className='selector__label'>
				<select className='selector__select' value={currencyInfo.currencyCode} onChange={handleSelectChange}>
					{
						currencyRates.map((currency) => {
							return <option key={currency.cc} className='selector__select-option' value={currency.cc}>{currency.cc}</option>
						})
					}
				</select>
			</label>
		</div>
	);
}
export default CurrencySelector;

