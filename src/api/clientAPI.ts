import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://api.coinranking.com/v2/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		'x-access-token': 'coinrankinga70c6645914e4c05620842c55d09a6aca7dd0c3a97747747',
	},
});

export default axiosClient;
