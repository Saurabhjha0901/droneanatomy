'use client';

import React, { useState } from 'react';
import styles from './Newsletter.module.css';

export interface NewsletterProps {
    title?: string;
    placeholder?: string;
    buttonText?: string;
    supplierEmail?: string;
    className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({
    title = 'Enter your email to sign up for DroneAnatomy updates',
    placeholder = 'Your email address',
    buttonText = 'Submit',
    supplierEmail = 'info@droneanatomy.com',
    className = '',
}) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Handle submission logic here
            console.log('Newsletter signup:', email);
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className={`${styles.newsletter} ${className}`}>
            <div className={styles.container}>
                {/* Decorative vertical line */}
                <div className={styles.decorativeLine} />

                <h3 className={styles.title}>{title}</h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder={placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.submitButton}>
                        {submitted ? 'Thank you!' : buttonText}
                    </button>
                </form>

                <div className={styles.footer}>
                    <p className={styles.supplierText}>
                        Interested in becoming a DroneAnatomy supplier? Please email{' '}
                        <a href={`mailto:${supplierEmail}`} className={styles.link}>
                            {supplierEmail}
                        </a>
                    </p>
                    {/* <p className={styles.legalText}>
                        For information about trademarks, copyrights, and other IP at DroneAnatomy, click{' '}
                        <a href="/legal" className={styles.link}>
                            here
                        </a>
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
