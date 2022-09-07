import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Loading from '../common/Loading';
import authUtils from '../../utils/authUtils';

const AppLayout = () => {
	const [loading, setLoading] = React.useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		const checkAuth = async () => {
			const user = await authUtils.isAuthenticated();
			if (!user) {
				navigate('/login');
			} else {
				setLoading(false);
			}
		};
		checkAuth();
	}, [navigate]);

	return loading ? (
		<Loading fullHeight />
	) : (
		<Box
			sx={{
				display: 'flex',
			}}
		>
			<Sidebar />
			<Box
				sx={{
					flexGrow: 1,
					p: 1,
					width: 'max-content',
				}}
			>
				<Outlet />
			</Box>
		</Box>
	);
};

export default AppLayout;
