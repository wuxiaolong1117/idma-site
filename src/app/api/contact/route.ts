import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, role, interest, message, website } = body;
    
    // Honeypot validation - if website field is filled, it's likely spam
    if (website) {
      return NextResponse.json(
        { ok: false, error: "Invalid request" },
        { status: 400 }
      );
    }
    
    // Basic validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { ok: false, error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }
    
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }
    
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }
    
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { ok: false, error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }
    
    // TODO: Add rate limiting here
    // Example: Check if IP has made too many requests in a short time period
    // You can use libraries like 'rate-limiter-flexible' or implement custom logic
    
    // TODO: Integrate with email service provider
    // Examples: SendGrid, AWS SES, Resend, Nodemailer with SMTP
    // For now, we'll just log the data (in production, send email here)
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "",
      role: role?.trim() || "",
      interest: interest || "",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });
    
    // In production, you would:
    // 1. Send email using your email service provider
    // 2. Optionally store in database
    // 3. Send confirmation email to user
    
    return NextResponse.json(
      { ok: true, message: "Thank you for your message. We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
