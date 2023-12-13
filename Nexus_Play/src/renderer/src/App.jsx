
import "./App.css";

// REACT IMPORTST------------------------------


// COMPONENT IMPORTS---------------------------

// import Categories from "./components/Categories/Categories.jsx";
// import HomePage from "./components/HomePage/HomePage.jsx";
import Featured from "./components/Featured/Featured.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers.jsx";
<<<<<<< Updated upstream
import Header from "./components/Header/Header.jsx";
=======
import { useState, useEffect } from "react";
import Genre from "./components/Genre/Genre.jsx";

>>>>>>> Stashed changes

export default function App() {
  
  //Still need colors for the header buttons
  return (
    <>
      {/* Background Overlay */}
      <div className="overlay"></div>
<<<<<<< Updated upstream

      <HomePage />

=======
      <Header Page={Page} UpdatePage={UpdatePage} />
      {Page}
      <Genre></Genre>
>>>>>>> Stashed changes
    </>
    
  )
}
