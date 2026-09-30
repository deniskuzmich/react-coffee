import React, { useEffect, useState } from 'react'

import './offer.scss';

import products from '../../data/products';

export function QuantityInput({ value, onChange }) {
    const [text, setText] = useState(String(value));

    useEffect(() => {
        setText(String(value));
    }, [value]);

    const clamp = (numb) => Math.min(99, Math.max(1, numb));

    const handleInput = (raw) => {
        setText(raw);
        if (/^\d+$/.test(raw)) {
            onChange(clamp(parseInt(raw, 10)));
        }
    };

    const handleBlur = () => {
        setText(String(value));
    };

    return (
        <div className="offer__calc">
            <button
                className="offer__calc-btn"
                onClick={() => onChange(clamp(value - 1))}
                aria-label="decrease quantity"
            >
                −
            </button>
            <input
                className="offer__calc-numb"
                type="text"
                inputMode="numeric"
                value={text}
                onChange={(e) => handleInput(e.target.value)}
                onBlur={handleBlur}
                aria-label="quantity"
            />
            <button
                className="offer__calc-btn"
                onClick={() => onChange(clamp(value + 1))}
                aria-label="increase quantity"
            >
                +
            </button>
        </div>
    );
}

function Offer({ searchValue = '', onAddToCart }) {
    const [quantities, setQuantities] = useState({});
    const [flying, setFlying] = useState([]);
    const [addedId, setAddedId] = useState(null);

    const setQuantity = (id) => (numb) => {
        setQuantities((prev) => ({ ...prev, [id]: numb }));
    };

    const handleAdd = (e, product) => {
        onAddToCart(product.id, quantities[product.id] ?? 1);
        setQuantities((prev) => ({ ...prev, [product.id]: 1 }));

        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 1000);

        const cartEl = document.querySelector('.header__cart');
        if (cartEl) {
            const from = e.currentTarget.getBoundingClientRect();
            const to = cartEl.getBoundingClientRect();
            const flyId = Date.now() + Math.random();
            setFlying((prev) => [
                ...prev,
                {
                    id: flyId,
                    img: product.img,
                    left: from.left + from.width / 2 - 30,
                    top: from.top - 60,
                    dx: to.left + to.width / 2 - (from.left + from.width / 2),
                    dy: to.top + to.height / 2 - (from.top - 30),
                },
            ]);
        }
    };

    const removeFlying = (flyId) => {
        setFlying((prev) => prev.filter((item) => item.id !== flyId));
    };

    const visibleProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    return (
        <div className='offer container'>
            <h2 className='offer__title'>That is Our Best Offer</h2>
            <p className="offer__text">A coffee shop will help you to tell the audience what your business.</p>
            <div className="offer__wrapper">
                {visibleProducts.length === 0 ? (
                    <p className="offer__empty">Nothing found for "{searchValue}"</p>
                ) : (
                    visibleProducts.map((product) => (
                        <div className="offer__coffee" key={product.id}>
                            <div className="offer__img">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className="offer__price">$ {product.price}</div>
                            <div className="offer__name">{product.name}</div>
                            <div className="offer__descr">{product.descr}</div>
                            <div className="offer__buttons">
                                <QuantityInput
                                    value={quantities[product.id] ?? 1}
                                    onChange={setQuantity(product.id)}
                                />
                                <button
                                    className={`offer__btn ${addedId === product.id ? 'offer__btn_added' : ''}`}
                                    onClick={(e) => handleAdd(e, product)}
                                >
                                    {addedId === product.id ? 'Added ✓' : 'Get Delivery'}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {flying.map((item) => (
                <img
                    key={item.id}
                    className="offer__fly-img"
                    src={item.img}
                    alt=""
                    style={{
                        left: item.left,
                        top: item.top,
                        '--fly-x': `${item.dx}px`,
                        '--fly-y': `${item.dy}px`,
                    }}
                    onAnimationEnd={() => removeFlying(item.id)}
                />
            ))}
        </div>
    )
}

export default Offer
