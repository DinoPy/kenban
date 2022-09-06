const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

exports.validate = (req, res, next) => {
	const errors = valitateResult(req);

	if (!errors.isEmpty) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

exports.isObjectId = (value) => mongoose.Types.ObjectId.isValid(value);
