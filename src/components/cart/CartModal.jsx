import React from 'react'

import { QuantityInput } from '../offer/Offer';

import './cartModal.scss';

function CartModal({ items, onClose, onUpdateQty, onRemove, onCheckout }) {
    const total = items.reduce((sum, { product, qty }) => sum + product.price * qty, 0);

    return (
        <div className="cart-modal__overlay" onClick={onClose}>
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                <div className="cart-modal__header">
                    <h2 className="cart-modal__title">Your Cart</h2>
                    <button className="cart-modal__close" onClick={onClose} aria-label="close cart">×</button>
                </div>
                {items.length === 0 ? (
                    <p className="cart-modal__empty">Your cart is empty</p>
                ) : (
                    <>
                        <ul className="cart-modal__list">
                            {items.map(({ product, qty }) => (
                                <li className="cart-modal__item" key={product.id}>
                                    <img className="cart-modal__img" src={product.img} alt={product.name} />
                                    <div className="cart-modal__info">
                                        <div className="cart-modal__name">{product.name}</div>
                                        <div className="cart-modal__price">$ {product.price.toFixed(2)}</div>
                                    </div>
                                    <QuantityInput
                                        value={qty}
                                        onChange={(numb) => onUpdateQty(product.id, numb)}
                                    />
                                    <div className="cart-modal__sum">$ {(product.price * qty).toFixed(2)}</div>
                                    <button
                                        className="cart-modal__remove"
                                        onClick={() => onRemove(product.id)}
                                        aria-label="remove item"
                                    >
                                        ×
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-modal__footer">
                            <div className="cart-modal__total">
                                Total: <span>$ {total.toFixed(2)}</span>
                            </div>
                            <button className="cart-modal__checkout" onClick={onCheckout}>Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartModal;
