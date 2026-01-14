'use client';

import React from 'react';
import styles from './Footer.module.css';

const footerLinks = [
    { label: 'Careers', href: '/careers' },
    { label: 'Updates', href: '/updates' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Suppliers', href: '/suppliers' },
];

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Social Icon - X (Twitter) */}
                <a
                    href="https://twitter.com/droneanatomy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Follow us on X"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>

                {/* Navigation Links */}
                <nav className={styles.footerNav}>
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={styles.footerLink}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Copyright */}
                <span className={styles.copyright}>
                    © {currentYear} DRONEANATOMY
                </span>
            </div>
        </footer>
    );
};

export default Footer;
