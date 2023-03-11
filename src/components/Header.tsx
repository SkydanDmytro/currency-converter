import React from 'react'
import { HeaderProps } from '../types/types';
import "../styles/Header.style.scss";

const Header: React.FC<HeaderProps> = ({ currencyRates }) => {
  return (
    <div className='header'>
      <h1 className='header__text'>Currency Converter</h1>
      <p className='header__text'>Current Exchange Rates:</p>
      {currencyRates.map(({ cc, rate }) => (
        cc !== "UAH" &&
        <p className='header__text' key={cc}>
          {"1 " + cc} = {rate} UAH
        </p>

      ))}
    </div>
  );
};

export default Header;