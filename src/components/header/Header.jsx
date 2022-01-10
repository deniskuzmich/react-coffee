import React from 'react'

import coffeeLogo from '../../resources/img/icons/coffee-logo.svg';
import search from '../../resources/img/icons/search.svg';
import cart from '../../resources/img/icons/cart.svg';

import './header.scss';
function Header() {
    return (
        <div className='header container'>
            <div className="coffee-icon">
                <img src={coffeeLogo} alt="coffee-icon" />
            </div>
            <div className='header__wrapper'>
            <ul className="header__nav">
                <li className="header__link">
                   <a href="#">Home</a>
                </li>
                <li className="header__link">
                   <a href="#">About Us</a> 
                </li>
                <li className="header__link">
                   <a href="#">Menu</a> 
                </li>
                <li className="header__link">
                   <a href="#">Review</a> 
                </li>
                <li className="header__link">
                   <a href="#">Contact</a>
                </li>
            </ul>
            <div className="header__search">
                <img src={search} alt="search" />
            </div>
            <div className="header__cart">
            <img src={cart} alt="cart" />
            </div>
            </div>
        </div>
    )
}

export default Header;
