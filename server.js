const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse incoming JSON data

// Transporter configuration for sending emails using Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service provider
  auth: {
    user: "jeziljezil10@gmail.com", // Your email address
    pass: "idonkno1", // Your email password or App password
  },
});

// POST route to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, phoneNumber, company, file } = req.body;

  // Mail options
  const mailOptions = {
    from: "jeziljezil10@gmail.com",
    to: "jeziljezil10@gmail.com", // The email to send the form data to
    subject: "New Form Submission",
    text: `You have received a new form submission:
           Name: ${name}
           Email: ${email}
           Phone Number: ${phoneNumber}
           Company: ${company}`,
    // Attach file if available
    attachments: file
      ? [
          {
            filename: file.name,
            path: file.url, // File path or URL
          },
        ]
      : [],
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
    res.send({ success: true, message: "Email sent successfully" });
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
