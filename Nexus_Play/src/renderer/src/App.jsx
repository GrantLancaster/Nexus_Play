import "./Output.css"; 

// REACT IMPORTST------------------------------


// COMPONENT IMPORTS---------------------------
import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";


export default function App() {
  //STill need colors for the header buttons
  return (
    <>
    <Header /> 
    <div className="mainPage">
    <Categories />
    <HomePage />
    </div>
    </>
  )
}
