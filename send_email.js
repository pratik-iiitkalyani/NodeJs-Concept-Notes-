/*******Nodemailer is a module for Node.js applications
 to allow easy as cake email sending*/

// Require Nodemailer
const Nodemailer = require('nodemailer');

/*(All public Nodemailer methods support both callbacks and Promises (if callback is omitted). You need to have at least Node
 v8.0.0 if you want to use async..await with Nodemailer.)*/

 // Create Transport //
 const Transporter = Nodemailer.createTransport({
 	service: 'gmail',		                // using gmail as transport service
 	auth: {
 		user: 'pratik@iiitkalyani.ac.in',   // specifying email ans password to login
 		pass: 'XXXXXXXXXX'		// and send mail
 	}
 });

 //  configuration object where we will be configuring our email details.

 const mailOption = {
 	from: 'pratik@iiitkalyani.ac.in',                                  // sender email
 	to: 'pkraja121dss@gmail.com, pkraja153dss@gmail.com',              // list of receiver email(reflect in BCC)
 	subject: "Sending email via Nodemailer",                           // subject of email
 	text: 'Hi',                                                        // body of email
 	html: '<h1>Welcome</h1><p>That was easy!</p>'                      // send html
 }

/* Deliver the message object using the
 sendMail() method of your previously created transporter */

Transporter.sendMail(mailOption, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});