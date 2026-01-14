import { Banner } from '@/components';

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <Banner
        title="Making Autonomous Flight Inevitable"
        subtitle="Drone Anatomy exists to build the fundamental systems taht will define the next era of autonomous aviation"
        ctaText="Explore"
        ctaLink="/products"
        // backgroundImage='/images/new04.jpg'
        backgroundVideo='/videos/dronehero.mov'
        backgroundImageMobile='/images/dronehero_mob.jpg'
        contentPosition="center-left"
        overlayStyle="dark"
      />

      {/* Drone X1 Banner */}
      <Banner
        title="Engineering Autonomous Aerial Systems"
        subtitle="Drone Anatomy designs and builds autonomous drones for defense, logistics, and industrial applications-engineered from first principles for reliability, endurance, and real-world deployment"
        ctaText="View Drones"
        ctaLink="/products"
        // backgroundImage='/images/layout2.jpg'
        // backgroundImageMobile='/images/layout2_mob.jpg'
        backgroundVideo='/videos/vtol_in_the_sky.mov'
        contentPosition="top-right"
        overlayStyle="dark"
      />

      {/* Enterprise Solutions Banner */}
      <Banner
        title="Enterprise Solutions"
        subtitle="Deploy entire drone fleets with centralized command. Real-time monitoring, automated missions, and enterprise-grade security for industrial applications."
        ctaText="Enterprise"
        ctaLink="/enterprise"
        backgroundImage='/images/layout3.jpg'
        contentPosition="top-left"
        overlayStyle="dark"
      />

      {/* Drone X1 Banner */}
      <Banner
        title="Drone X1"
        subtitle="Our flagship autonomous drone with 8K imaging, 60-minute flight time, and AI-powered obstacle avoidance. Built for professionals who demand excellence."
        ctaText="Learn More"
        ctaLink="/products/drone-x1"
        backgroundImage='/images/layout4.jpg'
        contentPosition="top-right"
        overlayStyle="dark"
      />

      {/* Launches Banner */}
      <Banner
        title="Upcoming Launches"
        subtitle="Stay ahead with our latest innovations. Join the waitlist for exclusive early access to next-generation drone technology."
        ctaText="View Schedule"
        ctaLink="/launches"
        backgroundImage='/images/layout5.jpg'
        contentPosition="center-left"
        overlayStyle="light"
      />
    </>
  );
}
