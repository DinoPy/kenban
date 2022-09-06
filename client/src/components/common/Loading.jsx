import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
	return (
		<div>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: props.fullHeight ? '100vh' : '100%',
				}}
			>
				<CircularProgress />
			</Box>
		</div>
	);
};

export default Loading;
