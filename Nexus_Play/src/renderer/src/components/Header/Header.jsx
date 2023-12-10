import Logo from '../../assets/Logo.png';

import HomePage from '../HomePage/HomePage';

import CartPage from '../CartPage/CartPage';

export default function Header({Page, UpdatePage}) {

    function storeHome() {
        Page = <HomePage />

        UpdatePage(Page);

    }

    function cartPage() {
        Page = <CartPage />

        UpdatePage(Page);
    }

    // Tailwind and CSS Class Declarations

    const navClass = 'm-0 py-4 px-10 background flex flex-row items-center justify-between sticky top-0';

    const logoClass = 'w-48';

    const navButtons = 'flex flex-row';

    const navItemClass = 'text-white font-semibold text-xl px-12';

    return (
        <nav className= { navClass }>
            <img className= { logoClass } src= { Logo } alt="Nexus Play logo" />
            <ul className={ navButtons }>
                <li><button className= { navItemClass } onClick={storeHome}>Store</button></li>
                <li><button className= { navItemClass } onClick={cartPage}>Library</button></li>
                <li><button className= { navItemClass }>Community</button></li>
                <li><button className= { navItemClass }>Profile</button></li>

            </ul>
            <div className="invisible">Pseudo div</div>
        </nav>
    )
}