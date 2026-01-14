'use client';

import React from 'react';
import styles from './CustomButton.module.css';

export interface CustomButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    showArrow?: boolean;
    badge?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    variant = 'secondary',
    size = 'medium',
    showArrow = false,
    badge,
    fullWidth = false,
    disabled = false,
    href,
    onClick,
    className = '',
    type = 'button',
}) => {
    const classNames = [
        styles.customButton,
        styles[variant],
        size !== 'medium' && styles[size],
        fullWidth && styles.fullWidth,
        badge && styles.withBadge,
        disabled && styles.disabled,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const content = (
        <>
            <span>{children}</span>
            {showArrow && (
                <span className={styles.arrow}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </span>
            )}
            {badge && <span className={styles.badge}>{badge}</span>}
        </>
    );

    if (href && !disabled) {
        return (
            <a href={href} className={classNames}>
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames}
            disabled={disabled}
        >
            {content}
        </button>
    );
};

export default CustomButton;
