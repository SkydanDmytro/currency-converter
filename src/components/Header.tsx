import React, { useEffect, useState } from 'react'
import { HeaderProps, ICurrency, IExchangeRate } from '../types/types';
import { getExchangeRatesToUAH } from '../utils/utils';
// import { getExchangeRates } from '../utils/utils';
import "../styles/Header.style.scss";




const Header: React.FC<HeaderProps> = ({ currencyRates }) => {


    return (
        <div className='header'>
            <h1 className='header-text header-header'>Currency Converter</h1>
            <p className='header-text'>Current Exchange Rates:</p>
            {currencyRates.map(({ cc, rate }) => (
                cc !== "UAH" &&
                <p className='header-text' key={cc}>
                    {"1 " + cc} = {rate} UAH
                </p>

            ))}
        </div>
    );
};

export default Header;