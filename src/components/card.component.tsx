import { CardActionArea, Icon, Skeleton, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import CallReceivedRoundedIcon from '@mui/icons-material/CallReceivedRounded';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
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
export default function CoinItem(props?: { item?: Coin }) {
	const item = props?.item || null;
	return (
		<Card sx={{ maxWidth: 345, height: 300 }}>
			<CardActionArea>
				{item ? (
					<CardMedia
						sx={{ objectFit: 'contain' }}
						component='img'
						height='140'
						width='140'
						image={item['iconUrl']}
						alt={item.symbol}
					/>
				) : (
					<Skeleton variant='rectangular' width={345} height={200} />
				)}
				{item ? (
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{item.name} - {item.symbol}
						</Typography>
						<Typography variant='body2' color='text.secondary' whiteSpace='nowrap'>
							Market capital: <strong>{new Intl.NumberFormat().format(item.marketCap)}</strong>
						</Typography>
						<Typography variant='body2' color='text.secondary' whiteSpace='nowrap'>
							Price: <strong>{new Intl.NumberFormat().format(item.price)}</strong>
						</Typography>
						<Typography variant='body2' color='text.secondary' whiteSpace='nowrap'>
							The price change: <strong>{new Intl.NumberFormat().format(item.change)}</strong>
							{item.change > 0 ? (
								<CallMadeRoundedIcon color='primary' />
							) : (
								<CallReceivedRoundedIcon sx={{ color: pink[500] }} />
							)}
						</Typography>
					</CardContent>
				) : (
					<Box sx={{ pt: 0.5 }}>
						<Skeleton />
						<Skeleton width='60%' />
					</Box>
				)}
			</CardActionArea>
		</Card>
	);
}
