import "./HomePage.css";
import Featured from "../Featured/Featured.jsx";
import SpecialOffers from "../SpecialOffers/SpecialOffers.jsx";


export default function HomePage() {
    return (
        <div className="homeParent">
            <Featured />
            <SpecialOffers />
        </div>
    )
}