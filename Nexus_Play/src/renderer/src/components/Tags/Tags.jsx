import "./Tags.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

library.add( faCircle )

function Offertag() {
    return(
        <div className="px-2 py-1 border-2 rounded-lg border-green-500 w-fit text-green-500">
            <FontAwesomeIcon icon="circle" className="mr-2"/>
            Offer
        </div>
    )
}

function GenerateRandomPrice() {

    const randomPrice = Math.random() * (99.99 - 20.00) + 20.00;
  
    const formattedPrice = randomPrice.toFixed(2);
  

    return (
        // This will just return the value, always add this inside a parent element of it's own. Check the example in Featured.jsx
            <>
                ${formattedPrice}
            </>
            );
  }

export { Offertag, GenerateRandomPrice }