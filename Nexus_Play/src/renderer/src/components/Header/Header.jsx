import "./Header.css";

export default function Header() {
    return (
        <div className="nav-background">
            <img className="headerLogo" src="" alt="Nexus Play logo"></img>
            <ul className="buttonList">
                <li><button className="headerButtons">Store</button></li>
                <li><button className="headerButtons">Library</button></li>
                <li><button className="headerButtons">Community</button></li>
                <li><button className="headerButtons">Profile</button></li>
            </ul>

        </div>
    )
}