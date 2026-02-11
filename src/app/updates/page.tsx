import { Banner, ContentGrid, ContentItem } from '@/components';

export const metadata = {
    title: 'Updates | DroneAnatomy',
    description: 'Latest news and updates from DroneAnatomy. Product announcements, company news, and industry insights.',
};

// Hashnode GraphQL query
const HASHNODE_QUERY = `{
  publication(host: "droneanatomy.hashnode.dev") {
    posts(first: 10) {
      edges {
        node {
          id
          title
          brief
          slug
          coverImage {
            url
          }
          publishedAt
          tags {
            name
          }
        }
      }
    }
  }
}`;

// Fetch blog posts from Hashnode
async function getHashnodePosts(): Promise<ContentItem[]> {
    try {
        const res = await fetch('https://gql.hashnode.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: HASHNODE_QUERY }),
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error('[Hashnode] API responded with status:', res.status);
            return [];
        }

        const json = await res.json();
        const posts = json?.data?.publication?.posts?.edges;

        console.log('[Hashnode] Fetched posts count:', posts?.length ?? 0);

        if (!posts || posts.length === 0) return [];

        return posts.map((edge: { node: { id: string; title: string; brief: string; slug: string; coverImage?: { url: string }; publishedAt: string; tags?: { name: string }[] } }) => {
            const post = edge.node;
            const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
            const category = post.tags?.[0]?.name || 'Blog';

            return {
                id: post.id,
                title: post.title,
                excerpt: post.brief,
                image: post.coverImage?.url || '/images/hero_banner.jpg',
                date,
                category,
                slug: post.slug,
                externalUrl: `https://droneanatomy.hashnode.dev/${post.slug}`,
            };
        });
    } catch (error) {
        console.error('[Hashnode] Failed to fetch posts:', error);
        return [];
    }
}

