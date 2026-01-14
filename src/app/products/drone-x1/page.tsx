import { Banner } from '@/components';

export const metadata = {
    title: 'Drone X1 | DroneAnatomy',
    description: 'Drone X1 - Our flagship autonomous drone with 8K imaging, 60-minute flight time, and AI-powered obstacle avoidance.',
};

export default function DroneX1Page() {
    return (
        <>
            <Banner
                title="Drone X1"
                subtitle="Our flagship autonomous drone. 8K imaging, 60-minute flight time, and AI-powered obstacle avoidance. Built for professionals who demand excellence."
                ctaText="Order Now"
                ctaLink="/contact"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="8K Imaging"
                subtitle="Capture stunning detail with our proprietary 8K camera system. HDR, RAW support, and cinema-grade color science."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="60-Minute Flight"
                subtitle="Extended flight time with our advanced battery technology. Complete longer missions without interruption."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="AI Obstacle Avoidance"
                subtitle="360-degree obstacle detection and avoidance. Fly with confidence in complex environments."
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
