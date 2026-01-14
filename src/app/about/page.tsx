import { Banner, StatsSection, CardGrid, Slider, Newsletter } from '@/components';

export const metadata = {
    title: 'About | DroneAnatomy',
    description: 'Learn about DroneAnatomy - our mission, vision, and the team behind advanced aerial technology.',
};

export default function AboutPage() {
    return (
        <>
            <Banner
                subtitle="We're on a mission to revolutionize industries through advanced aerial technology. Founded by aerospace engineers and drone enthusiasts."
                contentPosition="center"
                backgroundImage="/images/aboutlayout1.jpg"
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
                        description: 'DroneAnatomy was founded by a team of aerospace engineers with a vision to revolutionize aerial technology.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2016',
                        title: 'First Product Launch',
                        description: 'We launched our first commercial drone, setting new standards for reliability and performance.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2017',
                        title: 'Enterprise Solutions',
                        description: 'Expanded into enterprise solutions, partnering with major corporations for industrial applications.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2018',
                        title: 'Global Recognition',
                        description: 'Received international awards for innovation and established presence in 10 countries.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2019',
                        title: 'Research & Development',
                        description: 'Opened our advanced R&D facility, pushing boundaries in autonomous flight technology.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2020',
                        title: 'Sustainable Innovation',
                        description: 'Launched eco-friendly drone line with extended battery life and recyclable components.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2021',
                        title: 'AI Integration',
                        description: 'Integrated advanced AI capabilities for smarter navigation and obstacle avoidance.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2022',
                        title: 'Industry Leadership',
                        description: 'Became the leading drone manufacturer in the enterprise sector with record sales.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2023',
                        title: 'Next-Gen Platform',
                        description: 'Unveiled our next-generation drone platform with revolutionary modular design.',
                        image: '/images/DSC07310.JPG',
                    },
                    {
                        preTitle: '2024',
                        title: 'Service Expansion',
                        description: 'Launched comprehensive drone-as-a-service offerings for businesses of all sizes.',
                        image: '/images/DSC07310.JPG',
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
