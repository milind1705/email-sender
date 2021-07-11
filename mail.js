const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key:process.env.API_KEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOption = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: 'testing',
    text:'this is taste mail'
};

transporter.sendMail(mailOption, (err, data) => {
    if(err) {
        console.log(err);
    }else {
        console.log('messagesent!!!')
        console.log(data)
    }
})