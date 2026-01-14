'use client';

import React from 'react';
import { Card, CardProps } from '../Card';
import styles from './CardGrid.module.css';

export interface CardGridProps {
    sectionTitle?: string;
    cards: CardProps[];
    className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
    sectionTitle,
    cards,
    className = '',
}) => {
    return (
        <section className={`${styles.section} ${className}`}>
            <div className={styles.container}>
                {sectionTitle && (
                    <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
                )}
                <div className={styles.grid}>
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardGrid;
