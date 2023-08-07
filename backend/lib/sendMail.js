



// import formData from "form-data";
// import Mailgun from "mailgun.js";

// const mailgun = new Mailgun(formData);
// // const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || ''});

// const sandbox = ""

// const defaultOptions = {
//     to: ["c.muetterlein@gmail.com"],
//     subject: "Hello",
//     html: "<h1>Testing some Mailgun awesomeness!</h1>"
// }

// let mg;

// export const sendMail = ({ to, subject, html } = defaultOptions) => {
//     if (!mg) {
//         const mg = mailgun.client({
//             username: 'api', key: process.env.MAILGUN_API_KEY || '',

//         });
//     }


//     return mg.messages.create(sandbox, {
//         from: `Excited User <mailgun@${sandbox}>`,
//         to: to,
//         subject: subject,
//         html: html,
//     })
// }

