import React from 'react'

import './gallery.scss';

import couple_1 from '../../resources/img/gallery/couple_1.png';
import couple_2 from '../../resources/img/gallery/couple_2.png';
import couple_3 from '../../resources/img/gallery/couple_3.png';
import couple_4 from '../../resources/img/gallery/couple_4.png';
import couple_5 from '../../resources/img/gallery/couple_5.png';
import couple_6 from '../../resources/img/gallery/couple_6.png';


function Gallery() {
    return (
        <div className='gallery container'>
            <h2 className="gallery__title">Our Gallery</h2>
            <p className="gallery__subtitle">The coffee shop name generator is a great tool for those that are deliberating<br/> what to call their new coffee.</p>
            <div className="gallery__photos">
                <div className='gallery__img'>
                    <img src={couple_1} alt="" />
                </div>
                <div className='gallery__img'>
                    <img src={couple_2} alt="" />
                </div>
                <div className='gallery__img'>
                    <img src={couple_3} alt="" />
                </div>
                <div className='gallery__img'>
                    <img src={couple_4} alt="" />
                </div>
                <div className='gallery__img absolute'>
                    <img src={couple_5} alt="" />
                </div>
                <div className='gallery__img'>
                    <img src={couple_6} alt="" />
                </div>
            </div>
            <div className="gallery__load-btn">
                <hr className="gallery__hr" />
                <button className='gallery__btn'>LOAD MORE</button>
                <hr className="gallery__hr" />
            </div>
        </div>
    )
}

export default Gallery
