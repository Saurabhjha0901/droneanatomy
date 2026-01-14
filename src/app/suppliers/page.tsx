import { Banner } from '@/components';

export const metadata = {
    title: 'Suppliers | DroneAnatomy',
    description: 'Become a DroneAnatomy supplier. Information for vendors and partners.',
};

export default function SuppliersPage() {
    return (
        <>
            <Banner
                title="Suppliers"
                subtitle="Partner with DroneAnatomy. We work with leading suppliers worldwide to source the best components for our drones."
                contentPosition="center-left"
                overlayStyle="dark"
            />

            <Banner
                title="Become a Supplier"
                subtitle="Interested in supplying components or services to DroneAnatomy? Get in touch with our procurement team."
                ctaText="Contact Procurement"
                ctaLink="mailto:suppliers@droneanatomy.com"
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
