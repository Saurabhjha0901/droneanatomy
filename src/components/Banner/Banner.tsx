'use client';

import React, { useRef, useEffect, useState } from 'react';
import { CustomButton } from '../CustomButton';
import styles from './Banner.module.css';

export type ContentPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

export interface BannerProps {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
    backgroundImageMobile?: string;
    backgroundVideo?: string;
    contentPosition?: ContentPosition;
    overlayStyle?: 'dark' | 'light' | 'none';
    showScrollIndicator?: boolean;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    titleSize?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
    animate?: boolean;
    className?: string;
}

const titleSizeClassMap: Record<string, string> = {
    'sm': styles.titleSm,
    'md': styles.titleMd,
    'lg': styles.titleLg,
    'xl': styles.titleXl,
    'hero': styles.titleHero,
};

const positionClassMap: Record<ContentPosition, string> = {
    'top-left': styles.topLeft,
    'top-center': styles.topCenter,
    'top-right': styles.topRight,
    'center-left': styles.centerLeft,
    'center': styles.center,
    'center-right': styles.centerRight,
    'bottom-left': styles.bottomLeft,
    'bottom-center': styles.bottomCenter,
    'bottom-right': styles.bottomRight,
};

export const Banner: React.FC<BannerProps> = ({
    title,
    subtitle,
    ctaText,
    ctaLink,
    backgroundImage,
    backgroundImageMobile,
    backgroundVideo,
    contentPosition = 'bottom-left',
    overlayStyle = 'dark',
    showScrollIndicator = false,
    textAlign,
    titleSize,
    animate = false,
    className = '',
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Autoplay video when in view
    useEffect(() => {
        const video = videoRef.current;
        if (!video || isMobile) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {
                            // Autoplay was prevented
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, [isMobile]);

    const handleScrollClick = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    const positionClass = positionClassMap[contentPosition];

    return (
        <section className={`${styles.banner} ${className}`}>
            {/* Background */}
            <div className={styles.backgroundContainer}>
                {/* Show video only on desktop if provided */}
                {backgroundVideo && !isMobile ? (
                    <video
                        ref={videoRef}
                        className={styles.backgroundVideo}
                        src={backgroundVideo}
                        muted
                        loop
                        playsInline
                        poster={backgroundImage}
                    />
                ) : (isMobile && backgroundImageMobile) ? (
                    <img
                        className={styles.backgroundImage}
                        src={backgroundImageMobile}
                        alt=""
                        loading="lazy"
                    />
                ) : backgroundImage ? (
                    <img
                        className={styles.backgroundImage}
                        src={backgroundImage}
                        alt=""
                        loading="lazy"
                    />
                ) : null}
            </div>

            {/* Overlay */}
            {overlayStyle !== 'none' && (
                <div
                    className={`${styles.overlay} ${overlayStyle === 'dark' ? styles.overlayDark : styles.overlayLight
                        }`}
                />
            )}

            {/* Content Grid */}
            <div className={styles.contentGrid}>
                <div
                    className={`${styles.content} ${positionClass}`}
                    style={textAlign ? {
                        textAlign,
                        alignItems: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start'
                    } : undefined}
                >
                    {title && (
                        <h2 className={`${styles.title} ${titleSize ? titleSizeClassMap[titleSize] : ''} ${animate ? styles.animateSlideUp : ''}`}>
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className={`${styles.subtitle} ${animate ? styles.animateSlideUpDelay : ''}`}>
                            {subtitle}
                        </p>
                    )}
                    {ctaText && (
                        <div className={styles.ctaWrapper}>
                            <CustomButton href={ctaLink} showArrow>
                                {ctaText}
                            </CustomButton>
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <button
                    type="button"
                    className={styles.scrollIndicator}
                    onClick={handleScrollClick}
                    aria-label="Scroll down"
                >
                    <span className={styles.scrollText}>Scroll</span>
                    <span className={styles.scrollArrow}>
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
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </span>
                </button>
            )}
        </section>
    );
};

export default Banner;
