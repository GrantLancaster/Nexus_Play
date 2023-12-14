import Logo from '../../assets/Logo.png';

import HomePage from '../HomePage/HomePage';

import CartPage from '../CartPage/CartPage';

import { Link } from 'wouter';

export default function Header() {


    // Tailwind and CSS Class Declarations

    const navClass = 'm-0 py-4 px-10 background flex flex-row items-center justify-between sticky top-0';

    const logoClass = 'w-48';

    const navButtons = 'flex flex-row';

    const navItemClass = 'text-white font-semibold text-xl px-12';

    return (
        <nav className= { navClass }>
            <img className= { logoClass } src= { Logo } alt="Nexus Play logo" />
            <ul className={ navButtons }>
                <li><Link href="/" className= { navItemClass }>Store</Link></li>
                <li><Link href="/" className= { navItemClass }>Library</Link></li>
                <li><Link href="/cart" className= { navItemClass }>Cart</Link></li>
                <li><a className= { navItemClass }>Profile</a></li>

            </ul>
            <div className="invisible">Pseudo div</div>
        </nav>
    )
}