const User = require('../models/user');

const CryptoJS = require('crypto-js');
const jsonwebtoken = require('jsonwebtoken');

exports.register = async (req, res) => {
	const { password } = req.body;

	try {
		req.body.passowrd = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY);

		const user = await User.create(req.body);
		const token = jswonwebtoken.sign({ id: user._id }, process.env.SECRET_KEY, {
			expiresIn: '1d',
		});
		res.status(201).json({ user, token });
	} catch (e) {
		res.status(500).json(e);
	}
};

exports.login = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ username }).select('password username');

		if (!user) {
			return res.status(401).json({
				errors: [
					{
						param: 'username',
						msg: 'Username or password is incorrect',
					},
				],
			});
		}

		const decryptedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.SECRET_KEY
		).toString(CryptoJS.enc.Utf8);

		if (password !== decryptedPassword) {
			return res.status(401).json({
				errors: [
					{
						param: 'password',
						msg: 'Username or password is incorrect',
					},
				],
			});
		}

		user.password = undefined;

		const token = jswonwebtoken.sign({ id: user._id }, process.env.SECRET_KEY, {
			expiresIn: '1d',
		});

		res.status(201).json({ user, token });
	} catch (e) {
		res.status(500).json(e);
	}
};
