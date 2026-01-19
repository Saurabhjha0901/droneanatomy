import { Banner, StatsSection, CardGrid, Slider, Newsletter } from '@/components';

export const metadata = {
    title: 'About | DroneAnatomy',
    description: 'Learn about DroneAnatomy - our mission, vision, and the team behind advanced aerial technology.',
};

export default function AboutPage() {
    return (
        <>
            <Banner
                title="Our Belief"
                subtitle="The future of flight is autonomous and building it responsibly is one of the most important engineering challenges of our time."
                contentPosition="center"
                backgroundImage="/images/about-home.png"
                textAlign="center"
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
                        title: 'Making History',
                        description: 'DroneAnatomy has gained worldwide attention for a series of historic milestones. We are the first company to achieve fully autonomous long-range drone delivery, and our technology powers critical infrastructure inspections across the globe.',
                        backgroundImage: '/images/aboutlayout2.jpg',
                    },
                    {
                        title: 'Innovation First',
                        description: 'Our commitment to innovation drives everything we do. With over 100 patents and a world-class engineering team, we continue to push the boundaries of what is possible in aerial technology.',
                        backgroundImage: '',
                    },
                    {
                        title: 'Global Impact',
                        description: 'From agriculture to emergency response, our drones are making a difference in communities worldwide. We partner with organizations to deliver life-saving supplies to remote areas.',
                        backgroundImage: '',
                    },
                ]}
            />

            <Banner
                title="Our Mission"
                subtitle="To make advanced aerial technology accessible to enterprises and individuals worldwide, enabling new possibilities in data collection, inspection, and creative expression."
                contentPosition="center-left"
                backgroundImage="/images/aboutlayout3.jpg"
                overlayStyle="dark"
            />

            <Banner
                title="Our Vision"
                subtitle="A world where drones seamlessly integrate into everyday operations, making work safer, more efficient, and more sustainable."
                contentPosition="center-left"
                backgroundImage="/images/aboutlayout4.jpg"
                overlayStyle="dark"
            />

            <CardGrid
                sectionTitle="Our Journey"
                cards={[
                    {
                        preTitle: '2015',
                        title: 'The Beginning',
                        description: "Saurabh started with Drones at the age of 15 and got Awarded in the National Science Exhibition.",
                        image: '/images/j4.JPG',
                    },
                    {
                        preTitle: '2016',
                        title: 'Explored industry and met Mayank.',
                        description: "When two minds with a shared passion come together, great things happen - let's make magic!",
                        image: '/images/j6.JPG',
                    },
                    {
                        preTitle: '2017',
                        title: 'Excited from the business potential started with their first office.',
                        description: "The feeling of making money together as a team is like rocket fuel for your business - let's keep the momentum going and reach for the stars!",
                        image: '/images/j9.JPG',
                    },
                    {
                        preTitle: '2018',
                        title: 'Started delivering Made in India drones to Indian Army & met Dipanshu.',
                        description: "Our first product delivery is just the beginning - we're paving the way for a future full of innovation and success!",
                        image: '/images/j12.JPG',
                    },
                    {
                        preTitle: '2019',
                        title: 'Started making high pay load drones which market required.',
                        description: "Smart entrepreneurs pivot with the market - by adapting to changing demands, we're not just surviving, we're thriving!",
                        image: '/images/j.JPG',
                    },
                    {
                        preTitle: '2020',
                        title: 'Actual implementation of high pay load drones during covid for santization purposes.',
                        description: "Risk-taking meets innovation - using drones to sanitize in the time of COVID, we're not just adapting, we're changing the game!",
                        image: '/images/j10.JPG',
                    },
                    {
                        preTitle: '2021',
                        title: 'Advancement of business growth',
                        description: "Advancing in business is not just about reaching new heights - it's about pushing past boundaries, breaking through barriers, and achieving the impossible!",
                        image: '/images/j11.JPG',
                    },
                    {
                        preTitle: '2022',
                        title: 'THROTTLE UP :)',
                        description: "'Building a team is not just about growing headcount - it's about cultivating a community of leaders, empowering individuals to reach their full potential, and achieving collective greatness!'  so founded DAstrionics technologies Pvt Ltd with a vison to make in India for the world.",
                        image: '/images/j3.JPG',
                    },
                    {
                        preTitle: '2023',
                        title: 'Next-Gen Platform',
                        description: 'Unveiled our next-generation drone platform with revolutionary modular design.',
                        image: '/images/j5.JPG',
                    },
                    {
                        preTitle: '2024',
                        title: 'Service Expansion',
                        description: 'Launched comprehensive drone-as-a-service offerings for businesses of all sizes.',
                        image: '/images/j8.JPG',
                    },
                    {
                        preTitle: '2025',
                        title: 'Autonomous Fleet',
                        description: 'Introduced fully autonomous fleet management solutions for logistics companies.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2026',
                        title: 'Global Expansion',
                        description: 'Operating in over 30 countries, providing cutting-edge drone solutions worldwide.',
                        image: '/images/DSC07310.JPG',
                    },
                ]}
            />


            <Banner
                title="Join Our Team"
                subtitle="We're always looking for talented engineers, designers, and pilots to join our mission. Explore career opportunities."
                ctaText="View Careers"
                ctaLink="/careers"
                backgroundImage="/images/aboutlayout5.jpg"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Newsletter />
        </>
    );
}
