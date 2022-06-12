import { Box, Typography } from '@mui/material';
import homeBG from '../../asset/images/home_background.jpg';
const Home = () => {
	return (
		<Box
			sx={{
				height: '88vh',
				display: 'flex',
				flexFlow: 'column',
				justifyContent: 'center',
				alignItems: 'center',

				backgroundImage: `url(${homeBG})`,
				backgroundSize: '100% 100%',
				//backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}>
			<Typography variant='h2'>Welcome to Crypto coin market</Typography>
			<Typography variant='h3'>Author: Nguyen Thanh Son</Typography>
		</Box>
	);
};

export default Home;
