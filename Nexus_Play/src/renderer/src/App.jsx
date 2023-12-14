
import "./App.css";

import { Switch, Route } from 'wouter';

// REACT IMPORTST------------------------------


// COMPONENT IMPORTS---------------------------
import Header from "./components/Header/Header.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";

import SpecialOffers from "./components/SpecialOffers/SpecialOffers.jsx";
import { useState } from "react";

import CartPage from "./components/CartPage/CartPage.jsx";
import PaymentPage from "./components/PaymentPage/PaymentPage.jsx";
import SuccessPage from "./components/SuccessPage/SuccessPage.jsx";



export default function App() {
  //Still need colors for the header buttons
  return (
    <>
      {/* Background Overlay */}
      <div className="overlay"></div>
      <Header />

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/payments" component={PaymentPage} />
        <Route path="/paymentSuccess" component={SuccessPage} />
      </Switch>

    </>
    
  )
}
