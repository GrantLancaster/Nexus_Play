const TextField = ({ id, className, placeholder }) => {
    return(
        <input id={id} name={id} type="text" className={className} placeholder={placeholder} />
    )
}

function DropDown() {

    const optionClass = "py-24"

    return(
        <select name="payment-selection" id="payment-selection" className="primary-background font-semibold text-black px-4 py-2 flex-col rounded-md">
            <option value="default" defaultValue>Payment Method</option>
            <option className={optionClass} value="paypal">PayPal</option>
            <option className={optionClass} value="visa">Visa</option>
            <option className={optionClass} value="american-express">American Express</option>
            <option className={optionClass} value="discover">Discover</option>
            <option className={optionClass} value="mastercard">Mastercard</option>
        </select>
    )
}

function CheckBox({ id, name, label }) {
    return(
        <div className="flex flex-row items-center my-6">
            <input id={id} type="checkbox" name={name} className="flex border-2 border-purple-800 mr-3 scale-150" />
            <label htmlFor="terms"> {label} </label>
        </div>
    )
}

export { TextField, DropDown, CheckBox };