import React, { useState } from "react";

import MainPage from "../mainPage/MainPage";
import Header from '../header/Header';
import Offer from "../offer/Offer";
import Gallery from "../gallery/Gallery";
import Contacts from "../contacts/Contacts";
import News from "../news/News";
import Footer from "../footer/Footer";
import CartModal from "../cart/CartModal";
import OrderPlacedModal from "../cart/OrderPlacedModal";
import ProductModal from "../product/ProductModal";

import products from "../../data/products";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (id, qty) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: Math.min(99, item.qty + qty) } : item
        );
      }
      return [...prev, { id, qty }];
    });
  };

  const updateCartQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
    setIsCartOpen(false);
    setIsOrderPlaced(true);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const cartItems = cart.map((item) => ({
    product: products.find((product) => product.id === item.id),
    qty: item.qty,
  }));

  return (
    <div className="app">
          <div className="header__nav">
              <Header
                onSearch={setSearchValue}
                cartCount={cartCount}
                onCartOpen={() => setIsCartOpen(true)}
                onProductSelect={setSelectedProduct}
              />
          </div>
            <MainPage />
            <Offer searchValue={searchValue} onAddToCart={addToCart} />
            <Gallery />
            <Contacts />
            <News />
            <Footer />
            {isCartOpen && (
              <CartModal
                items={cartItems}
                onClose={() => setIsCartOpen(false)}
                onUpdateQty={updateCartQty}
                onRemove={removeFromCart}
                onCheckout={checkout}
              />
            )}
            {isOrderPlaced && (
              <OrderPlacedModal onClose={() => setIsOrderPlaced(false)} />
            )}
            {selectedProduct && (
              <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onAddToCart={addToCart}
              />
            )}
        </div>
  );
}

export default App;
