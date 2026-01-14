import { Banner } from '@/components';

export const metadata = {
    title: 'Updates | DroneAnatomy',
    description: 'Latest news and updates from DroneAnatomy. Product announcements, company news, and industry insights.',
};

export default function UpdatesPage() {
    return (
        <>
            <Banner
                title="Updates"
                subtitle="Stay informed with the latest news from DroneAnatomy. Product launches, company announcements, and industry insights."
                contentPosition="center-left"
                overlayStyle="dark"
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
