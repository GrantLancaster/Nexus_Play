import useFetchGames from "../../Api";

import { Button } from "../Button";

import { GenerateRandomPrice, Ratingtag, StrikedPrice } from "../Tags/tags";

import { TextField, DropDown, CheckBox } from "../InputFields/InputFields";

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
        <div className="text-white px-20 py-6">
            <div className="w-full background px-6 py-4 rounded-lg text-secondary">
                Store &gt; Multiplayer Games &gt; Cart &gt; Payment Details
            </div>
            <div className="flex flex-row items-start justify-between pt-8">
                <div className="flex flex-col w-3/5">
                    <h2 className="text-4xl font-semibold">
                        Payment & Billing
                    </h2>
                    <form className="w-full">
                        <div>
                            <h3 className="text-2xl font-semibold my-6">
                                Payment Details
                            </h3>
                            <div>
                                <h2 className="mb-4 text-xl font-medium">Please select a Payment Method</h2>
                                <div className="flex flex-row items-center">
                                    <DropDown />
                                    <div className="flex flex-row text-white text-3xl ml-4 justify-between w-1/4">
                                        <FontAwesomeIcon icon={['fab', 'cc-paypal']} />
                                        <FontAwesomeIcon icon={['fab', 'cc-visa']} />
                                        <FontAwesomeIcon icon={['fab', 'cc-mastercard']} />
                                        <FontAwesomeIcon icon={['fab', 'cc-amex']} />
                                        <FontAwesomeIcon icon={['fab', 'cc-discover']} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between w-2/3 my-6">
                                <div className="flex flex-col">
                                    <label htmlFor="card-number" className="text-lg mb-3">Card Number:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="card-number" className="background py-2 px-4 rounded-md border-2 border-purple-800" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="card-name" className="text-lg mb-3">Cardholder Name:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="card-name" className="background py-2 px-4 rounded-md border-2 border-purple-800" placeholder="Jason Smith" />
                                </div>
                            </div>
                            <div className="flex flex-row w-2/3">
                                <div className="flex flex-col w-fit">
                                    <label htmlFor="card-month" className="text-lg mb-3">Expiry Date:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="card-month" className="background py-2 px-4 rounded-md border-2 border-purple-800 w-36 mr-12" placeholder="MM/YYYY" />
                                </div>
                                <div className="flex flex-col w-fit">
                                    <label htmlFor="card-cvv" className="text-lg mb-3">CVV/CVC:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="card-cvv" className="background py-2 px-4 rounded-md border-2 border-purple-800 w-24" placeholder="* * *" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold my-6">
                                Billing Address
                            </h3>
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-col w-2/3">
                                    <label htmlFor="billing-s1" className="text-lg mb-3">Street Address:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="billing-s1" className="background py-2 px-4 rounded-md border-2 border-purple-800 mr-8" placeholder="Street address" />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="billing-apt" className="text-lg mb-3">Apartment/Suite No:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="billing-apt" className="background py-2 px-4 rounded-md border-2 border-purple-800 mr-8 w-1/2" placeholder="Flat no" />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between w-11/12">
                                <div className="flex flex-col my-4 w-fit">
                                    <label htmlFor="billing-city" className="text-lg mb-3">City:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="billing-city" className="background py-2 px-4 rounded-md border-2 border-purple-800 mr-4" placeholder="City" />
                                </div>
                                <div className="flex flex-col my-4 w-fit">
                                    <label htmlFor="billing-state" className="text-lg mb-3">State:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="billing-state" className="background py-2 px-4 rounded-md border-2 border-purple-800 w-11/12" placeholder="State" />
                                </div>
                                <div className="flex flex-col w-fit">
                                    <label htmlFor="billing-zip" className="text-lg mb-3">ZIP Code:<span className="text-red-500 font-bold ml-2">*</span></label>
                                    <TextField id="billing-zip" className="background py-2 px-4 rounded-md border-2 border-purple-800" placeholder="Zip Code" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="my-6">
                            <div className="w-fit">
                                <CheckBox id="terms" name="terms" label={<>I agree to the <u className="font-semibold">Terms & Conditions</u> <span className="text-red-500 font-bold">*</span> </>} />
                            </div>
                            <div className="w-fit">
                                <CheckBox id="refund" name="refund" label={<>I agree to the <u className="font-semibold">Refund Policy</u> <span className="text-red-500 font-bold">*</span> </>} />
                            </div>
                            <div className="w-fit">
                                <CheckBox id="refund" name="refund" label={<>Remember my Payment Details for future purchases</>} />
                            </div>
                        </div>
                        <Button className="payment-button flex flex-row items-center w-fit py-2 px-4 rounded-md my-4" icon={['fas', 'cart-plus']} label="Confirm Purchase" navigation="/paymentSuccess" />
                    </form>
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
                    <div className="flex flex-col w-fit">
                        <label className="my-3">Enter Promo Code:</label>
                        <div className="flex flex-row items-center">
                            <TextField id="promo" className="background py-2 px-4 rounded-md border-2 border-pink-800 mr-4" placeholder="XYZ1234" />
                            <Button className="primary-button w-fit py-2 px-4 rounded-md" icon={['fas', 'tag']} label="Apply" />   
                        </div>
                    </div>
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