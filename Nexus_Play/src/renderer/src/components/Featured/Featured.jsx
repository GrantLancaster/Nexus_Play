import "./Featured.css";

export default function Featured() {
    
    return(
        <>
        <h4>Featured and Recommended</h4>
        <div className="bg-blue-300">
            <div className="featuredGame">
                <img src="" alt="game artwork"></img>
                <div className="overlay">
                    <h4>Name of Game</h4>
                    <p>Creator of game</p>
                    <article>Price/Sale Price</article>
                    <button>Click to View</button>
                </div>
            </div>

            <div className="imageGrid">
                <img src="" alt="Game 1"></img>
                <img src="" alt="Game 2"></img>
                <img src="" alt="Game 3"></img>
                <img src="" alt="Game 4"></img>
            </div>
        </div>
        </>
    )
}