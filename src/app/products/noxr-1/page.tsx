import { Banner, Slider, Newsletter, FeatureShowcase, Counter, StatsSection } from '@/components';

export const metadata = {
    title: 'NOXR-1 | DroneAnatomy',
    description: 'NOXR-1 - The ultimate professional drone with advanced AI capabilities and unmatched performance.',
};

export default function Noxr1Page() {
    return (
        <>
            <Banner
                title="NOXR-1"
                titleSize='hero'
                subtitle="AGRICULTURE DRONE, MADE FOR INDIAN CONDITIONS."
                contentPosition="center"
                backgroundImage='/images/p10.png'
                // backgroundVideo='/videos/opening-drone.mp4'
                overlayStyle="none"
                textAlign='center'
                showScrollIndicator
                animate={true}
            />
            <StatsSection
                stats={[
                    { value: 596, label: 'Completed Missions' },
                    { value: 556, label: 'Total Landings' },
                    { value: 519, label: 'Total Reflights' },
                ]}
            />


            <Slider
                slides={[
                    {
                        title: 'NOXR-1 Overview',
                        description: "The Drone Anatomy NOXR-1 is a high-performance agricultural drone designed for precision spraying, crop monitoring, and autonomous field operations. Engineered for reliability and efficiency, NOXR-1 integrates advanced flight control, intelligent payload systems, and rugged airframe construction to operate consistently across large and demanding agricultural environments.",
                        backgroundImage: '/images/p10pro-overview.png',
                        // backgroundVideo: '/videos/drone-show.mp4',
                        // sideVideo: '/videos/opening-drone.mp4',
                        specs: [
                            { label: 'Max Flight Time', value: '30 minutes' },
                            { label: 'Payload Capacity', value: '10kg' },
                            { label: 'SPRAY WIDTH', value: '4 - 6 m' },
                            { label: 'POSITIONING SYSTEM', value: 'GPS Assisted Navigation' },
                        ],
                    },
                ]}
            />


            <Banner
                title="Video"
                titleSize='lg'
                subtitle="Falcon 9 in flight"
                contentPosition="bottom-left"
                backgroundVideo='/videos/spray.mp4'
                backgroundImageMobile='/images/p10pro-spray-m.png'
                overlayStyle="light"
                textAlign='left'
            />

            <Slider
                slides={[
                    {
                        title: 'NOXR-1 Overview',
                        description: "The Drone Anatomy NOXR-1 is a high-performance agricultural drone designed for precision spraying, crop monitoring, and autonomous field operations. Engineered for reliability and efficiency, NOXR-1 integrates advanced flight control, intelligent payload systems, and rugged airframe construction to operate consistently across large and demanding agricultural environments.",
                        backgroundImage: '/images/p10pro-overview.png',
                        // backgroundVideo: '/videos/drone-show.mp4',
                        // sideVideo: '/videos/opening-drone.mp4',
                        specs: [
                            { label: 'Max Flight Time', value: '30 minutes' },
                            { label: 'Payload Capacity', value: '10kg' },
                            { label: 'SPRAY WIDTH', value: '4 - 6 m' },
                            { label: 'POSITIONING SYSTEM', value: 'GPS Assisted Navigation' },
                        ],
                    },
                ]}
            />
            <Banner
                title="Night Flying Capability - Equipped with bright LED lights"
                titleSize='sm'
                subtitle="Enhanced Visibility and Safety during nighttime operations"
                contentPosition="top-left"
                backgroundVideo='/videos/night-video.mp4'
                backgroundImageMobile='/images/updates-hero.png'
                overlayStyle="light"
                textAlign='left'
            />

            <Newsletter />
        </>
    );
}
