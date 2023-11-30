import "./Header.css";

export default function Header() {
    return (
        <div className="headerBG">
            <img className="absolute left-0" src="" alt="Nexus Play logo"></img>
            <ul className="flex justify-center text-white">
                <li><button className="headerButtons">Store</button></li>
                <li><button className="headerButtons">Library</button></li>
                <li><button className="headerButtons">Community</button></li>
                <li><button className="headerButtons">Profile</button></li>
            </ul>

        </div>
    )
}