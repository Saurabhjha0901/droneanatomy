import { Banner, Slider, Newsletter, FeatureShowcase } from '@/components';

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
                subtitle="Agriculture Drone, Made For Indian Conditions"
                contentPosition="center-left"
                backgroundImage='/images/p10pro-hero.png'
                // backgroundVideo='/videos/opening-drone.mp4'
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
                        // backgroundImage: '/images/p10pro-overview.png',
                        backgroundVideo: '/videos/drone-show.mp4',
                        // sideVideo: '/videos/opening-drone.mp4',
                        specs: [
                            { label: 'Max Flight Time', value: '30 minutes' },
                            { label: 'Payload Capacity', value: '10kg' },
                            { label: 'SPRAY WIDTH', value: '4 - 6 m' },
                            { label: 'POSITIONING SYSTEM', value: 'GPS Assisted Navigation' },
                        ],
                    },
                    // {
                    //     title: 'POWER SYSTEM',
                    //     description: 'The Agri Drone P10 Pro power system is designed for high-discharge agricultural missions, delivering consistent output under heavy payload and low-altitude flight conditions. Intelligent power management ensures stable performance, extended battery life, and safe operation across varying environmental conditions.',
                    //     backgroundImage: '/images/battery.png',
                    //     specs: [
                    //         { label: 'BATTERY TYPE', value: 'Li-ion, 12S' },
                    //         { label: 'NOMINAL VOLTAGE', value: '44.4 V' },
                    //         { label: 'BATTERY CAPACITY', value: '16000mAh' },
                    //         { label: 'CHARGING TIME', value: '20 minutes' },
                    //     ],
                    // },
                    // {
                    //     title: 'PROPULSION SYSTEM',
                    //     description: 'The propulsion system of the P10 Pro is optimized for efficient lift, precise control, and long-term durability. Tuned specifically for agricultural workloads, it maintains stability during spraying while minimizing vibration and power loss.',
                    //     backgroundImage: '/images/p10pro-propulsion.png',
                    //     specs: [
                    //         { label: 'MOTOR TYPE', value: 'Brushless outrunner ×4' },
                    //         { label: 'PROPELLER DIAMETER', value: '24 in' },
                    //         { label: 'MAX THRUST', value: '20000g' },
                    //         { label: 'MAX RPM', value: '10000 RPM' },
                    //     ],
                    // },
                    // {
                    //     title: 'REMOTE & CONTROL APPLICATION',
                    //     description: 'The Agri Drone P10 Pro control ecosystem combines a dedicated industrial-grade remote controller with a proprietary mobile application, enabling precise mission planning, real-time monitoring, and reliable command execution in field conditions.',
                    //     backgroundImage: '',
                    //     specs: [
                    //         { label: 'CONTROL INTERFACE', value: 'Dedicated remote controller + mobile application' },
                    //         { label: 'MAX CONTROL RANGE', value: 'Up to 1 km (line of sight)' },
                    //         { label: 'MISSION PLANNING', value: 'Waypoint-based autonomous operation' },
                    //         { label: 'OPERATING FREQUENCY', value: '2.4GHz/5.8GHz' },
                    //     ],
                    // },
                ]}
            />

            <Banner
                title="Max Flow Rate"
                titleSize='sm'
                subtitle="Up to 5L/min"
                contentPosition="bottom-left"
                backgroundVideo='/videos/spray.mp4'
                overlayStyle="light"
                textAlign='left'
            />

            <Banner
                title="Night Flying Capability - Equipped with bright LED lights"
                titleSize='sm'
                subtitle="Enhanced Visibility and Safety during nighttime operations"
                contentPosition="top-left"
                backgroundVideo='/videos/night-video.mp4'
                overlayStyle="light"
                textAlign='left'
            />

            {/* <Slider
                slides={[
                    {
                        title: 'MADE IN INDIA. BUILT FOR INDIA.',
                        description: 'Designed, engineered, and manufactured in India, the P10 Pro is optimized for Indian agricultural conditions — from high temperatures and dust to varied terrain and field sizes — ensuring reliable performance across regions.',
                        backgroundImage: '/images/p10pro-bannershot.png',
                    },
                    {
                        title: 'COMPACT BY DESIGN',
                        description: 'The P10 Pro features the most compact airframe in its class among Indian agricultural drones, enabling rapid deployment, easier transport, and operation in confined or fragmented farmlands without compromising payload capability.',
                        backgroundImage: '/images/p10pro-compact.png',

                    },
                ]}
            /> */}

            {/* <Slider
                slides={[
                    {
                        title: 'DAY & NIGHT OPERATIONS',
                        description: 'Engineered for extended operational windows, the P10 Pro supports both daytime and night-time missions, enabling farmers and operators to maximize productivity during optimal spraying conditions.',
                        backgroundImage: '/images/p10pro-night.png',
                    },
                    {
                        title: 'AUTONOMOUS FIELD OPERATIONS',
                        description: 'Designed for fully autonomous missions, the P10 Pro executes predefined flight paths with centimeter-level accuracy. Terrain-following and obstacle avoidance allow safe operation in complex agricultural environments without constant human intervention.',
                        backgroundImage: '',
                    },
                    {
                        title: 'PRECISION SPRAYING',
                        description: 'The P10 Pro delivers uniform chemical distribution through an intelligent spraying system that dynamically adjusts flow rate based on speed, altitude, and payload weight. This ensures optimal coverage while minimizing chemical waste and environmental impact.',
                        backgroundImage: '/images/p10pro-spray.png',

                    },
                ]}
            /> */}

            {/* <Slider
                slides={[
                    {
                        title: 'Become a Franchisee',
                        description: 'Become a franchisee and expand your agricultural spraying operations with the P10 Pro. Our franchise program offers a structured path to success, providing training, support, and resources to help you grow your business.',
                        backgroundImage: '/images/p10layout5.jpg',
                    },
                    {
                        title: 'Become a Pilot',
                        description: 'Become a pilot and expand your agricultural spraying operations with the P10 Pro. Our franchise program offers a structured path to success, providing training, support, and resources to help you grow your business.',
                        backgroundImage: '',
                    },
                ]}
            /> */}

            <FeatureShowcase
                title="Introducing India's First Ultra-Compact Agricultural Drone!"
                features={[
                    'Light enough to carry anywhere.',
                    'Made for Indian conditions.',
                    'Saves transportation costs.',
                    'Covers 1 Acre in 5 Minutes.',
                    'Ultra Fast battery charging.',
                ]}
                ctaText="Questions? Contact Today!"
                ctaLink="/contact"
                mainImage="/images/p10pro-bannershot.png"
                galleryImages={[
                    '/images/portable1.png',
                    '/images/portable2.png',
                    '/images/portable3.png',
                    '/images/portable4.png',
                ]}
            />
            <Banner
                title=""
                titleSize='hero'
                subtitle=""
                contentPosition="center"
                backgroundImage='/images/p10pro-comparison.png'
                overlayStyle="light"
                textAlign='center'
            />

            <Banner
                title=""
                titleSize='hero'
                subtitle=""
                contentPosition="center"
                backgroundImage='/images/agri-banner-4.png'
                overlayStyle="light"
                textAlign='center'
            />

            <Newsletter />
        </>
    );
}
