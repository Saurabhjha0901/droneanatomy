import { Banner } from '@/components';

export const metadata = {
    title: 'Products | DroneAnatomy',
    description: 'Explore our range of advanced drone products - Drone X1, Drone Pro, Drone Lite, and accessories.',
};

export default function ProductsPage() {
    return (
        <>
            <Banner
                title="Our Products"
                subtitle="Discover our complete range of advanced aerial vehicles, designed for professionals and enthusiasts alike."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Drone X1"
                subtitle="Our flagship autonomous drone featuring 8K imaging, 60-minute flight time, and AI-powered obstacle avoidance. Built for professionals who demand excellence."
                ctaText="Learn More"
                ctaLink="/products/drone-x1"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Drone Pro"
                subtitle="Professional-grade aerial photography and videography. 4K HDR video, advanced stabilization, and intelligent flight modes."
                ctaText="Learn More"
                ctaLink="/products/drone-pro"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Drone Lite"
                subtitle="Compact and portable without compromising on quality. Perfect for travel and everyday adventures."
                ctaText="Learn More"
                ctaLink="/products/drone-lite"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
