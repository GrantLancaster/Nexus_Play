

import useFetchGames from "../../Api";

import { Button } from "../Button";

import { GenerateRandomPrice, Ratingtag, StrikedPrice } from "../Tags/tags";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { faC, faTag } from "@fortawesome/free-solid-svg-icons";

import { faGift } from "@fortawesome/free-solid-svg-icons";

import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faHeart, faCircleXmark, faTag, faGift, faCreditCard, faCartPlus);

export default function CartPage() {

    const { games, loading, error } = useFetchGames();

    function RandomTax() {

        const taxInput =  Math.random() * (20 - 10) + 10;
        return (
            <>
                ${taxInput.toFixed(2)}
            </>
            );
    }

    return(
        <div className="text-white px-72 py-6">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="w-full background px-6 py-4 rounded-lg text-secondary">
                Store &gt; Multiplayer Games &gt; Cart
            </div>
           <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col pt-4 w-7/12">
                    <h2 className="text-4xl font-semibold mb-6">
                        Shopping Cart
                    </h2>
                    {games.slice(0,3).map((game) => (
                        <div key={game.id} className="flex flex-row justify-between p-4 border-b-2 border-stone-800">
                            <div className="flex flex-row">
                                <div>
                                    <img src={game.background_image} className="cart-image rounded-md" />
                                </div>
                                <div className="flex flex-col font-semibold ml-4 h-full justify-between py-2">
                                    <div className="text-2xl">{game.name}</div>
                                    <div> <StrikedPrice /> </div>
                                    <div className="text-xl text-green-500">
                                        <GenerateRandomPrice />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-evenly">
                                {/* If you want regular icons and not fill icons, use the below syntax */}

                                <Button className="wishlist-button flex flex-row items-center py-2 px-3 rounded text-sm text-left" icon={['far', 'heart']} label="Move to Wishlist" />

                                <Button className="remove-button flex flex-row items-center py-2 px-3 rounded text-sm text-left" icon={['far', 'circle-xmark']} label="Remove"/>

                            </div>
                        </div>
                    ))}
                    <Button className="wishlist-button flex flex-row items-center w-fit py-2 px-4 rounded-md my-4 ml-4" icon={['fas', 'cart-plus']} label="Add more games" />
                </div>
                <div className="flex flex-col w-5/12 h-2/3 pl-8">
                    <h3 className="text-2xl font-semibold py-2">Order Summary</h3>
                    <h4 className="text-xl py-2">Estimated Total:</h4>
                    <div className="flex flex-row justify-between py-1">
                        <div className="w-1/5 text-right">Sub Total:</div>
                        <div  className="w-1/5 text-left indent-1.5"> <GenerateRandomPrice /> </div>
                    </div>
                    <div className="flex flex-row justify-between py-1">
                        <div className="w-1/5 text-right">Discount:</div>
                        <div  className="w-1/5 text-left"> -<GenerateRandomPrice /> </div>
                    </div>
                    <div className="flex flex-row justify-between py-1">
                        <div className="w-1/5 text-right">Taxes:</div>
                        <div  className="w-1/5 text-left indent-1.5"> <RandomTax /> </div>
                    </div>
                    <div className="flex flex-row justify-between text-2xl py-1">
                        <div className="w-1/5 text-right">Total:</div>
                        <div className="w-1/5 text-left indent-1.5"> <GenerateRandomPrice /> </div>
                    </div>
                    <form className="flex flex-col w-fit">
                        <label className="my-3">Enter Promo Code:</label>
                        <div className="flex flex-row items-center">
                            <input id="promo" type="text" className="background py-2 px-4 rounded-md border-2 border-pink-800 mr-4" placeholder="XYZ1234" />
                            <Button className="primary-button w-fit py-2 px-4 rounded-md" icon={['fas', 'tag']} label="Apply" />   
                        </div>
                    </form>
                    <div className="flex flex-row my-6">
                        <Button className="payment-button flex flex-row items-center w-fit py-2 px-4 rounded-md mr-4" icon={['fas', 'gift']} label="Buying as a Gift" />
                        <Button className="payment-button flex flex-row items-center w-fit py-2 px-4 rounded-md" icon={['far', 'credit-card']} label="Continue to Payment" />
                    </div>
                </div>
           </div>
        </div>
    )
}