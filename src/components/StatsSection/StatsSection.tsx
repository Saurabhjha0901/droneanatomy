'use client';

import React from 'react';
import { Counter } from '../Counter';
import styles from './StatsSection.module.css';

export interface StatItem {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

export interface StatsSectionProps {
    stats: StatItem[];
    className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
    stats,
    className = '',
}) => {
    return (
        <section className={`${styles.statsSection} ${className}`}>
            <div className={styles.container}>
                {stats.map((stat, index) => (
                    <Counter
                        key={index}
                        value={stat.value}
                        label={stat.label}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                    />
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
