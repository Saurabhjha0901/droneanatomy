'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from '../Dropdown';
import { CTAButton } from '../CTAButton';
import styles from './Header.module.css';

const productItems = [
    { label: 'P10 Pro', href: '/products/p10-pro' },
    { label: 'Drone Pro', href: '/products/drone-x1' },

];

const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Launches', href: '/launches' },
];

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const isDesktop = window.innerWidth > 1024;

                    setIsScrolled(currentScrollY > 50);

                    // Only apply hide/show on desktop
                    if (isDesktop && currentScrollY > 100) {
                        setIsHidden(currentScrollY > lastScrollY.current);
                    } else {
                        setIsHidden(false);
                    }

                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.hidden : ''}`}
            >
                {/* Logo */}
                <a href="/" className={styles.logo}>
                    <span className={styles.logoText}>
                        Drone<span className={styles.logoAccent}>Anatomy</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Dropdown label="Vehicles" items={productItems} />
                        </li>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className={styles.navLink}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div className={styles.ctaContainer}>
                    <CTAButton href="/contact">
                        Get Started
                    </CTAButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className={styles.hamburger} />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
            >
                {/* Mobile Menu Header */}
                <div className={styles.mobileMenuHeader}>
                    <a href="/" className={styles.mobileMenuLogo} onClick={closeMobileMenu}>
                        Drone<span className={styles.mobileMenuLogoAccent}>Anatomy</span>
                    </a>
                    <button
                        type="button"
                        className={styles.closeBtn}
                        onClick={closeMobileMenu}
                        aria-label="Close menu"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <nav>
                    <ul className={styles.mobileNavList}>
                        <li>
                            <Dropdown label="Products" items={productItems} />
                        </li>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className={styles.mobileNavLink}
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.mobileCta}>
                        <CTAButton href="/contact" showArrow size='small'>
                            Get Started
                        </CTAButton>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
