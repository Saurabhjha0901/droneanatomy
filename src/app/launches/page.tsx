import { Banner } from '@/components';

export const metadata = {
    title: 'Launches | DroneAnatomy',
    description: 'Upcoming product launches and events from DroneAnatomy. Stay ahead with the latest in drone technology.',
};

export default function LaunchesPage() {
    return (
        <>
            <Banner
                title="Upcoming Launches"
                subtitle="Stay ahead with our latest innovations. Be the first to experience next-generation drone technology."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Drone X2 - Coming Soon"
                subtitle="The next evolution in autonomous flight. Enhanced AI, extended range, and revolutionary new sensors. Join the waitlist for exclusive early access."
                ctaText="Join Waitlist"
                ctaLink="/launches/x2-waitlist"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="DroneOS 3.0"
                subtitle="Major software update bringing new autonomous capabilities, improved flight planning, and enhanced safety features. Available Q2 2026."
                ctaText="Learn More"
                ctaLink="/launches/droneos-3"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Developer Conference 2026"
                subtitle="Join us for our annual developer conference. Workshops, keynotes, and hands-on sessions with our engineering team."
                ctaText="Register Now"
                ctaLink="/launches/devcon-2026"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
