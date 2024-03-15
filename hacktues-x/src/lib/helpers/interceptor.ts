import axios from 'axios';
import { API_URL } from '../../environment';
import qs from 'qs';

export function getData(route: string, params?: any) {
	return axios.get(`${API_URL}${route}`, {
		params,
		paramsSerializer: (params) => {
			return qs.stringify(params);
		}
	});
}
