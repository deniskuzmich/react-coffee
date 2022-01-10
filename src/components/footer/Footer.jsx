import React from "react";

import "./footer.scss";
import coffeeLogo from "../../resources/img/icons/coffee-logo.svg";
import phone from "../../resources/img/icons/phone.svg";
import twitter from "../../resources/img/icons/twitter.svg";
import facebook from "../../resources/img/icons/facebook.svg";
import insta from "../../resources/img/icons/insta.svg";
import linked from "../../resources/img/icons/linked.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__item">
          <div className="footer__logo">
            <img src={coffeeLogo} alt="" />
          </div>
          <div className="footer__descr">
            Creating a catchy tagline coffee shop business growth.
          </div>
          <div className="footer__phone">
            <img src={phone} alt="" />
            <a className="footer__phone-number" href="#" type="number">
              +8801742-527137
            </a>
          </div>
        </div>
        <div className="footer__item">
          <div className="footer__item-title">CATEGORIES</div>
          <ul className="footer__item-list">
            <li className="footer__item-text">Ashley Szekeres Art</li>
            <li className="footer__item-text">Merchandise</li>
            <li className="footer__item-text">Gift Certificates</li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__item-title">INFORMATION</div>
          <ul className="footer__item-list">
            <li className="footer__item-text">Coffee Beans</li>
            <li className="footer__item-text">Contact Us</li>
            <li className="footer__item-text">Blog</li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__item-title">FOLLOW US</div>
          <ul className="footer__item-links">
            <li className="footer__item-link">
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className="footer__item-link">
              <a href="#">
                <img src={facebook} alt="twitter" />
              </a>
            </li>
            <li className="footer__item-link">
              <a href="#">
                <img src={insta} alt="twitter" />
              </a>
            </li>
            <li className="footer__item-link">
              <a href="#">
                <img src={linked} alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer__hr" />
        <div className="footer__copyright">
          Copyright © 2021 Coffee, All rights reserved. Present by MoxCreative.
        </div>
    </footer>
  );
}

export default Footer;
