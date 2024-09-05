const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});
const mailSender = async (email, title, body) => {
    if (!email) {
        console.error('No recipient email address defined.');
        return;
    }
    try {


        const info = await transporter.sendMail({
            from: 'Hive || by Madhu Mishra',
            to: email,
            subject: title,
            html: body
        });

        // console.log('Info of sent mail - ', info);
        return info;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = mailSender;