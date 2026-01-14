import { Banner } from '@/components';

export const metadata = {
    title: 'Privacy Policy | DroneAnatomy',
    description: 'DroneAnatomy privacy policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
    return (
        <>
            <Banner
                title="Privacy Policy"
                subtitle="Your privacy matters to us. Learn how we collect, use, and protect your personal information."
                contentPosition="center-left"
                overlayStyle="dark"
            />
        </>
    );
}
