import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const navItems = [
        {name: "home", path:"/" },
        {name: "about", path:"/about"},
        {name: "Services", path:"/Services"},
        {name: "Contact", path:"/contact"},
        {name: "Developerteam", path:"/Developerteam"},
    ];
    return (
        <header className='header'>
            <div className='logo'>my awesome homepage</div>
            <nav className='nav'>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;