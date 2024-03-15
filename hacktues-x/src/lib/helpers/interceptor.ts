import axios from "axios";
import { API_URL } from "../../environment";
// import https from 'https';

// const agent = new https.Agent({
//   rejectUnauthorized: false,
// })

export function getData(route: string){
    return axios.get(`${API_URL}${route}`);
}
