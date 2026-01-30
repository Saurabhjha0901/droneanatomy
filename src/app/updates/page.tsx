import { Banner, Newsletter } from '@/components';

export const metadata = {
    title: 'Updates | DroneAnatomy',
    description: 'Latest news and updates from DroneAnatomy. Product announcements, company news, and industry insights.',
};

export default function UpdatesPage() {
    return (
        <>
            <Banner
                title="Updates"
                titleSize='hero'
                subtitle="Enter your email to sign up for DroneAnatomy updates"
                contentPosition="center"
                backgroundImage='/images/updates-hero.png'
                textAlign='center'
                overlayStyle="dark"
                showEmailSignup
            />

            <Banner
                title="Latest News"
                subtitle="Follow our journey as we continue to push the boundaries of what's possible with drone technology."
                ctaText="Read Blog"
                ctaLink="/updates/blog"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
