'use client'; // Asegura que el componente es un Client Component
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import 'bulma/css/bulma.min.css'; // Importa Bulma
import '/styles/Navbar.scss'

const Navbar = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img 
                        src="/N va.png" 
                        alt="logo" 
                        style={{ width: '160px', height: 'auto' }} // Establece el ancho y ajusta la altura automáticamente
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
                    <a className={`navbar-item ${pathname === '/packages' ? 'is-selected' : ''}`} href="/packages"> Paquetes </a>
                    <a className={`navbar-item ${pathname === '/contact' ? 'is-selected' : ''}`} href="/contact"> Contact </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
