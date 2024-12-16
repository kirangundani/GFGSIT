const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

router.post('/send-email', async (req, res) => {
    try {
        console.log("Email Came: ", req.body.email);

        // Connect with the SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            // true for 465, false for other ports
            auth: {
                user: 'pcbldmn2jjzaclmp@ethereal.email', // Ethereal user
                pass: 'KrAUN73gaH5scrSfwV',             // Ethereal password
            },
        });

        // Send the email
        let info = await transporter.sendMail({
            from: 'venkatesh77644@gmail.com',
            to: req.body.email,
            subject: "GFG Response",
            text: 'Thank you for visiting our website. Our team will reach out to you soon.',
        });

        console.log("Message sent: %s", info.messageId);

        // Send a response back to the client
        res.status(200).json({ message: 'Email sent successfully!', messageId: info.messageId });
    } catch (error) {
        console.error("Error sending email:", error);

        // Handle errors gracefully
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
});

module.exports = router;