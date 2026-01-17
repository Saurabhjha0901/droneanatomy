'use client';

import { useState } from 'react';
import styles from './careers.module.css';

export default function CareersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [program, setProgram] = useState('');
    const [discipline, setDiscipline] = useState('');

    return (
        <section className={styles.careersHero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Find Your Future</h1>
                <p className={styles.subtitle}>
                    DroneAnatomy is looking for world-class talent ready to tackle challenging projects
                    that will ultimately transform industries. We are an equal opportunity employer
                    offering competitive salaries, comprehensive health benefits and equity packages.
                </p>

                <div className={styles.searchForm}>
                    <div className={styles.searchInputWrapper}>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>

                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
                        >
                            <option value="">All Programs</option>
                            <option value="engineering">Engineering</option>
                            <option value="operations">Operations</option>
                            <option value="manufacturing">Manufacturing</option>
                        </select>
                        <svg className={styles.selectArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>

                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={discipline}
                            onChange={(e) => setDiscipline(e.target.value)}
                        >
                            <option value="">All Disciplines</option>
                            <option value="software">Software</option>
                            <option value="hardware">Hardware</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="electrical">Electrical</option>
                        </select>
                        <svg className={styles.selectArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>

                    <button type="button" className={styles.searchButton}>
                        Search
                    </button>
                </div>

                <div className={styles.links}>
                    <a href="/careers/openings" className={styles.link}>View All Openings</a>
                    <a href="/careers/internships" className={styles.link}>Internships</a>
                </div>
            </div>


        </section>
    );
}
