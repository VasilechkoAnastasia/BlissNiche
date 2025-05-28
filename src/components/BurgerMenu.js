import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="main-nav hamburger-menu">
            <input
                id="menu__toggle"
                type="checkbox"
                checked={isOpen}
                onChange={toggleMenu}
                className="hidden"
            />
            <label htmlFor="menu__toggle" className="menu__btn cursor-pointer flex flex-col justify-center items-center w-10 h-10 space-y-1.5">
                <span className="block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out transform origin-center"></span>
                <span className="block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out transform origin-center"></span>
                <span className="block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out transform origin-center"></span>
            </label>
            <ul
                className={`menu__box absolute top-12 left-0 w-48 bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'
                    }`}>
                <img src="./Union.png" className="logo-menu-union" />
                <li>
                    <Link to='/' className="menu__item block px-4 py-2 text-gray-800 hover:bg-gray-100" style={{ textDecoration: "none", color: "black" }}>
                        ГОЛОВНА
                    </Link>
                </li>
                <li>
                    <Link to='/product' className="menu__item block px-4 py-2 text-gray-800 hover:bg-gray-100" style={{ textDecoration: "none", color: "black" }}>
                        ТОВАРИ
                    </Link>
                </li>
                <li>
                    <Link to='/roompage' className="menu__item block px-4 py-2 text-gray-800 hover:bg-gray-100" style={{ textDecoration: "none", color: "black" }}>
                        КІМНАТИ
                    </Link>
                </li>
                <li>
                    <Link to='/ideas' className="menu__item block px-4 py-2 text-gray-800 hover:bg-gray-100" style={{ textDecoration: "none", color: "black" }}>
                        ІДЕЇ
                    </Link>
                </li>
                <li>
                    <Link to='/design' className="menu__item block px-4 py-2 text-gray-800 hover:bg-gray-100" style={{ textDecoration: "none", color: "black" }}>
                        ДИЗАЙН
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default BurgerMenu;