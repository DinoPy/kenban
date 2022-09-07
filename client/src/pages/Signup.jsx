import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../api/authApi';

const Signup = () => {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [usernameErrText, setUsernameErrText] = useState('');
	const [passwordErrText, setPasswordErrText] = useState('');
	const [confirmPasswordErrText, setConfirmPasswordErrText] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setUsernameErrText('');
		setPasswordErrText('');
		setConfirmPasswordErrText('');

		const data = new FormData(e.target);
		const username = data.get('username').trim();
		const password = data.get('password').trim();
		const confirmPassword = data.get('confirmPassword').trim();

		let err = false;

		if (username === '') {
			err = true;
			setUsernameErrText('Username is required');
		}
		if (password === '') {
			err = true;
			setPasswordErrText('Password is required');
		}
		if (password !== confirmPassword) {
			err = true;
			setConfirmPasswordErrText('Password and confirm password must be same');
		}
		if (confirmPassword === '') {
			err = true;
			setConfirmPasswordErrText('Confirm password is required');
		}

		if (err) return;

		setLoading(true);

		try {
			const res = await authApi.signup({ username, password, confirmPassword });
			setLoading(false);
			localStorage.setItem('token', res.token);
			navigate('/login');
		} catch (error) {
			const errors = error.data.errors;
			errors.forEach((e) => {
				if (e.param === 'username') {
					setUsernameErrText(e.msg);
				}
				if (e.param === 'password') {
					setPasswordErrText(e.msg);
				}
				if (e.param === 'confirmPassword') {
					setConfirmPasswordErrText(e.msg);
				}
			});
		}
	};

	return (
		<Box component='form' sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
			<TextField
				margin='normal'
				required
				fullWidth
				id='username'
				label='Username'
				name='username'
				disabled={loading}
				error={usernameErrText !== ''}
				helperText={usernameErrText}
			/>
			<TextField
				margin='normal'
				required
				fullWidth
				id='password'
				label='Password'
				name='password'
				disabled={loading}
				type='password'
				error={passwordErrText !== ''}
				helperText={passwordErrText}
			/>
			<TextField
				margin='normal'
				required
				fullWidth
				id='confirmPassword'
				label='Confirm Pasword'
				name='confirmPassword'
				disabled={loading}
				type='password'
				error={confirmPasswordErrText !== ''}
				helperText={confirmPasswordErrText}
			/>

			<LoadingButton
				sx={{ mt: 3, mb: 2 }}
				variant='outlined'
				fullWidth
				type='submit'
				loading={loading}
			>
				{' '}
				Signup{' '}
			</LoadingButton>
			<Button component={Link} to='/login'>
				{' '}
				Already have an account? Login
			</Button>
		</Box>
	);
};

export default Signup;
