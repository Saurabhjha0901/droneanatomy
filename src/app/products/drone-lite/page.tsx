import { Banner } from '@/components';

export const metadata = {
    title: 'Drone Lite | DroneAnatomy',
    description: 'Drone Lite - Compact and portable drone for travel and everyday adventures.',
};

export default function DroneLitePage() {
    return (
        <>
            <Banner
                title="Drone Lite"
                subtitle="Compact and portable without compromising on quality. Perfect for travel and everyday adventures."
                ctaText="Order Now"
                ctaLink="/contact"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Ultra Portable"
                subtitle="Foldable design fits in your pocket. Take it anywhere, capture everything."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Easy to Fly"
                subtitle="Intuitive controls and automated flight modes. Perfect for beginners and pros alike."
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
