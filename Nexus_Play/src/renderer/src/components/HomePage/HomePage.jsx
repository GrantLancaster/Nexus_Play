import "./HomePage.css";
import Featured from "../Featured/Featured.jsx";
import Header from "../Header/Header.jsx";
import Categories from "../Categories/Categories.jsx";
// import SpecialOffers from "../SpecialOffers/SpecialOffers.jsx";


export default function HomePage() {
    return (
        <div>
            <Header />
            <div className='p-primary flex flex-row justify-between'>
                <Categories />
                <Featured />
            </div>
        </div>
    )
}