import React from 'react'

import './offer.scss';

import brazilian from '../../resources/img/goods/brazilian.png';
import vietnam from '../../resources/img/goods/vietnam.png';
import indonesian from '../../resources/img/goods/indonesian.png';

function Offer() {
    return (
        <div className='offer container'>
            <h2 className='offer__title'>That is Our Best Offer</h2>
            <p className="offer__text">A coffee shop will help you to tell the audience what your business.</p>
            <div className="offer__wrapper">
                <div className="offer__coffee">
                    <div className="offer__img">
                        <img src={brazilian} alt="" />
                    </div>
                    <div className="offer__price">$ 5.99</div>
                    <div className="offer__name">Brazilian coffee beans</div>
                    <div className="offer__descr">Coffee that's always you handle your own the way you like.</div>
                    <div className="offer__buttons">
                        <div className="offer__calc">
                            <span className='offer__calc-numb'>1</span>
                            <div className='offer__calc-operation'>
                                <button className='offer__calc-plus'>+</button>
                                <hr />
                                <button className='offer__calc-minus'>-</button>
                            </div>
                        </div>
                        <button className='offer__btn'>Get Delivery</button>
                    </div>
                </div>
                <div className="offer__coffee">
                    <div className="offer__img">
                        <img src={vietnam} alt="" />
                    </div>
                    <div className="offer__price">$ 5.99</div>
                    <div className="offer__name">Vietham coffee beans</div>
                    <div className="offer__descr">Coffee that's always you handle your own the way you like.</div>
                    <div className="offer__buttons">
                        <div className="offer__calc">
                            <span className='offer__calc-numb'>1</span>
                            <div className='offer__calc-operation'>
                                <button className='offer__calc-plus'>+</button>
                                <hr />
                                <button className='offer__calc-minus'>-</button>
                            </div>
                        </div>
                        <button className='offer__btn'>Get Delivery</button>
                    </div>
                </div>
                <div className="offer__coffee">
                    <div className="offer__img">
                        <img src={indonesian} alt="" />
                    </div>
                    <div className="offer__price">$ 5.99</div>
                    <div className="offer__name">indonesian coffee beans</div>
                    <div className="offer__descr">Coffee that's always you handle your own the way you like.</div>
                    <div className="offer__buttons">
                        <div className="offer__calc">
                            <span className='offer__calc-numb'>1</span>
                            <div className='offer__calc-operation'>
                                <button className='offer__calc-plus'>+</button>
                                <hr />
                                <button className='offer__calc-minus'>-</button>
                            </div>
                        </div>
                        <button className='offer__btn'>Get Delivery</button>
                    </div>
                </div>
                <div className="offer__coffee"></div>
                <div className="offer__coffee"></div>
            </div>
        </div>
    )
}

export default Offer
