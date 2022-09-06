import React from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AuthLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		const checkAugh = async () => {
			// check auth
		};
	});

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
