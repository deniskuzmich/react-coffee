import React from "react";

import "./news.scss";
import couple_1 from "../../resources/img/news/couple_1.png";
import couple_2 from "../../resources/img/news/couple_2.png";
import couple_3 from "../../resources/img/news/couple_3.png";

function News() {
  return (
    <div className="news container">
      <h2 className="news__title">Update News</h2>
      <p className="news__subtitle">
        A cup of brewed coffee represents a contribution of up to 1.8 grams
        <br />
        of fiber of the recommended.
      </p>
      <div className="news__wrapper">
        <div className="news__item">
          <div className="news__item-img">
            <img src={couple_1} alt="couple" />
          </div>
          <div className="news__item-text">
            <div className="news__item-name">Coffe beans</div>
            <div className="news__item-descr">
              These advertising mottos are targeted to the 56% of coffee
              drinking consumers.
            </div>
            <div className="news__item-link">
              <a href="#">Learn More </a>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>
        <div className="news__item">
          <div className="news__item-img">
            <img src={couple_2} alt="couple" />
          </div>
          <div className="news__item-text">
            <div className="news__item-name">Coffe beans</div>
            <div className="news__item-descr">
              These advertising mottos are targeted to the 56% of coffee
              drinking consumers.
            </div>
            <div className="news__item-link">
              <a href="#">Learn More </a>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>
        <div className="news__item">
          <div className="news__item-img">
            <img src={couple_3} alt="couple" />
          </div>
          <div className="news__item-text">
            <div className="news__item-name">Coffe beans</div>
            <div className="news__item-descr">
              These advertising mottos are targeted to the 56% of coffee
              drinking consumers.
            </div>
            <div className="news__item-link">
              <a href="#">Learn More </a>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
