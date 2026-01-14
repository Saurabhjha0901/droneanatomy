import { Banner } from '@/components';

export const metadata = {
    title: 'Accessories | DroneAnatomy',
    description: 'Drone accessories - batteries, chargers, carrying cases, and more.',
};

export default function AccessoriesPage() {
    return (
        <>
            <Banner
                title="Accessories"
                subtitle="Enhance your drone experience with our range of premium accessories. Batteries, chargers, cases, and more."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Batteries & Charging"
                subtitle="Extended flight batteries, fast chargers, and charging hubs. Never miss a shot."
                ctaText="Shop Now"
                ctaLink="/contact"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Carrying Solutions"
                subtitle="Protective cases, backpacks, and carrying solutions. Travel safely with your gear."
                ctaText="Shop Now"
                ctaLink="/contact"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
