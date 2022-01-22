import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://ic56xdo6p-test-api-rn.herokuapp.com/',
    withCredentials: true,
    headers:
        {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8'
        },
});
