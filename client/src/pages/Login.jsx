import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from 'react-router-dom';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const handleSubmit = (e) => {};

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
			/>
			<TextField
				margin='normal'
				required
				fullWidth
				id='passowrd'
				label='Password'
				name='password'
				disabled={loading}
			/>

			<LoadingButton
				sx={{ mt: 3, mb: 2 }}
				variant='outlined'
				fullWidth
				color='success'
			>
				{' '}
				Login{' '}
			</LoadingButton>

			<Button component={Link} to='/signup'>
				{' '}
				Don't have account? Signup
			</Button>
		</Box>
	);
};

export default Login;
