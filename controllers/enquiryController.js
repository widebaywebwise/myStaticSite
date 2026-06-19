const Enquiry = require('./../models/enquiryModel');
const catchAsync = require('./../utilities/catchAsync');
const Email = require('./../utilities/emailClass');

exports.createEnquiry = catchAsync(async (req, res, next) => {

	/// Honeypot controller

	if (req.body.website && req.body.website.trim() !== '') {

		console.log('Honeypot spam enquiry blocked:', {
			time: new Date().toISOString(),
			name: req.body.name,
			email: req.body.email
		});

		return res.redirect(303, '/enquiry-success');
	}



	const message = (req.body.message || '').toLowerCase();

	const seoSpamPhrases = [
		'seo services',
		'improve your seo',
		'seo agency',
		'search engine optimization',
		'backlinks',
		'domain authority',
		'guest post',
		'link building',
		'seo packages',
		'may i send you seo',
		'seo performance',
		'seo support',
		'search visibility',
		'improve search',
		'improve seo'
	];

	const matchedSpamPhrase = seoSpamPhrases.find((phrase) =>
		message.includes(phrase)
	);

	if (matchedSpamPhrase) {

		console.log('SEO spam enquiry blocked:', {
			time: new Date().toISOString(),
			name: req.body.name,
			email: req.body.email,
			matchedPhrase: matchedSpamPhrase
		});

		return res.redirect(303, '/enquiry-success');
	}






	const newEnquiry = await Enquiry.create({

		name: req.body.name,
		email: req.body.email,
		service: req.body.service,
		message: req.body.message
	});



	const url = `${req.protocol}://${req.get('host')}/`;

	res.redirect(303, '/enquiry-success');

	new Email(newEnquiry, url).enquiryEmail().catch(err => {
		console.error('Enquiry email failed:', err.response || err);
	});

});
