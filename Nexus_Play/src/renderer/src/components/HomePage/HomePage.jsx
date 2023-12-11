import "./HomePage.css";
import Featured from "../Featured/Featured.jsx";

import Categories from "../Categories/Categories.jsx";
import SpecialOffers from "../SpecialOffers/SpecialOffers.jsx";
import Genre from "../Genre/Genre.jsx";

// import SpecialOffers from "../SpecialOffers/SpecialOffers.jsx";


export default function HomePage() {
    return (
        <div>
           
            <div className='p-primary'>
                {/* <Categories /> */}
                <Featured className="h-featured"/>

            </div>
        </div>
    )
}