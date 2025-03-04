import axios from 'axios';

const API_URL = window.APP_CONFIG?.API_URL || 'https://api.ozzurep.tech';
export const axiosInstance = axios.create({ baseURL: API_URL });
