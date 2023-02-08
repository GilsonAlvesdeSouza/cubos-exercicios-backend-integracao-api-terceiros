import axios from 'axios';

export const instanceAxios = axios.create({
	baseURL: process.env.ENRICHMENT_URL,
	headers: {
		authorization: `Bearer ${process.env.KEY_API_ENRICHMENT}`,
		'Content-Type': 'application/x-www-forms-urlencoded'
	}
});
