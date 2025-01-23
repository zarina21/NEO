'use client'; // Ensures that the component is a Client Component
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import 'bulma/css/bulma.min.css'; // Import Bulma
import '/src/styles/Navbar.scss'

const Navbar = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar is-fixed-top c" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <Image 
                        src="/image/N_va.png" 
                        alt="logo" 
                        width={160}
                        height={160} // Sets the width and adjusts the height automatically
                        style={{ objectFit: 'contain' }} // Maintains the aspect ratio without distorting the image
                    />
                </a>
                <div 
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
                    onClick={toggleMenu}
                    data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <a className={`navbar-item ${pathname === '/' ? 'is-selected' : ''}`} href="/"> Home </a>
                    <a className={`navbar-item ${pathname === '/portfolio' ? 'is-selected' : ''}`} href="/portfolio"> Portfolio </a>
                    <a className={`navbar-item ${pathname === '/about' ? 'is-selected' : ''}`} href="/about"> About Us </a>
                    <a className={`navbar-item ${pathname === '/packages' ? 'is-selected' : ''}`} href="/Products"> Products </a>
                    <a className={`navbar-item ${pathname === '/contact' ? 'is-selected' : ''}`} href="/contact"> Contact </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
