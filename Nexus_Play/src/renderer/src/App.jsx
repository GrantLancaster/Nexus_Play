
import "./App.css";

import { Link, Switch, Route } from 'wouter';

// REACT IMPORTST------------------------------


// COMPONENT IMPORTS---------------------------
import Header from "./components/Header/Header.jsx";
// import Categories from "./components/Categories/Categories.jsx";
// import HomePage from "./components/HomePage/HomePage.jsx";
import Featured from "./components/Featured/Featured.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import CartPage from "./components/CartPage/CartPage.jsx";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers.jsx";
import { useState, useEffect } from "react";


export default function App() {
  const [Page, UpdatePage] = useState(<HomePage />)

  //Still need colors for the header buttons
  return (
    <>
      {/* Background Overlay */}
      <div className="overlay"></div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/payments" />
      </Switch>
    </>
    
  )
}
