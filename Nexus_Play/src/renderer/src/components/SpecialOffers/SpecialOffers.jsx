import "./SpecialOffers.css";
import pic from "../../assets/horizonForbiddenWest.jpg";

export default function SpecialOffers() {

    return (
        <div className="specialOfferParent">
            <div className="game">
                <img src={pic} alt="first game"></img>
                <div className="overlaySale">
                    <h4>Name of Game</h4>
                    <p>Creator of game</p>
                    <article>Price/Sale Price</article>
                </div>
            </div>

            <div className="game">
                <img src={pic} alt="second game"></img>
                <div className="overlaySale">
                    <h4>Name of Game</h4>
                    <p>Creator of game</p>
                    <article>Price/Sale Price</article>
                </div>
            </div>  

            <div className="game">
            <div className="gameSmall">
                <img src={pic} alt="third game"></img>
                <div className="overlaySale">
                    <h4>Name of Game</h4>
                    <p>Creator of game</p>
                    <article>Price/Sale Price</article>
                </div>
            </div>  

            <div className="gameSmall">
                <img src={pic} alt="fourth game"></img>
                <div className="overlaySale">
                    <h4>Name of Game</h4>
                    <p>Creator of game</p>
                    <article>Price/Sale Price</article>
                </div>
            </div>
            </div>
        </div>
    )
}