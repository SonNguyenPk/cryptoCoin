import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { coinAPI } from '../../api/coinAPI';
import parse from 'html-react-parser';
import Loading from '../../components/loading.component';

const CoinDetail = () => {
	const [coin, setCoin] = useState<any>();
	const param: { id?: string } = useParams();
	useEffect(() => {
		if (param.id) {
			getCoin(param.id);
		}
		return () => {};
	}, []);
	const getCoin = async (id: string) => {
		try {
			const coinDetail = await coinAPI.getById(id);
			setCoin(coinDetail.data.coin);
		} catch (error) {
			console.log(error);
		}
	};
	const description = parse(coin ? coin.description : '');
	return (
		<>
			{coin ? (
				<Box>
					<h2>{coin?.name}</h2>
					<p>Rank: {coin?.rank}</p>
					<p>Symbol: {coin?.symbol}</p>
					{description}
				</Box>
			) : (
				<Loading />
			)}
		</>
	);
};

export default CoinDetail;
