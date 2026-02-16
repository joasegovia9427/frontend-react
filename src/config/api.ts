import axios from 'axios';

import { env } from './env';

export const baseApiConfiguration = {
    baseURL: env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

const publicApi = axios.create(baseApiConfiguration);

export { publicApi };
