import { useEffect, useState } from 'react';
import { coinAPI } from '../../api/coinAPI';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CoinItem from '../../components/card.component';

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

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
const CoinList = () => {
	const [listOfCoin, setListOfCoin] = useState([]);
	const [paramQuerry, setParamQuerry] = useState({ timePeriod: '1y' });

	useEffect(() => {
		debugger;
		getCoinList();
		return () => {};
	}, [paramQuerry]);

	const getCoinList = async () => {
		try {
			const response = await coinAPI.getAll(paramQuerry);
			setListOfCoin(response.data.data.coins);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<p>List of coin</p>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{listOfCoin &&
						listOfCoin.map((coin: Coin, index) => (
							<Grid item xs={2} sm={4} md={4} key={coin['uuid']}>
								<CoinItem item={coin} />
							</Grid>
						))}
				</Grid>
			</Box>
		</>
	);
};

export default CoinList;
