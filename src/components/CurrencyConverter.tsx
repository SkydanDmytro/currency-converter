import React, { useState, ChangeEvent } from 'react'
import { CurrencyConverterProps, } from '../types/types'
// import { getExchangeRates } from '../utils/utils'
import "../styles/CurrencyConverter.style.scss"



const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ currencyInfo, onUpdate }) => {

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
        <div className='converter'>
            <label className='converter-label'>
                Amount:
                <input className='converter-label-input' value={currencyInfo.amount} onChange={handleInputChange} />
            </label>
            <label className='converter-label'>
                <select className='converter-label-select' value={currencyInfo.currencyCode} onChange={handleSelectChange}>
                    <option className='converter-label-select-option' value="UAH">UAH</option>
                    <option className='converter-label-select-option' value="USD">USD</option>
                    <option className='converter-label-select-option' value="EUR">EUR</option>
                </select>
            </label>
        </div>
    );
}
export default CurrencyConverter;

