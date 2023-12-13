const TextField = ({ id, className, placeholder }) => {
    return(
        <input id={id} type="text" className={className} placeholder={placeholder} />
    )
}

function DropDown() {

    const optionClass = "py-24"

    return(
        <select name="payment-selection" id="payment-selection" className="secondary-background font-semibold text-black px-4 py-2 flex-col rounded-md">
            <option className={optionClass} value="paypal">PayPal</option>
            <option className={optionClass} value="visa">Visa</option>
            <option className={optionClass} value="american-express">American Express</option>
            <option className={optionClass} value="discover">Discover</option>
            <option className={optionClass} value="mastercard">Mastercard</option>
        </select>
    )
}

export { TextField, DropDown };