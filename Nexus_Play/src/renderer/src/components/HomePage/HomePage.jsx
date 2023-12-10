import "./HomePage.css";
import Featured from "../Featured/Featured.jsx";
import Header from "../Header/Header.jsx";
import Categories from "../Categories/Categories.jsx";
import SpecialOffers from "../SpecialOffers/SpecialOffers.jsx";
// import SpecialOffers from "../SpecialOffers/SpecialOffers.jsx";


export default function HomePage() {
    return (
        <div>
            <div className='p-primary flex flex-row justify-center'>
                <Categories />
                <div className="m-0 p-0 w-full">
                    <Featured className="h-featured"/>
                    <SpecialOffers />
                </div>

            </div>
        </div>
    )
}