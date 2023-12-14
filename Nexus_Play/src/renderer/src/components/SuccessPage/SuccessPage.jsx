import success from "../../assets/paymentSuccess.png"

import { Button } from "../Button";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faDownload, faShop, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

library.add(faDownload, faShop, faCircleExclamation);

export default function SuccessPage() {
    return(
        <div className="text-white px-96 my-36 flex justify-center items-center">
            <div className="flex flex-col items-center justify-center w-2/3">
                <img src={success} className="w-64" />
                <h2 className="text-4xl font-semibold my-6">Purchase Successful</h2>
                <p className="text-stone-400">
                    Congratulations! Your purchase was successful and your game is now ready to download. The download process has already begun and you can track its progress in the "Downloads" section of the launcher.
                    <br />
                    <br />
                    Once the game is fully downloaded, you will receive a notification informing you that it is ready to play. In the meantime, feel free to explore other games and features of the launcher.
                    <br />
                    <br />
                    We hope you have a great time playing your new game!
                </p>
                <div className="flex flex-col w-full items-center my-4">
                    <div className="flex flex-row w-1/3 justify-between">
                        <Button icon={['fas', 'download']} className="primary-button flex flex-row items-center w-fit py-2 px-4 rounded-md my-4" navigation="/" label="Downloads" />

                        <Button icon={['fas', 'shop']} className="secondary-button flex flex-row items-center w-fit py-2 px-4 rounded-md my-4" navigation="/" label="Store" />
                    </div>
                    <Button icon={['fas', 'circle-exclamation']} className="remove-button flex flex-row items-center w-fit py-2 px-4 rounded-md my-2" navigation="/" label="Report an Issue" />
                </div>
            </div>
        </div>
    );
}