// News articles data
const newsArticles: ContentItem[] = [
    {
        id: '1',
        title: 'From 10th-grade Student to Drone Startup Founder',
        excerpt: 'DD National profiles an inspiring drone startup journey.',
        image: 'https://img.youtube.com/vi/wzhFkAOHIrs/hqdefault.jpg',
        date: 'Jan 6, 2026',
        category: 'DD National',
        slug: '10th-grade-student-drone-founder',
        externalUrl: 'https://www.youtube.com/watch?v=wzhFkAOHIrs',
    },
    {
        id: '2',
        title: '3 युवाओं की कहानी जो आपको याद दिलाएगी थ्री इडियट्स',
        excerpt: 'The Great India highlights inspiring youth stories.',
        image: 'https://pbs.twimg.com/media/G5J7gEEa4AAUkr5?format=jpg&name=900x900',
        date: 'Nov 8, 2025',
        category: 'The Great India',
        slug: 'three-youths-story-three-idiots',
        externalUrl: 'https://x.com/thegreatindiav/status/1986967154231525392',
    },
    {
        id: '3',
        title: 'India’s Digital Revolution: From 25 Cr to 97 Cr Internet Users',
        excerpt: 'DD India explores India’s massive digital transformation.',
        image: 'https://img.youtube.com/vi/IQPYPF3ohXA/hqdefault.jpg',
        date: 'Sep 15, 2025',
        category: 'DD India',
        slug: 'indias-digital-revolution-internet-users',
        externalUrl: 'https://www.youtube.com/watch?v=IQPYPF3ohXA',
    },
    {
        id: '4',
        title: 'Drone Anatomy',
        excerpt: 'DD National feature highlighting Drone Anatomy.',
        image: 'https://instagram.fdel64-1.fna.fbcdn.net/v/t51.82787-15/573414833_18323507794213888_4897678111563317514_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=Mzc1NjE5MjA5OTczODgyNTY5MzE4MzIzNTA3Nzg4MjEzODg4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjkwMHgxNjAwLnNkci5DMyJ9&_nc_ohc=w0ZFHp9CadEQ7kNvwE1-PCH&_nc_oc=Adnn9DszkD9QV1-wKlm-C6p6K4zPYssqeaZpZ2SniiCiDHHoY0aQsDTVEXCRglaLbKM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fdel64-1.fna&_nc_gid=gytYcl-E8xn1Qvs1RX9Piw&oh=00_AfugLKbMdxIQb8yM72vwl_r5D6Fy4czcz4jlWNcgqbVlvg&oe=6990F9E6',
        date: 'Nov 1, 2025',
        category: 'DD National',
        slug: 'drone-anatomy-dd-national',
        externalUrl: 'https://www.instagram.com/reel/DQgrNBFD7Pd/',
    },
    {
        id: '5',
        title: 'डिग्री छोड़ थाम लिया ड्रोन',
        excerpt: 'News18 Hindi story on young innovators building drones.',
        image: 'https://images.news18.com/ibnkhabar/uploads/2025/11/three-idiots-real-hero-are-drone-anatomy-founders-2025-11-746e0a04cdfb920af603f9b9859a5c4a.jpg?impolicy=website&width=640&height=480',
        date: 'Nov 7, 2025',
        category: 'News18 Hindi',
        slug: 'degree-chhod-diya-drone',
        externalUrl: 'https://hindi.news18.com/news/business/money-making-tips-drone-anatomy-3-indian-youths-create-history-by-making-drones-for-agriculture-and-indian-army-ws-ln-9825790.html',
    },
    {
        id: '6',
        title: 'Deeptech, Not Policy Alone, Will Drive India’s Drone Growth',
        excerpt: 'Drone Anatomy CEO shares insights on India’s drone ecosystem.',
        image: 'https://techobserver.in/wp-content/uploads/2025/11/Saurabh-Jha-Founder-and-CEO-of-Drone-Anatomy-1068x601.webp',
        date: 'Nov 3, 2025',
        category: 'Tech Observer',
        slug: 'deeptech-will-drive-indias-drone-growth',
        externalUrl: 'https://techobserver.in/news/interviews/deeptech-not-policy-alone-will-drive-indias-drone-growth-drone-anatomy-ceo-318586/',
    },
    {
        id: '8',
        title: 'सौरव झा की उड़ान: गांव के लड़के ने बनाया देशी ड्रोन',
        excerpt: 'Inspirational story of Drone Anatomy founder on DD National.',
        image: 'https://img.youtube.com/vi/lc4bBdl1VDs/hqdefault.jpg',
        date: 'Nov 15, 2025',
        category: 'DD National',
        slug: 'saurabh-jha-ki-udaan',
        externalUrl: 'https://www.youtube.com/watch?v=lc4bBdl1VDs',
    },
    {
        id: '9',
        title: 'Inside Drone Anatomy: A Conversation with Founder & CEO Saurabh Jha',
        excerpt: 'In-depth interview with Drone Anatomy Founder & CEO.',
        image: '/images/news-placeholder.jpg',
        date: 'Nov 4, 2025',
        category: 'Suger Mint',
        slug: 'inside-drone-anatomy-saurabh-jha',
        externalUrl: 'https://sugermint.com/saurabhjha/',
    },
    {
        id: '10',
        title: 'Tech for Growth',
        excerpt: 'DD News highlights technology-led growth initiatives.',
        image: 'https://pbs.twimg.com/amplify_video_thumb/1967503475258077185/img/NVpz_utGWyBPYpvm.jpg',
        date: 'Sep 15, 2025',
        category: 'DD News',
        slug: 'tech-for-growth-dd-news',
        externalUrl: 'https://x.com/DDNewslive/status/1967504270892425718',
    },

    {
        id: '11',
        title: 'India–Israel Defence Partnership Enters New Phase',
        excerpt: 'Zee News reports on AI and counter-drone collaborations.',
        image: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2025/11/24/1867512-israel-india-pib.jpg?im=Resize=(700,400)',
        date: 'Nov 24, 2025',
        category: 'Zee News',
        slug: 'india-israel-defence-ai-drones',
        externalUrl: 'https://zeenews.india.com/india/india-israel-defence-partnership-enters-new-phase-with-ai-and-counter-drone-collaborations-2988583.html',
    },
    {
        id: '12',
        title: 'भारत–इजराइल रक्षा सहयोग का नया दौर',
        excerpt: 'Business World Hindi covers AI, drones, and digital border security.',
        image: 'https://cms.bwhindi.com/story-images/1764319626.jpg',
        date: 'Nov 28, 2025',
        category: 'Business World Hindi',
        slug: 'bharat-israel-raksha-sahyog-ai-drone',
        externalUrl: 'https://www.bwhindi.com/businessnews/india-israel-defense-cooperation-a-new-phase-of-border-security-and-technological-modernization-67986.html',
    },
];


