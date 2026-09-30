import React, { useEffect, useRef, useState } from 'react'

import coffeeLogo from '../../resources/img/icons/coffee-logo.svg';
import search from '../../resources/img/icons/search.svg';
import cart from '../../resources/img/icons/cart.svg';

import products from '../../data/products';

import './header.scss';
function Header({ onSearch, cartCount, onCartOpen, onProductSelect }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const searchRef = useRef(null);

    const trimmedQuery = query.trim().toLowerCase();
    const matches = trimmedQuery
        ? products.filter((product) => product.name.toLowerCase().includes(trimmedQuery))
        : [];

    const handleInput = (value) => {
        setQuery(value);
        onSearch(value);
    };

    const toggleSearch = () => {
        setIsSearchOpen((isOpen) => {
            if (isOpen) {
                handleInput('');
            }
            return !isOpen;
        });
    };

    useEffect(() => {
        if (!isSearchOpen) {
            return;
        }
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsSearchOpen(false);
                handleInput('');
            }
        };
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsSearchOpen(false);
                handleInput('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isSearchOpen]);

    return (
        <div className='header container'>
            <div className="coffee-icon">
                <img src={coffeeLogo} alt="coffee-icon" />
            </div>
            <div className='header__wrapper'>
            <ul className="header__nav">
                <li className="header__link">
                   <a href="#" data-text="Home">Home</a>
                </li>
                <li className="header__link">
                   <a href="#" data-text="About Us">About Us</a>
                </li>
                <li className="header__link">
                   <a href="#" data-text="Menu">Menu</a>
                </li>
                <li className="header__link">
                   <a href="#" data-text="Review">Review</a>
                </li>
                <li className="header__link">
                   <a href="#" data-text="Contact">Contact</a>
                </li>
            </ul>
            <div
                ref={searchRef}
                className={`header__search ${isSearchOpen ? 'header__search_active' : ''}`}
            >
                {isSearchOpen && (
                    <input
                        className="header__search-input"
                        type="text"
                        placeholder="Search coffee..."
                        autoFocus
                        value={query}
                        onChange={(e) => handleInput(e.target.value)}
                    />
                )}
                <button className="header__search-btn" onClick={toggleSearch} aria-label="search">
                    <img src={search} alt="search" />
                </button>
                {isSearchOpen && trimmedQuery && (
                    <div className="header__search-results">
                        {matches.length === 0 ? (
                            <p className="header__search-empty">Nothing found</p>
                        ) : (
                            matches.map((product) => (
                                <button
                                    className="header__search-item"
                                    key={product.id}
                                    onClick={() => {
                                        onProductSelect(product);
                                        setIsSearchOpen(false);
                                        handleInput('');
                                    }}
                                >
                                    <img src={product.img} alt={product.name} />
                                    <div className="header__search-item-info">
                                        <div className="header__search-item-name">{product.name}</div>
                                        <div className="header__search-item-price">$ {product.price.toFixed(2)}</div>
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                )}
            </div>
            <button className="header__cart" onClick={onCartOpen} aria-label="cart">
                <img src={cart} alt="cart" />
                {cartCount > 0 && <span key={cartCount} className="header__cart-badge">{cartCount}</span>}
            </button>
            </div>
        </div>
    )
}

export default Header;
