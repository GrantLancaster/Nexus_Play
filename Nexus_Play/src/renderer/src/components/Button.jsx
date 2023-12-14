import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useLocation from "wouter/use-location";

// primary-button is the className for Primary Button

const Button = ({ icon, className, label, navigation }) => {

    const [, setLocation] = useLocation();

    const navigate = () => {
      setLocation(navigation);
    };

    return(
        <button className={className} onClick={navigate}>
            <FontAwesomeIcon icon={icon} className="mr-2"/>
                {label}
        </button>
    );
};

export { Button }