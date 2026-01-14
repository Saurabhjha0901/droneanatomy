import { Banner } from '@/components';

export const metadata = {
    title: 'Enterprise | DroneAnatomy',
    description: 'Enterprise drone solutions - fleet management, custom development, and dedicated support for large-scale operations.',
};

export default function EnterprisePage() {
    return (
        <>
            <Banner
                title="Enterprise Solutions"
                subtitle="Deploy entire drone fleets with centralized command. Real-time monitoring, automated missions, and enterprise-grade security."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Fleet Management"
                subtitle="Manage hundreds of drones from a single dashboard. Real-time tracking, automated scheduling, and predictive maintenance."
                ctaText="Learn More"
                ctaLink="/enterprise/fleet"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Custom Development"
                subtitle="Tailored drone solutions for your specific industry needs. Our engineering team works directly with you to design and build."
                ctaText="Contact Us"
                ctaLink="/contact"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Dedicated Support"
                subtitle="24/7 technical support, on-site training, and dedicated account management. We're with you every step of the way."
                ctaText="Get Started"
                ctaLink="/contact"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
