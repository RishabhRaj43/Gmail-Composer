import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.post("/send", async (req, res) => {
  try {
    const auth = process.env.auth || false;
    const pass = process.env.pass || false;
    if (!auth || !pass) {
      return res
        .status(500)
        .json({ error: "Please set auth and pass in .env file" });
    }
    
    // console.log(auth, pass);
    const { name, fromMail, subject, toMail, intro, body, footer } = req.body;

    // console.log(req.body);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: auth,
        pass: pass,
      },
    });

    const html = `
    <p>This message is sent from ${name} from ${fromMail}</p>
  <h1 style="color: #000; text-align: center; font-size: 24px;">${intro}</h1>
  <p class="color: #fff">${body}</p>
  <div style="background-color: #1a1a1a; color: #fff; padding: 20px; border-top: 1px solid #333; text-align: center;">
    <p style="font-size: 14px; color: rgba(255, 255, 255, 0.7); margin: 0;">${footer}</p>
  </div>
    `;

    await transporter.sendMail({
      from: fromMail,
      to: toMail,
      subject: `${subject}`,
      html: html,
    });

    return res.status(200).json("Sent");
  } catch (err) {
    console.log(err.message);
    res.status(500).json("Internal Server Error");
  }
});

export default router;
