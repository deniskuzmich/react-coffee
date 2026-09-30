import React, { useEffect } from 'react'

import './orderPlacedModal.scss';

function OrderPlacedModal({ onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="order-placed__overlay" onClick={onClose}>
            <div className="order-placed" onClick={(e) => e.stopPropagation()}>
                <svg className="order-placed__icon" viewBox="0 0 52 52">
                    <circle className="order-placed__circle" cx="26" cy="26" r="24" fill="none" />
                    <path className="order-placed__check" fill="none" d="M14 27l8 8 16-17" />
                </svg>
                <h2 className="order-placed__title">Order placed!</h2>
                <p className="order-placed__text">Thank you for your order. We will deliver your coffee soon.</p>
            </div>
        </div>
    );
}

export default OrderPlacedModal;
