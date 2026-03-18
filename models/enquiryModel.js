const mongoose = require('mongoose');

const validator = require('validator');


const enquirySchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, 'Please enter your name'],
		trim: true
	},

	email: {
		type: String,
		required: [true, 'Please enter your email address'],
		trim: true,
		validate: [validator.isEmail, 'Please provide a valid Email']
	},

	phone: {
		type: String,
		trim: true
	},

	enquiry: {
		type: String,
		required: [true, 'Please select an enquiry type'],
		lowercase: true,
		enum: [
			'general-enquiry',
			'quick-quote',
			'new-website',
			'simple-business-website',
			'online-store',
			'booking-enquiry-website',
			'not-sure-yet'
		]
	},

	message: {
		type: String,
		required: [true, 'Please enter a message'],
		trim: true,
		minLength: [10, 'Message must be at least 10 characters'],
		maxLength: [1000, 'Message cannot be more than 1000 characters']
	}
},
	{
		timestamps: true
	}
)




const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;