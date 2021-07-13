const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key:process.env.API_KEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOption = {
        from: process.env.FROM,
        to: email,
        subject,
        text
    };
    
    transporter.sendMail(mailOption, (err, data) => {
        if(err) {
            console.log(err);
            return cb(err, null)
        }else {
            console.log('messagesent!!!')
            console.log(data)
            return cb(null, data)
        }
    })
}

module.exports = sendMail;

