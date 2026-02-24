import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendContactMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Contact from ${name}`,

      html: `
    <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:30px;">
      
      <div style="
        max-width:500px;
        margin:auto;
        background:#ffffff;
        padding:20px 25px;
        border-radius:8px;
        border:1px solid #e5e7eb;
      ">
        
        <h2 style="margin-bottom:20px; color:#111;">
          New Contact Message
        </h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>

        <div style="
          background:#f9fafb;
          padding:12px;
          border-radius:6px;
          margin-top:8px;
          line-height:1.5;
        ">
          ${message}
        </div>

      </div>
    </div>
  `,
    };

    await sgMail.send(msg);

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};
