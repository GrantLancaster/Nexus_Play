import "./GamePage.css";

import {Button} from "../Button.jsx";
import useFetchGames from "../../Api.jsx";
import { Offertag, GenerateRandomPrice, Ratingtag } from "../Tags/Tags.jsx";

import steam from "../../assets/steam-logo.png";
import epic from "../../assets/Ubisoft-logo.png";
import ubisoft from "../../assets/epic-games-logo-black-and-white.png";
import profilePic from "../../assets/horizonforbiddenwest.jpg";




export default function GamePage() {
    const { games, gameDesc, loading, error } = useFetchGames();


    return(
        <>
            {games.length > 0 && (
                <div className = "gamePageParent" key={games[0].id}>
                    <h2 className="gameTitle">{games[0].name}</h2>
                    <div className="topBox">
                        <div className="gameImages m-2">
                            <img className="titleImage" src={games[0].background_image}></img>
                            <div className="carousel flex">
                                <img className="carouselImage" src={games[0]["short_screenshots"][1]["image"]}></img>
                                <img className="carouselImage" src={games[0]["short_screenshots"][2]["image"]}></img>
                                <img className="carouselImage" src={games[0]["short_screenshots"][3]["image"]}></img>
                                <img className="carouselImage" src={games[0]["short_screenshots"][4]["image"]}></img>
                                <img className="carouselImage" src={games[0]["short_screenshots"][3]["image"]}></img>
                                <img className="carouselImage" src={games[0]["short_screenshots"][3]["image"]}></img>
                                <img className="carouselImage" src={games[0]["short_screenshots"][3]["image"]}></img>
                            </div>
                        </div>

                        <div className="asideBar">
                                <Ratingtag />
                                <p className="text-white text-xl">Metacritic Score: {games[0]["metacritic"]}</p>
                            <div className="gameInformation">
                                <p className="text-slate-400 text-l">
                                    {gameDesc.description}
                                </p>
                            </div>
                            <div className="infoButtons">
                                <div className="text-2xl text-green-400 font-semibold mr-10">
                                    <GenerateRandomPrice />
                                </div>
                                <Button className="bg-lime-400 py-1 px-4 mx-1.5 rounded-md flex flex-row items-center text-xl font-medium" label="Add to Cart" navigation={"/cart"} />
                                <Button className="bg-blue-800 py-1 px-4 mx-1.5 rounded-md flex flex-row items-center text-xl font-medium" label="Wishlist" />
                            </div>
                        </div>
                    
                        <div className="reviewParent">
                            <h4 className="reviewTitle">Reviews</h4>
                            <div className="justForScroll">
                            <div className="reviewBox">
                                <img className="profilePic" src={profilePic}></img>
                                <Ratingtag />
                                <p className="reviewText text-white text-l">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, cum! Dolor dolore ullam ad harum exercitationem eum a fuga sed dolorem rem tempora et cumque atque maiores nihil, tenetur at.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ullam in, et accusantium fugit consequuntur veniam recusandae cupiditate dolorem laboriosam tempora dolorum blanditiis harum eligendi quisquam facilis quod doloribus necessitatibus!
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui nobis vitae ullam temporibus dicta hic ut vel dignissimos officia amet quia nulla asperiores aut, adipisci tempora dolorem facilis itaque?
                                </p>
                            </div>
                            <div className="reviewBox">
                                <img className="profilePic" src={profilePic}></img>
                                <Ratingtag />
                                <p className="reviewText text-white text-l">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, cum! Dolor dolore ullam ad harum exercitationem eum a fuga sed dolorem rem tempora et cumque atque maiores nihil, tenetur at.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ullam in, et accusantium fugit consequuntur veniam recusandae cupiditate dolorem laboriosam tempora dolorum blanditiis harum eligendi quisquam facilis quod doloribus necessitatibus!
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui nobis vitae ullam temporibus dicta hic ut vel dignissimos officia amet quia nulla asperiores aut, adipisci tempora dolorem facilis itaque?
                                </p>
                            </div>
                            <div className="reviewBox">
                                <img className="profilePic" src={profilePic}></img>
                                <Ratingtag />
                                <p className="reviewText text-white text-l">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, cum! Dolor dolore ullam ad harum exercitationem eum a fuga sed dolorem rem tempora et cumque atque maiores nihil, tenetur at.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ullam in, et accusantium fugit consequuntur veniam recusandae cupiditate dolorem laboriosam tempora dolorum blanditiis harum eligendi quisquam facilis quod doloribus necessitatibus!
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui nobis vitae ullam temporibus dicta hic ut vel dignissimos officia amet quia nulla asperiores aut, adipisci tempora dolorem facilis itaque?
                                </p>
                            </div>
                            <div className="reviewBox">
                                <img className="profilePic" src={profilePic}></img>
                                <Ratingtag />
                                <p className="reviewText text-white text-l">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, cum! Dolor dolore ullam ad harum exercitationem eum a fuga sed dolorem rem tempora et cumque atque maiores nihil, tenetur at.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ullam in, et accusantium fugit consequuntur veniam recusandae cupiditate dolorem laboriosam tempora dolorum blanditiis harum eligendi quisquam facilis quod doloribus necessitatibus!
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui nobis vitae ullam temporibus dicta hic ut vel dignissimos officia amet quia nulla asperiores aut, adipisci tempora dolorem facilis itaque?
                                </p>
                            </div>
                            </div>
                            </div>
                            <div className="platformParents">
                                <div className="platform">
                                    <img className="logos" src={steam}></img>
                                    <div className="details">
                                        <Offertag />
                                        <div className="text-2xl text-green-400 font-semibold mr-10">
                                            <GenerateRandomPrice />
                                        </div>                                        
                                        <Button className="platformButtons py-1 px-4 mx-1.5 rounded-md flex flex-row items-center text-xl font-medium"  label="Visit" />
                                    </div>                                </div>
                                <div className="platform">
                                    <img className="logos" src={epic}></img>
                                    <div className="details">
                                        <Offertag />
                                        <div className="text-2xl text-green-400 font-semibold mr-10">
                                            <GenerateRandomPrice />
                                        </div>                                        
                                        <Button className="platformButtons py-1 px-4 mx-1.5 rounded-md flex flex-row items-center text-xl font-medium"  label="Visit" />
                                    </div>                                </div>
                                <div className="platform">
                                    <img className="logos" src={ubisoft}></img>
                                    <div className="details">
                                        <Offertag />
                                        <div className="text-2xl text-green-400 font-semibold mr-10">
                                            <GenerateRandomPrice />
                                        </div>                                        
                                        <Button className="platformButtons py-1 px-4 mx-1.5 rounded-md flex flex-row items-center text-xl font-medium"  label="Visit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

            )}
        </> 
    )
}