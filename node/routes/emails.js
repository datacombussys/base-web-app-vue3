'use strict'

var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require ('fs')
var ejs = require('ejs')

const views = path.join(__dirname, '../views/')

const datetime = new Date().toLocaleString()

/* ********************************************************************************* */


// Notify of Trades
router.get('/notify', function(req, res, next) {
	// console.log("Sending Trade Notificaiton Email", req.body);
	res.render('index', {
		type: "ORDER_FILL", 
		reason: "TAKE_PROFIT_ORDER", 
		title: "Trade Notification", 
		symbol: "EURUSD",
		price: 1.2345,
		direction: "Short",
	})



// try {
// 	// Invoke the next step here with the file data
// 	ejs.renderFile(views+ "index.ejs", {
// 		type: "ORDER_FILL", 
// 		reason: "TAKE_PROFIT_ORDER", 
// 		title: "Trade Notification", 
// 		symbol: "EURUSD",
// 		price: 1.2345,
// 		direction: "Short",
		
// 	}, function (err, data) {
// 		if (err) {
// 				// console.log(err);
// 		} else {
// 			res.render(data)

			// const textMsg = `"You have successfully made a trade"`
			// let mailOptions = {
			// 	from: transporter.options.auth.user,
			// 	to: "ian@datacomnetsol.com",
			// 	subject: 'Trade Notification',
			// 	attachments: [],
			// 	html: data
			// };
			// transporter.sendMail(mailOptions, function(error, response) {
			// 	if (error) {
			// 		// console.log('transporter error', error);
			// 		res.status(400).render('error', {error: error});
			// 	} else {
			// 		// console.log('transporter response', response);
			// 		res.status(200).send('Email Successfully Sent');
			// 	}
			// 	transporter.close();
			// });
	// 	} 			
	// });
	// } catch(error) {
	// 	res.status(500).render('error', {error: error});
	// }
});


/******************************************** GET METHODS ********************************************* */

router.get('/', (req, res) => {
	try {
		res.render('emails/merchant-transaction.hbs', { title: "Datacom's Express Application", layout: 'email-main'});
	} catch(error) {
		// console.error('error', error)
		res.status(500).render('error', {error: error});
	}
});
router.get('/pw-reset', (req, res) => {
	try {
		res.render('emails/password-reset.hbs', { name: "Ian Christensen", email: 'ian@ianchristensen.com'});
	} catch(error) {
		// console.error('error', error)
		res.status(500).render('error', {error: error});
	}
});
router.get('/receipt', (req, res) => {
	res.render('error', {error: process.env});
	// res.send("This is my response")
})


// Save Email Settings
//Not working on Live server
router.get('/save-settings', function(req, res, next) {
	// console.log("Save Email Settings Received request, body", req.body);

	

});


module.exports = router;