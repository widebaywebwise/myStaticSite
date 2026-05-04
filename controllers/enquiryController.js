const Enquiry = require('./../models/enquiryModel');
const catchAsync = require('./../utilities/catchAsync');
const Email = require('./../utilities/emailClass');

exports.createEnquiry = catchAsync(async (req, res, next) => {

	/// Honeypot controller

	if (req.body.website && req.body.website.trim() !== '') {

		return res.redirect(303, '/enquiry-success');
	}


	/// Block just SEO in messages

	// const message = (req.body.message || '').toLowerCase();

	// if (message.includes('seo')) {

	// 	console.log('SEO spam enquiry blocked:', {
	// 		time: new Date().toISOString(),
	// 		name: req.body.name,
	// 		email: req.body.email
	// 	});

	// 	return res.redirect(303, '/enquiry-success');
	// }



	/// Block Specific SEO in messages

	const message = (req.body.message || '').toLowerCase();

	const seoSpamPhrases = [
		'seo services',
		'improve your seo',
		'boost your seo',
		'seo strategy',
		'seo expert',
		'seo agency',
		'search engine optimization',
		'rank higher',
		'ranking well',
		'search rankings',
		'visibility on google',
		'backlinks',
		'domain authority',
		'increase your traffic',
		'increase traffic',
		'generate more leads',
		'guest post',
		'link building',
		'first page of google',
		'google rankings'
	];

	const isSeoSpam = seoSpamPhrases.some((phrase) =>
		message.includes(phrase)
	);

	if (isSeoSpam) {

		console.log('SEO spam enquiry blocked:', {
			time: new Date().toISOString(),
			name: req.body.name,
			email: req.body.email
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
