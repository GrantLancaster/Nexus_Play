import "./App.css";
// REACT IMPORTST------------------------------


// COMPONENT IMPORTS---------------------------
import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers.jsx";


export default function App() {



  return (
    <>
    <Header /> 
    <div className="bodyParent">
    <Categories />
    <SpecialOffers />
    </div>
    </>
  )
}
