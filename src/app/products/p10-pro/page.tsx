import { Banner, Slider, Newsletter } from '@/components';

export const metadata = {
    title: 'P10 Pro | DroneAnatomy',
    description: 'P10 Pro - The ultimate professional drone with advanced AI capabilities and unmatched performance.',
};

export default function P10ProPage() {
    return (
        <>
            <Banner
                title="P10 Pro"
                titleSize='hero'
                subtitle="Advanced Aerial Intelligence for Modern Agriculture"
                contentPosition="center"
                backgroundImage='/images/p10hero.jpg'
                overlayStyle="dark"
                textAlign='center'
                showScrollIndicator
                animate={true}
            />

            <Slider
                slides={[
                    {
                        title: 'P10 Pro Overview',
                        description: "The Drone Anatomy P10 Pro is a high-performance agricultural drone designed for precision spraying, crop monitoring, and autonomous field operations. Engineered for reliability and efficiency, P10 Pro integrates advanced flight control, intelligent payload systems, and rugged airframe construction to operate consistently across large and demanding agricultural environments.",
                        backgroundImage: '/images/p10layout2.jpg',
                        specs: [
                            { label: 'Max Flight Time', value: '30 minutes' },
                            { label: 'Payload Capacity', value: '10kg' },
                            { label: 'SPRAY WIDTH', value: '4 - 6 m' },
                            { label: 'POSITIONING SYSTEM', value: 'GPS Assisted Navigation' },
                        ],
                    },
                    {
                        title: 'Pro-Grade Sensors',
                        description: '1-inch CMOS sensor with adjustable aperture f/2.8-f/11. Dual native ISO for exceptional low-light performance and dynamic range.',
                        backgroundImage: '',
                    },
                    {
                        title: 'Cinematic Modes',
                        description: 'Built-in cinematic flight modes including Dolly Zoom, Orbit, and Reveal. Create Hollywood-quality shots with a single tap.',
                        backgroundImage: '',
                    },
                ]}
            />

            <Slider
                slides={[
                    {
                        title: 'AI-Powered Flight',
                        description: 'Advanced neural processing unit enables intelligent obstacle avoidance with 360° sensing. Navigate complex environments with confidence.',
                        backgroundImage: '/images/p10layout3.jpg',
                    },
                    {
                        title: 'Subject Tracking',
                        description: 'ActiveTrack 5.0 keeps your subject perfectly framed even during high-speed movement. Predict and follow with unmatched precision.',
                        backgroundImage: '',
                    },
                ]}
            />

            <Slider
                slides={[
                    {
                        title: '45-Minute Flight Time',
                        description: 'Industry-leading battery technology delivers up to 45 minutes of continuous flight. Quick-swap design for uninterrupted operation.',
                        backgroundImage: '/images/p10layout4.jpg',
                    },
                    {
                        title: 'Rapid Charging',
                        description: 'Fast-charge capability gets you back in the air in just 60 minutes. Intelligent battery management extends overall lifespan.',
                        backgroundImage: '',
                    },
                    {
                        title: 'All-Weather Ready',
                        description: 'IP54 weather resistance rating. Operate in rain, dust, and temperatures from -10°C to 40°C with confidence.',
                        backgroundImage: '',
                    },
                ]}
            />

            <Slider
                slides={[
                    {
                        title: 'Enterprise Ready',
                        description: 'Integrated SDK and developer tools for custom applications. Thermal imaging capability and RTK positioning for industrial precision.',
                        backgroundImage: '/images/p10layout5.jpg',
                    },
                    {
                        title: 'Fleet Management',
                        description: 'Connect multiple P10 Pro units for coordinated operations. Cloud-based fleet management with real-time telemetry and monitoring.',
                        backgroundImage: '',
                    },
                ]}
            />

            <Newsletter />
        </>
    );
}
