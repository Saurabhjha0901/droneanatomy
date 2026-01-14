import { Banner } from '@/components';

export const metadata = {
    title: 'Contact | DroneAnatomy',
    description: 'Get in touch with DroneAnatomy. Sales inquiries, support, and partnership opportunities.',
};

export default function ContactPage() {
    return (
        <>
            <Banner
                title="Get In Touch"
                subtitle="Have questions about our products or services? Our team is ready to help you find the perfect aerial solution."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Sales Inquiries"
                subtitle="Looking to purchase drones for your business? Our sales team can help you choose the right products and packages."
                ctaText="Contact Sales"
                ctaLink="mailto:sales@droneanatomy.com"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Technical Support"
                subtitle="Need help with your drone? Access our knowledge base or connect with our technical support team."
                ctaText="Get Support"
                ctaLink="/support"
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Partnership Opportunities"
                subtitle="Interested in partnering with DroneAnatomy? We're always open to collaboration with innovative companies."
                ctaText="Partner With Us"
                ctaLink="mailto:partnerships@droneanatomy.com"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
