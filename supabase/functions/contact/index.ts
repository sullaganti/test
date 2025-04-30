import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "npm:nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "POST") {
      throw new Error("Method not allowed");
    }

    // Get form data from request body
    const data: ContactFormData = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields");
    }

    // Initialize SMTP client
    const smtp = new SmtpClient({
      host: Deno.env.get("SMTP_HOST") || "",
      port: Number(Deno.env.get("SMTP_PORT")) || 587,
      secure: false,
      auth: {
        user: Deno.env.get("SMTP_USER") || "",
        pass: Deno.env.get("SMTP_PASS") || "",
      },
    });

    // Send email
    await smtp.sendMail({
      from: Deno.env.get("SMTP_FROM") || "",
      to: Deno.env.get("CONTACT_EMAIL") || "",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});