import { Banner } from '@/components';

export default function Home() {
    return (
        <>
            {/* Hero Banner */}
            <Banner
                title="Making Autonomous Flight Inevitable"
                subtitle="Drone Anatomy exists to build the fundamental systems that will define the next era of autonomous aviation"
                ctaText="Explore"
                ctaLink="/about"
                backgroundImage='/images/hero_banner.jpg'
                // backgroundVideo='/videos/dronehero.mov'
                backgroundImageMobile='/images/hero_banner_mob.jpg'
                contentPosition="center-left"
                overlayStyle="dark"
            />

            {/* Drone X1 Banner */}
            <Banner
                title="AUTONOMOUS DEFENCE AIRSPACE DOMINANCE SYSTEMS"
                subtitle="(OUTCOMES > SPECIFICATIONS)"
                ctaText="Explore"
                ctaLink="/about"
                // backgroundImage='/images/layout2.jpg'
                // backgroundImageMobile='/images/layout2_mob.jpg'
                backgroundVideo='/videos/drone_in_the_sky.mp4'
                contentPosition="bottom-right"
                overlayStyle="light"
            />

            {/* Enterprise Solutions Banner */}
            <Banner
                title="The infrastructure behind autonomous flight"
                subtitle="We design and build the system that make autonomous aviation reliable, scalable, and inevitable."
                ctaText="Explore"
                ctaLink="/updates"
                backgroundImage='/images/layout3.jpg'
                contentPosition="top-left"
                overlayStyle="dark"
            />

            {/* Drone X1 Banner */}
            <Banner
                title="Indigenous by design"
                subtitle="Our systems are developed and manufactured in India, reducing dependency while building sovereign capability for autonomous aviation."
                ctaText="Know More"
                ctaLink="/products/p10-pro"
                backgroundImage='/images/layout4.jpg'
                contentPosition="top-right"
                overlayStyle="dark"
            />

            {/* Launches Banner */}
            <Banner
                title="From Systems to Missions"
                subtitle="We design from failure -> prevention -> reliability."
                ctaText="Learn More"
                ctaLink="/about"
                backgroundImage='/images/layout5.jpg'
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
