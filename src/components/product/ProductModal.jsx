import React, { useEffect, useState } from 'react'

import { QuantityInput } from '../offer/Offer';

import './productModal.scss';

function ProductModal({ product, onClose, onAddToCart }) {
    const [qty, setQty] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleAdd = () => {
        onAddToCart(product.id, qty);
        setIsAdded(true);
        setTimeout(onClose, 900);
    };

    return (
        <div className="product-modal__overlay" onClick={onClose}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
                <button className="product-modal__close" onClick={onClose} aria-label="close">×</button>
                <div className="product-modal__img">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="product-modal__info">
                    <h2 className="product-modal__name">{product.name}</h2>
                    <div className="product-modal__price">$ {product.price.toFixed(2)}</div>
                    <p className="product-modal__details">{product.details}</p>
                    <ul className="product-modal__specs">
                        <li>
                            <span>Country</span>
                            <span>{product.country}</span>
                        </li>
                        <li>
                            <span>Roast</span>
                            <span>{product.roast}</span>
                        </li>
                        <li>
                            <span>Weight</span>
                            <span>{product.weight}</span>
                        </li>
                    </ul>
                    <div className="product-modal__actions">
                        <QuantityInput value={qty} onChange={setQty} />
                        <button
                            className={`product-modal__btn ${isAdded ? 'product-modal__btn_added' : ''}`}
                            onClick={handleAdd}
                            disabled={isAdded}
                        >
                            {isAdded ? 'Added ✓' : 'Get Delivery'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
