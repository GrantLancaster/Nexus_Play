import "./SpecialOffers.css";
import useFetchGames from "../../Api.jsx";
import { Offertag, GenerateRandomPrice, Ratingtag } from "../Tags/Tags.jsx";



export default function SpecialOffers() {
    const { games, loading, error } = useFetchGames();

    return (
        <div className="specialOfferParent">
            {games.length > 0 && (
                <div key={games[5].id} className="w-full flex">
                <div className="game" style={{ backgroundImage: `url(${games[3].background_image})` }}>
                    <div className="overlaySale">
                        <h4>{games[3].name}</h4>
                        <Offertag />
                        <article><GenerateRandomPrice /></article>
                    </div>
                </div>
            
                <div className="game" style={{ backgroundImage: `url(${games[4].background_image})` }}>
                    <div className="overlaySale">
                        <h4>{games[4].name}</h4>
                        <Offertag />
                        <article><GenerateRandomPrice /></article>
                    </div>
                </div>  
            
                <div className="game">
                <div className="gameSmall" style={{ backgroundImage: `url(${games[5].background_image})` }}>
                    <div className="overlaySale">
                        <h4>{games[5].name}</h4>
                        <Offertag />
                        <article><GenerateRandomPrice /></article>
                    </div>
                </div>  
            
                <div className="gameSmall" style={{ backgroundImage: `url(${games[6].background_image})` }}>
                    <div className="overlaySale">
                        <h4>{games[6].name}</h4>
                        <Offertag />
                        <article><GenerateRandomPrice /></article>
                    </div>
                </div>
                </div>
                </div>
            )}
        </div>
    )
}