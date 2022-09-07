import React from 'react';
import { useEffect } from 'react';
<<<<<<< HEAD
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import authUtils from '../../utils/authUtils';
=======
import { Outlet, useNavigate } from 'react-router-dom';
import authUtils from '../../utils/authUtils';
import Loading from '../common/Loading';
import assets from '../../assets';
import { Container, Box } from '@mui/material';
>>>>>>> 4863b1a4c010eb2d38899fde79ee2457cfaa400d

const AuthLayout = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
<<<<<<< HEAD
		const checkAugh = async () => {
=======
		const checkAuth = async () => {
>>>>>>> 4863b1a4c010eb2d38899fde79ee2457cfaa400d
			const isAuth = await authUtils.isAuthenticated();

			if (!isAuth) {
				setLoading(false);
			} else {
<<<<<<< HEAD
				navigate('');
=======
				navigate('/');
>>>>>>> 4863b1a4c010eb2d38899fde79ee2457cfaa400d
			}
		};
		checkAuth();
	}, [navigate]);

	return loading ? (
		<Loading fullHeight />
	) : (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<img
					src={assets.images.logoDark}
					style={{ width: '100px' }}
					alt='DinoDev Logo'
				/>
				<Outlet />
			</Box>
		</Container>
	);
};

export default AuthLayout;
