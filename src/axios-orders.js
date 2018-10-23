import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-641e7.firebaseio.com/'
});

export default instance;