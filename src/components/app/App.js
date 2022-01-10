import React from "react";

import MainPage from "../mainPage/MainPage";
import Header from '../header/Header';
import Offer from "../offer/Offer";
import Gallery from "../gallery/Gallery";
import Contacts from "../contacts/Contacts";
import News from "../news/News";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="app">
          <div className="header__nav">
              <Header />
          </div>
            <MainPage />
            <Offer />
            <Gallery />
            <Contacts />
            <News />
            <Footer />
        </div>
  );
}

export default App;
