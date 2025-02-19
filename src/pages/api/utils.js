import nodemailer from "nodemailer";

const emailConfig = {
                    "name": "SMTP Configuration",
                    "server": "smtp-relay.brevo.com",
                    "port": 587,
                    "user": "hirajaram@gmail.com",
                    "pass": "sJZnWIHO7dBVQrF5",
                    "from": "eamsupport@arvamtech.com",
                    "group": "adhiyaman@arvamtech.com,rajaraman@arvamtech.com,venkat@arvamtech.com", 
                  }

const smtpobj = {
                host: emailConfig.server,
                port: emailConfig.port,
                auth: {
                    user: emailConfig.user,
                    pass: emailConfig.pass,
                },
                };

//console.log("SMTP Object", smtpobj);
export const transporter = nodemailer.createTransport(smtpobj);

export const mailOptions = {
  from: emailConfig.from,
  to: emailConfig.group,
};