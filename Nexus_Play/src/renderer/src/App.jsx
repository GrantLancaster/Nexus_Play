// REACT IMPORTST------------------------------


// COMPONENT IMPORTS---------------------------
import Header from "./components/Header/Header.jsx";
// import Categories from "./components/Categories/Categories.jsx";
// import HomePage from "./components/HomePage/HomePage.jsx";
import Featured from "./components/Featured/Featured.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";


export default function App() {
  //Still need colors for the header buttons
  return (
    <>
      {/* Background Overlay */}
      <div className="overlay"></div>

      <HomePage />
    </>
    
  )
}
