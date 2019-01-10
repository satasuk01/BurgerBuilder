import axios from 'axios';

const instance = axios.create({
    baseURL: 'POST URL'
});

export default instance;