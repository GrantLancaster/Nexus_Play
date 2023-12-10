import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, className, label }) => {


    return(
        <button className={className}>
            <FontAwesomeIcon icon={icon} className="mr-2"/>
                {label}
        </button>
    );
};

export { Button }