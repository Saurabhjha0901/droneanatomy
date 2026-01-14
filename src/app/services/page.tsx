import { Banner } from '@/components';

export const metadata = {
    title: 'Services | DroneAnatomy',
    description: 'Professional drone services including aerial surveying, infrastructure inspection, and cinematography.',
};

export default function ServicesPage() {
    return (
        <>
            <Banner
                title="Our Services"
                subtitle="From agricultural surveying to infrastructure inspection, our certified pilots and advanced drones deliver precise data and stunning imagery."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Aerial Surveying"
                subtitle="High-precision mapping and surveying for construction, agriculture, and land management. Accurate to centimeter-level precision."
                ctaText="Learn More"
                ctaLink="/services/surveying"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Infrastructure Inspection"
                subtitle="Safe, efficient inspection of bridges, power lines, wind turbines, and industrial facilities. Reduce risk and downtime."
                ctaText="Learn More"
                ctaLink="/services/inspection"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Cinematography"
                subtitle="Stunning aerial footage for film, television, and commercial productions. 8K resolution with cinema-grade color science."
                ctaText="Learn More"
                ctaLink="/services/cinematography"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
