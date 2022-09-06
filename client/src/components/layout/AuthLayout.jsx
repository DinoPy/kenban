import React from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import authUtils from '../../utils/authUtils';

const AuthLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		const checkAugh = async () => {
			const isAuth = await authUtils.isAuthenticated();

			if (!isAuth) {
				setLoading(false);
			} else {
				navigate('');
			}
		};
	});

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
