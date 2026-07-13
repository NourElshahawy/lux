import axios from 'axios';

const api = axios.create({
    baseURL: 'https://luxhorse.net/api',
    headers: {
        "Accept-Language": "en"
    },
    
});

// بيضيف الـ token تلقائياً في كل request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;