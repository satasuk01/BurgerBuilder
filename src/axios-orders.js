import axios from 'axios';

const instance = axios.create({
    baseURL: 'BASEURL'
});

export default instance;