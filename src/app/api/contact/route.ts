import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      workEmail, 
      company, 
      stage, 
      step, 
      goal, 
      notes, 
      dealSize,
      website 
    } = body;

    const recipientEmail = "kamal0sharma02@gmail.com";
    const userEmail = email || workEmail;

    // Send directly to FormSubmit ajax endpoint for kamal0sharma02@gmail.com
    const formSubmitPayload = {
      _subject: `New Saini Nexus Lead: ${stage ? `Stage ${step || ''} - ${stage}` : (goal || 'Strategy Audit')}`,
      _template: "table",
      _captcha: "false",
      "Full Name": name || "Not provided",
      "Work Email": userEmail || "Not provided",
      "Company": company || "Not provided",
      "Website": website || "Not provided",
      "Target Stage": stage ? `Stage ${step || ''}: ${stage}` : "General Strategy Call",
      "Primary Goal": goal || "Commercial Architecture Audit",
      "Deal Size / ACV": dealSize || "Not specified",
      "Notes & Context": notes || "None provided",
      "Submission Timestamp": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      "Source URL": request.headers.get("referer") || "https://saininexus.com"
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formSubmitPayload)
      });

      if (!response.ok) {
        console.warn("FormSubmit proxy status:", response.status);
      }
    } catch (fetchErr) {
      console.error("Error dispatching to FormSubmit:", fetchErr);
    }

    return NextResponse.json({
      success: true,
      message: "Lead received and forwarded to strategy team."
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, message: "Error processing submission." },
      { status: 500 }
    );
  }
}
