import { Banner } from '@/components';

export const metadata = {
    title: 'Drone Pro | DroneAnatomy',
    description: 'Drone Pro - Professional-grade aerial photography and videography drone.',
};

export default function DroneProPage() {
    return (
        <>
            <Banner
                title="Drone Pro"
                subtitle="Professional-grade aerial photography and videography. 4K HDR video, advanced stabilization, and intelligent flight modes."
                ctaText="Order Now"
                ctaLink="/contact"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="4K HDR Video"
                subtitle="Cinematic video quality with HDR support. Perfect for professional productions and content creation."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Advanced Stabilization"
                subtitle="3-axis mechanical gimbal with electronic stabilization. Smooth footage in any conditions."
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
