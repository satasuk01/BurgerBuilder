import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-f9437.firebaseio.com/'
});

export default instance;