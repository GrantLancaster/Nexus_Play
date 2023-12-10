import "./Featured.css";

import useFetchGames from "../../Api";

import { Offertag, GenerateRandomPrice, Ratingtag } from "../Tags/tags";

import { Button } from "../Button";


import { library } from "@fortawesome/fontawesome-svg-core";

import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faMoneyBill, faCartShopping);

export default function Featured() {

    const { games, gameDesc, loading, error } = useFetchGames();

    const col1Class = "rounded-lg bg-black text-white row-span-3 flex flex-row col-span-3";

    const col2Class = "rounded-lg bg-black/70 text-white flex flex-row items-center px-5 col-span-2";
    
    return(
        <div className="grid grid-cols-5 grid-flow-col col-end-3 gap-6 h-featured feature-main">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {/* First Element */}
            {games.length > 0 && (
                <div className={col1Class} style={{ backgroundImage: `url(${games[0].background_image})`}}>
                    <div className="flex flex-row items-end justify-between px-12 py-6 w-full h-full bg-gradient-to-t from-black/90 from-40% to-black/00">
                        <div className="flex flex-col w-4/5">
                            <h2 className="text-3xl font-semibold mb-4">{games[0].name}</h2>
                            <p className="line-clamp-2 w-4/5 mb-4">{gameDesc.description}</p>
                            <div className="mb-2 w-fit">
                                <Ratingtag />
                            </div>
                            <div className="flex flex-row items-center w-fit">                          
                                <div className="text-xl text-green-400 font-semibold mr-10">
                                    <GenerateRandomPrice />
                                </div>
                                <Offertag />
                            </div>
                        </div>
                        <Button label="Buy Now" className="primary-button py-3 px-4 rounded-md flex flex-row items-center text-2xl font-medium" icon="cart-shopping" />
                    </div>
                </div>
            )}

            {/* Other Elements */}
            {games.slice(1,4).map((game) => (
                    <div key={game.id} className={col2Class}>
                        <div>
                            <img src={game.background_image} className="grid-image rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-between h-fit ml-5 w-full">
                            <h2 className="text-2xl font-semibold mb-4">{game.name}</h2>
                            <div className="flex flex-row items-center justify-between">
                                <Offertag />
                                <div className="text-xl text-green-400 font-semibold">
                                    <GenerateRandomPrice />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}