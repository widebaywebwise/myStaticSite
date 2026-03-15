const Enquiry = require('./../models/enquiryModel');
const catchAsync = require('./../utilities/catchAsync');
const Email = require('./../utilities/email');

exports.createEnquiry = catchAsync(async (req, res, next) => {

	const newEnquiry = await Enquiry.create({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		enquiry: req.body.enquiry,
		message: req.body.message
	});

	const url = `${req.protocol}://${req.get('host')}/`


	await new Email(newEnquiry, url).enquiryEmail();

	res.status(201).redirect('/enquiry-success');

});