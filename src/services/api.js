import Axios from 'axios';

const instance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://hacker-news.firebaseio.com/v0',
});

export default instance;