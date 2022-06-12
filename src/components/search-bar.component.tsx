import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { clear } from 'console';
import React, { useRef, useState } from 'react';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.grey[400], 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '30ch',
			'&:focus': {
				width: '35ch',
			},
		},
	},
}));

const SearchBar = (props: { onSearchCoin: any }) => {
	const [searchValue, setSearchValue] = useState('');
	const timeoutRef = useRef<any>();
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (timeoutRef) clearTimeout(timeoutRef.current);
		const timeOut = setTimeout(() => {
			props.onSearchCoin(e.target.value);
		}, 500);
		setSearchValue(e.target.value);
		timeoutRef.current = timeOut;
	};
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				value={searchValue}
				placeholder='Search…'
				inputProps={{ 'aria-label': 'search' }}
				onChange={handleSearch}
			/>
		</Search>
	);
};

export default SearchBar;
