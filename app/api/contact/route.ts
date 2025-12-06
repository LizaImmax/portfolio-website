import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log("Processing contact form submission from:", email);

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Resend's test domain
      to: ["immaxliza@gmail.com"], // Your email
      replyTo: email, // Sender's email for easy reply
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333EA;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #9333EA; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            Sent from your portfolio website at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json(
      { message: "Message sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
