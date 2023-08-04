

// // const sandbox = "sandbox9762bdd2c2bc4b5ea57587dccfb2a20d.mailgun.org"
// // const private = "9470abccea3310f74fb069af11b2710f-4e034d9e-bb56f0db"
// // const public = "pubkey-7738bd42f93bc2b31cf113a51ba43be8"


// import formData from "form-data";
// import Mailgun from "mailgun.js";

// const mailgun = new Mailgun(formData);
// // const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || '9470abccea3310f74fb069af11b2710f-4e034d9e-bb56f0db'});

// const sandbox = "sandbox9762bdd2c2bc4b5ea57587dccfb2a20d.mailgun.org"

// const defaultOptions = {
//     to: ["c.muetterlein@gmail.com"],
//     subject: "Hello",
//     html: "<h1>Testing some Mailgun awesomeness!</h1>"
// }

// let mg;

// export const sendMail = ({ to, subject, html } = defaultOptions) => {
//     if (!mg) {
//         const mg = mailgun.client({
//             username: 'api', key: process.env.MAILGUN_API_KEY || '9470abccea3310f74fb069af11b2710f-4e034d9e-bb56f0db',

//         });
//     }


//     return mg.messages.create(sandbox, {
//         from: `Excited User <mailgun@${sandbox}>`,
//         to: to,
//         subject: subject,
//         html: html,
//     })
// }

