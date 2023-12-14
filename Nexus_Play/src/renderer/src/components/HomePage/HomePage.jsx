import "./HomePage.css";
import Featured from "../Featured/Featured.jsx";
import Header from "../Header/Header.jsx";
import Categories from "../Categories/Categories.jsx";
import SpecialOffers from "../SpecialOffers/SpecialOffers.jsx";
import GamePage from "../gamePage/GamePage.jsx";
// import SpecialOffers from "../SpecialOffers/SpecialOffers.jsx";


export default function HomePage() {
    return (
        <div>

            <div className='p-primary flex flex-row justify-between'>
                <Categories />
                <div className="flex flex-col w-88">
                    <Featured />
                    <SpecialOffers />

                </div>
            </div>
        </div>
    )
}