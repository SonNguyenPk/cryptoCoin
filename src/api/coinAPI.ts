import axiosClient from './clientAPI';

export const coinAPI = {
	getAll(params: {}) {
		const url: string = 'coins';
		return axiosClient.get(url, { params });
	},

	getById(id: string, params: {} | any) {
		const url: string = `coins/${id}`;
		return axiosClient.get(url, { params });
	},
};
