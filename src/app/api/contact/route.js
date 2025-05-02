import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, city, course } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Gmail address stored in .env.local
        pass: process.env.EMAIL_PASS,  // App password stored in .env.local
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Course Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        City: ${city}
        Selected Course: ${course}
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to send email', error }), { status: 500 });
  }
}
