import  axios  from 'axios';

const APIFacts = axios.create({
    baseURL: 'https://v2.jokeapi.dev',
    timeout: 5000,
    //headers: {Accept: text/plain}, 
});

export default APIFacts;