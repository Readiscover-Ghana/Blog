import { NextResponse } from 'next/server';
import Mailgun from 'mailgun.js';
import formData from 'form-data';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    await mg.messages.create(process.env.MAILGUN_DOMAIN || '', {
      from: 'waitlist@readiscoverghana.com',
      to: ['richmond@readiscoverghana.com'],
      subject: 'New Waitlist Signup',
      text: `New user joined the waitlist: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Mailgun error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
