import { Banner } from '@/components';

export const metadata = {
    title: 'Careers | DroneAnatomy',
    description: 'Join the DroneAnatomy team. Explore career opportunities in engineering, design, and operations.',
};

export default function CareersPage() {
    return (
        <>
            <Banner
                title="Join Our Team"
                subtitle="Help us build the future of aerial technology. We're looking for passionate individuals who share our vision."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Engineering"
                subtitle="Work on cutting-edge drone technology, from flight controllers to computer vision systems."
                ctaText="View Positions"
                ctaLink="/careers/engineering"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Design"
                subtitle="Shape the future of drone design. Industrial design, UX, and brand identity opportunities."
                ctaText="View Positions"
                ctaLink="/careers/design"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Operations"
                subtitle="Support our global operations from manufacturing to customer success."
                ctaText="View Positions"
                ctaLink="/careers/operations"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
