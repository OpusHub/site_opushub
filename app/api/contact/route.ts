import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Send to FormSubmit.co (simplest option, just requires email confirmation on first use)
        // Using the user's email: victor@opusbr.com
        const response = await fetch('https://formsubmit.co/ajax/victor@opusbr.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: `🚀 Novo Lead Opus Hub: ${data.name}`,
                _template: 'table',
                _captcha: 'false', // Disable captcha for cleaner flow
                ...data,
            }),
        });

        if (response.ok) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 400 });
        }
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
