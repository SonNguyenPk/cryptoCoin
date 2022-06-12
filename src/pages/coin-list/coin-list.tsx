import { useEffect, useState } from 'react';
import { coinAPI } from '../../api/coinAPI';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CoinItem from '../../components/card.component';
import SearchBar from '../../components/search-bar.component';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Coin {
	uuid: string;
	symbol: string;
	name: string;
	color: string;
	iconUrl: string;
	marketCap: number;
	price: number;
	btcPrice: number;
	listedAt: number;
	change: number;
	rank: number;
	sparkline: number[];
	coinrankingUrl: string;
	'24hVolume': number;
}
interface Stat {
	total: number;
	totalCoins: number;
	total24hVolume: string;
	totalExchanges: number;
	totalMarketCap: String;
	totalMarkets: number;
}
interface ResponseData {
	coins: Coin[];
	stats: Stat;
}
interface ParamGet {
	orderBy?: string | null;
	offset?: number;
	search?: string | null;
}
const limitCoinPerQuerry = 50;

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
const CoinList = () => {
	const [listOfCoin, setListOfCoin] = useState<null | ResponseData>(null);
	const [paramQuerry, setParamQuerry] = useState<null | ParamGet>(null);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [sortBy, setSortBy] = useState<null | string>();
	const [search, setSearch] = useState('');
	const navigate = useNavigate();
	const [showSearchTextResult, setShowSearchTextResult] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getCoinList();
		return () => {};
	}, [paramQuerry]);

	const getCoinList = async () => {
		try {
			setShowSearchTextResult(false);
			setIsLoading(true);
			window.scrollTo({ top: 0, behavior: 'smooth' });
			const { data } = await coinAPI.getAll(paramQuerry);
			setListOfCoin(data);
			setIsLoading(false);
			if (search) setShowSearchTextResult(true);
		} catch (error) {
			console.log(error);
		}
	};

	// get the next coins by page
	const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
		setParamQuerry({ orderBy: sortBy, offset: value * limitCoinPerQuerry });
		setPage(value);
	};

	const handleChangeSort = (event: React.MouseEvent<HTMLElement>, newSort: string) => {
		setSortBy(newSort);
		setPage(1);
		setParamQuerry({ orderBy: newSort, offset: limitCoinPerQuerry, search });
	};

	const handleSearchCoin = (searchValue: string) => {
		setSearch(searchValue);
		setParamQuerry({ orderBy: sortBy, offset: limitCoinPerQuerry, search: searchValue });
	};

	const handleSelectCoin = (e: React.MouseEvent, id: String) => {
		navigate(`/coin-detail/${id}`);
	};

	return (
		<>
			<h2>Market Coin</h2>
			<Box position='static' mt={2} mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
				<SearchBar onSearchCoin={handleSearchCoin} />
			</Box>
			{showSearchTextResult && (
				<Typography>
					Find {listOfCoin?.coins.length} {listOfCoin?.coins.length ? 'results' : 'result'} for "
					<strong>{search}</strong>"
				</Typography>
			)}
			{listOfCoin?.coins.length && (
				<ToggleButtonGroup
					disabled={isLoading ? true : false}
					color='primary'
					value={sortBy}
					exclusive
					onChange={handleChangeSort}
					sx={{ float: 'right' }}>
					<ToggleButton value='price'>Price</ToggleButton>
					<ToggleButton value='marketCap'>Market cap</ToggleButton>
					<ToggleButton value='change'>Change</ToggleButton>
				</ToggleButtonGroup>
			)}
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{!isLoading
						? listOfCoin?.coins.map((coin: Coin, index) => (
								<Grid
									item
									xs={4}
									sm={4}
									md={4}
									key={coin['uuid']}
									onClick={(e) => handleSelectCoin(e, coin['uuid'])}>
									<CoinItem item={coin} />
								</Grid>
						  ))
						: 'skeleton'.split('').map((item, index) => (
								<Grid item xs={4} sm={4} md={4} key={index}>
									<CoinItem />
								</Grid>
						  ))}
				</Grid>
			</Box>
			{listOfCoin?.coins.length && (
				<Box mt={2} mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
					<Stack spacing={2}>
						<Pagination
							count={Math.ceil(listOfCoin?.stats.total / limitCoinPerQuerry)}
							onChange={handleChangePage}
							page={page}
							renderItem={(item) => (
								<PaginationItem
									components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
									{...item}
								/>
							)}
						/>
					</Stack>
				</Box>
			)}
		</>
	);
};

export default CoinList;
