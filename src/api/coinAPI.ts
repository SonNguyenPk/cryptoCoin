import axiosClient from './clientAPI';

export const coinAPI = {
	getAll(params: {} | any) {
		const url: string = 'coins';
		return axiosClient.get(url, { params });
	},

	getById(id: string, params?: {}) {
		const url: string = `coin/${id}`;
		return axiosClient.get(url, { params });
	},
};
