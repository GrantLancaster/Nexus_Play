import useFetchGames from "../../Api";

import { Button } from "../Button";

import { GenerateRandomPrice, Ratingtag, StrikedPrice } from "../Tags/tags";

import { TextField, DropDown } from "../InputFields/InputFields";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { faTag } from "@fortawesome/free-solid-svg-icons";

import { faGift } from "@fortawesome/free-solid-svg-icons";

import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { faCcPaypal, faCcVisa, faCcDiscover, faCcMastercard, faCcAmex } from "@fortawesome/free-brands-svg-icons";

library.add(faHeart, faCircleXmark, faTag, faGift, faCreditCard, faCartPlus, faCcPaypal, faCcVisa, faCcDiscover, faCcMastercard, faCcAmex);

export default function PaymentPage() {

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
            <div className="w-full background px-6 py-4 rounded-lg text-secondary">
                Store &gt; Multiplayer Games &gt; Cart &gt; Payment Details
            </div>
            <div className="flex flex-row items-start justify-between pt-8">
                <div className="flex flex-col w-7/12">
                    <h2 className="text-4xl font-semibold mb-6">
                        Payment & Billing
                    </h2>
                    <form>
                        <div>
                            <h2 className="mb-4 text-xl font-semibold">Please select a Payment Method</h2>
                            <div className="flex flex-row">
                                <DropDown />
                                <div className="flex flex-row text-primary text-4xl ml-4 justify-between w-1/3">
                                    <FontAwesomeIcon icon={['fab', 'cc-paypal']} />
                                    <FontAwesomeIcon icon={['fab', 'cc-visa']} />
                                    <FontAwesomeIcon icon={['fab', 'cc-mastercard']} />
                                    <FontAwesomeIcon icon={['fab', 'cc-amex']} />
                                    <FontAwesomeIcon icon={['fab', 'cc-discover']} />
                                </div>
                            </div>
                            
                        </div>
                    </form>
                    
                    <Button className="payment-button flex flex-row items-center w-fit py-2 px-4 rounded-md my-4" icon={['fas', 'cart-plus']} label="Confirm Purchase" />
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
                        <div className="w-1/5 text-left"> -<GenerateRandomPrice /> </div>
                    </div>
                    <div className="flex flex-row justify-between py-1">
                        <div className="w-1/5 text-right">Taxes:</div>
                        <div className="w-1/5 text-left indent-1.5"> <RandomTax /> </div>
                    </div>
                    <div className="flex flex-row justify-between text-2xl py-1">
                        <div className="w-1/5 text-right">Total:</div>
                        <div className="w-1/5 text-left indent-1.5"> <GenerateRandomPrice /> </div>
                    </div>
                    <form className="flex flex-col w-fit">
                        <label className="my-3">Enter Promo Code:</label>
                        <div className="flex flex-row items-center">
                            <TextField id="promo" className="background py-2 px-4 rounded-md border-2 border-pink-800 mr-4" placeholder="XYZ1234" />
                            <Button className="primary-button w-fit py-2 px-4 rounded-md" icon={['fas', 'tag']} label="Apply" />   
                        </div>
                    </form>
                    <div className="flex flex-col my-6">
                        <h3>Total Items &#40;  &#41; </h3>
                        {games.slice(0,2).map((game) => (
                            <div key={game.id}>
                                <div  className="flex flex-row justify-between p-4 border-b-2 border-stone-800">
                                    <div className="flex flex-row items-center">
                                        <div>
                                            <img src={game.background_image} className="payment-image rounded-md" />
                                        </div>
                                        <div className="flex flex-col font-semibold ml-4 h-full justify-between py-2">
                                            <div className="text-xl">{game.name}</div>
                                            <div> <StrikedPrice /> </div>
                                            <div className="text-md text-green-500">
                                                <GenerateRandomPrice />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
           </div>
        </div>
        
    )
}