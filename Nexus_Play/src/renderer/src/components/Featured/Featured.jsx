import "./Featured.css";

import useFetchGames from "../../Api";

import { Offertag, GenerateRandomPrice } from "../Tags/tags";

export default function Featured() {

    const { games, loading, error } = useFetchGames();

    const col1Class = "rounded-lg bg-blue-500 row-span-3 flex flex-row col-span-3";

    const col2Class = "rounded-lg bg-black/70 text-white flex flex-row items-center px-5 col-span-2"
    
    return(
        <div className="grid grid-cols-5 grid-flow-col col-end-3 gap-6 h-featured">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {games.slice(0,4).map((game, index) => (
                    <div key={game.id} className={index === 0 ? col1Class : col2Class}>
                        <div>
                            <img src={game.background_image} className="grid-image rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-between h-fit ml-5 w-full">
                            <h2 className="text-2xl font-semibold mb-4">{game.name}</h2>
                            <div className="flex flex-row items-center justify-between">
                                <Offertag />
                                <div className="text-xl ml-3 text-green-400 font-semibold">
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