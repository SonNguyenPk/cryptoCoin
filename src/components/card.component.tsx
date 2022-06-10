import { CardActionArea, Icon } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import CallReceivedRoundedIcon from '@mui/icons-material/CallReceivedRounded';
import { pink } from '@mui/material/colors';
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
export default function CoinItem(props: { item: Coin }) {
	const { item } = props;
	return (
		<Card sx={{ width: 345 }}>
			<CardActionArea>
				<CardMedia
					sx={{ objectFit: 'contain' }}
					component='img'
					height='140'
					width='140'
					image={item['iconUrl']}
					alt={item.symbol}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{item.name} - {item.symbol}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Market capital: {new Intl.NumberFormat().format(item.marketCap)}
						{new Intl.NumberFormat().format(item.price)}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Price: {new Intl.NumberFormat().format(item.price)}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						The price change: {new Intl.NumberFormat().format(item.change)}{' '}
						{item.change > 0 ? (
							<CallMadeRoundedIcon color='primary' />
						) : (
							<CallReceivedRoundedIcon sx={{ color: pink[500] }} />
						)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
