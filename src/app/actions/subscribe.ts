'use server';

export async function subscribeToLoops(formData: FormData) {
    const email = formData.get('email');
    const API_KEY = process.env.LOOPS_API_KEY;

    if (!email || typeof email !== 'string') {
        return { success: false, message: 'Email is required' };
    }

    if (!API_KEY) {
        console.error('LOOPS_API_KEY is missing');
        return { success: false, message: 'Internal server error' };
    }

    try {
        const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                email: email,
                userGroup: 'Newsletter',
                source: 'Website Signup',
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Loops API error:', data);
            return { success: false, message: data.message || 'Failed to subscribe' };
        }

        return { success: true, message: 'Successfully subscribed!' };
    } catch (error) {
        console.error('Subscription error:', error);
        return { success: false, message: 'Something went wrong. Please try again.' };
    }
}
