import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const pages = ['Home', 'Coin Market'];
const accountSettings = ['Profile'];

const NavigationBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<CurrencyBitcoinIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}>
							CRYPTO COIN
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}>
								<MenuItem
									onClick={handleCloseNavMenu}
									sx={{
										display: 'flex',
										flexDirection: 'column',
										'& > a': {
											textDecoration: 'none',
											width: '100%',
										},
									}}>
									<NavLink
										to='/'
										end
										style={({ isActive }) =>
											isActive ? { backgroundColor: '#e91e63' } : { backgroundColor: 'white' }
										}>
										HOME
									</NavLink>
									<NavLink
										to='/coin-list'
										style={({ isActive }) =>
											isActive ? { backgroundColor: '#e91e63' } : { backgroundColor: 'white' }
										}>
										COIN MARKET
									</NavLink>
								</MenuItem>
							</Menu>
						</Box>
						<CurrencyBitcoinIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
						<Typography
							variant='h5'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}>
							CRYPTO COIN
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
								'& > a': { textDecoration: 'none' },
								'& > a.active > button': { backgroundColor: '#e91e63' },
							}}>
							{pages.map((page) => (
								<NavLink
									key={page}
									to={page === 'Home' ? '/' : '/coin-list'}
									className={({ isActive }) => (isActive ? 'active' : '')}>
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: 'white', display: 'block' }}>
										{page}
									</Button>
								</NavLink>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Outlet />
		</>
	);
};
export default NavigationBar;
