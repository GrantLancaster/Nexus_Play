import Logo from '../../assets/Logo.png';

export default function Header() {

    // Tailwind and CSS Class Declarations

    const navClass = 'm-0 py-4 px-10 nav-background flex flex-row items-center justify-between w-full';

    const logoClass = 'w-48';

    const navButtons = 'flex flex-row';

    const navItemClass = 'text-white font-semibold text-xl px-12';

    return (
        <nav className= { navClass }>
            <img className= { logoClass } src= { Logo } alt="Nexus Play logo" />
            <ul className={ navButtons }>
                <li><button className= { navItemClass }>Store</button></li>
                <li><button className= { navItemClass }>Library</button></li>
                <li><button className= { navItemClass }>Community</button></li>
                <li><button className= { navItemClass }>Profile</button></li>

            </ul>
            <div className="invisible">Pseudo div</div>
        </nav>
    )
}