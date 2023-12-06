// primary-button is the className for Primary Button

const Button = ({ icon, className, label }) => {
    return(
        <button className={className}>
                {label}
        </button>
    );
};

export { Button }