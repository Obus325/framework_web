import  axios  from 'axios';

const APIJokes = axios.create({
    baseURL: 'https://v2.jokeapi.dev',
    timeout: 5000,
    //headers: {Accept: text/plain}, 
});

export default APIJokes;