const config = require('./config.node.js')

const nodemailer = require('nodemailer');
const axios = require('axios')

var transporter = nodemailer.createTransport({
  host: config.NODEMAILER_EMAIL_HOST,
  secure: true, //Use TLS
	tls: {
		rejectUnauthorized: true
	},
	requireTLS: true,
	port: '465',
	// debug: true,
  auth: {
		user: config.NODEMAILER_EMAIL_ADDRESS,
    pass: config.NODEMAILER_EMAIL_PASSWORD
  },

	});
	// if(process.env.NODE_ENV != 'development') {
	// 	axios.get("http://patientpaymentportal.com/node/email-settings/").then((response) => {
	// 		// console.log('response', response)
	// 			try {
	// 				// console.log("transporter", transporter)
	// 				// console.log('response.data.smtpHost', response.data[0].smtpHost)
	// 				transporter.options.host = response.data[0].smtpHost
	// 				transporter.options.secure = response.data[0].SSL
	// 				transporter.options.tls = response.data[0].TLS
	// 				transporter.options.port = response.data[0].smtpPort
	// 				transporter.options.auth.user = response.data[0].username
	// 				transporter.options.auth.pass = response.data[0].password

	// 				// console.log("transporter options", transporter.options)
						
	// 				res.status(200).send('Updated Email Settings');

	// 		} catch(error) {
	// 			console.error('Set Email Settings error', error.response)
	// 			res.status(500).render('We encountered an error Updating your settings', error);
	// 		}

	// 	}).catch(error => {
	// 		console.error('error', error)
	// 	})
	// }
	

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    // console.log(error);
  } else {
    // console.log("Server is ready to send your emails");
  }
});


module.exports = { transporter };