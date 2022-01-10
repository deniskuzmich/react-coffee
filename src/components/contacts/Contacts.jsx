import React from "react";

import "./contacts.scss";

import phone from '../../resources/img/icons/phone.svg';
import gmail from '../../resources/img/icons/gmail.svg';
import twitter from '../../resources/img/icons/twitter.svg';
import facebook from '../../resources/img/icons/facebook.svg';
import insta from '../../resources/img/icons/insta.svg';
import linked from '../../resources/img/icons/linked.svg';

function Contacts() {
  return (
    <div className="contacts">
        <div className="contacts__wrapper">
      <h3 className="contacts__text">Follow US</h3>
      <hr className="contacts__hr" />
      <h2 className="contacts__title">
        Have an inquiry?<br /> 
        Text or call and ask Something.
      </h2>
      <div className="contacts__phone">
        <img src={phone} alt="" />
        <a className="contacts__phone-number" href="#" type="number">+8801742-527137</a>
      </div>
      <div className="contacts__email">
      <img src={gmail} alt="" />
        <a className="contacts__email-link" href="#" type="email">mdmaksedur17@gmail.com</a>
      </div>
      <div className="contacts__messagers">
          <ul className="contacts__links">
              <li className="contacts__link">
                  <a href="#">
                      <img src={twitter} alt="twitter" />
                  </a>
              </li>
              <li className="contacts__link">
                  <a href="#">
                      <img src={facebook} alt="facebook" />
                  </a>
              </li>
              <li className="contacts__link">
                  <a href="#">
                      <img src={insta} alt="insta" />
                  </a>
              </li>
              <li className="contacts__link">
                  <a href="#">
                      <img src={linked} alt="linked" />
                  </a>
              </li>
          </ul>
      </div>
      </div>
    </div>
  );
}

export default Contacts;
