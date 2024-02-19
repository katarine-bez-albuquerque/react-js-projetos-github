import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/users/katarine-bez-albuquerque/repos',      
    headers: {
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export default axiosInstance;