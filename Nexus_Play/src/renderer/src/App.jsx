
import "./App.css";

// REACT IMPORTST------------------------------


// COMPONENT IMPORTS---------------------------
import Header from "./components/Header/Header.jsx";
// import Categories from "./components/Categories/Categories.jsx";
// import HomePage from "./components/HomePage/HomePage.jsx";
import Featured from "./components/Featured/Featured.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers.jsx";
import { useState, useEffect } from "react";


export default function App() {
  const [Page, UpdatePage] = useState(<HomePage />)

  //Still need colors for the header buttons
  return (
    <>
      {/* Background Overlay */}
      <div className="overlay"></div>
      <Header Page={Page} UpdatePage={UpdatePage} />
      {Page}
    </>
    
  )
}