// Fallback blog articles (shown when Hashnode has no posts)
const fallbackBlogArticles: ContentItem[] = [
    {
        id: 'b1',
        title: 'How Drones Are Revolutionizing Precision Agriculture in India',
        excerpt: 'A deep dive into how UAV technology is transforming farming practices across the subcontinent, from crop health monitoring to precision spraying and yield estimation.',
        image: '/images/agri-banner-4.png',
        date: 'Feb 7, 2026',
        category: 'Agriculture',
        slug: 'drones-revolutionizing-agriculture',
    },
    {
        id: 'b2',
        title: 'Understanding DGCA Drone Regulations: A Complete Guide',
        excerpt: 'Everything you need to know about India\'s drone regulations, licensing requirements, and compliance standards for commercial UAV operations.',
        image: '/images/layout3.jpg',
        date: 'Feb 2, 2026',
        category: 'Regulations',
        slug: 'dgca-drone-regulations-guide',
    },
    {
        id: 'b3',
        title: 'The Science Behind Multi-Spectral Crop Analysis',
        excerpt: 'How multi-spectral imaging from drones helps detect crop stress, disease, and nutrient deficiency before they become visible to the naked eye.',
        image: '/images/drone-services.png',
        date: 'Jan 25, 2026',
        category: 'Technology',
        slug: 'multi-spectral-crop-analysis',
    },
    {
        id: 'b4',
        title: 'Building Indigenous Drone Technology: The DroneAnatomy Story',
        excerpt: 'Our journey from a small team with a vision to becoming a leading force in India\'s indigenous drone manufacturing ecosystem.',
        image: '/images/layout4.jpg',
        date: 'Jan 18, 2026',
        category: 'Company',
        slug: 'building-indigenous-drone-tech',
    },
    {
        id: 'b5',
        title: 'Drone Battery Technology: What\'s Next?',
        excerpt: 'Exploring the latest advancements in battery technology that are pushing the boundaries of drone flight time and payload capacity.',
        image: '/images/battery.png',
        date: 'Jan 12, 2026',
        category: 'Engineering',
        slug: 'drone-battery-technology-future',
    },
    {
        id: 'b6',
        title: 'From Farm to Fleet: Scaling Drone Operations',
        excerpt: 'A practical guide to scaling drone operations from a single unit to a full fleet, covering logistics, maintenance, and workforce management.',
        image: '/images/hero_banner.jpg',
        date: 'Jan 8, 2026',
        category: 'Operations',
        slug: 'scaling-drone-operations',
    },
    {
        id: 'b7',
        title: 'AI and Computer Vision in Agricultural Drones',
        excerpt: 'How artificial intelligence and computer vision are enabling real-time crop analysis and autonomous decision-making in agricultural drones.',
        image: '/images/p10hero.jpg',
        date: 'Jan 3, 2026',
        category: 'AI & ML',
        slug: 'ai-computer-vision-agricultural-drones',
    },
    {
        id: 'b8',
        title: 'The Future of Autonomous Aviation in India',
        excerpt: 'Analysing the roadmap for autonomous aviation — from delivery drones to urban air mobility and beyond.',
        image: '/images/layout5.jpg',
        date: 'Dec 22, 2025',
        category: 'Industry',
        slug: 'future-autonomous-aviation-india',
    },
];

export default async function UpdatesPage() {
    // Fetch blog posts from Hashnode
    const hashnodePosts = await getHashnodePosts();
    const blogArticles = hashnodePosts.length > 0 ? hashnodePosts : fallbackBlogArticles;

    return (
        <>
            <div data-debug-hashnode={hashnodePosts.length} data-debug-first={blogArticles[0]?.title} style={{ display: 'none' }} />
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

            <ContentGrid
                title="Latest News"
                subtitle="Follow our journey as we continue to push the boundaries of drone technology"
                items={newsArticles}
                basePath="/updates"
                viewAllText="View All News"
                showLessText="Show Less"
            />

            <ContentGrid
                title="Blogs"
                subtitle="In-depth articles, guides, and insights from our team of drone engineers and industry experts"
                items={blogArticles}
                basePath="/updates"
                viewAllText="View All Blogs"
                showLessText="Show Less"
            />
        </>
    );
}
