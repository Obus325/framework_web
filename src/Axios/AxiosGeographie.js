import  axios  from 'axios';

const APIFacts = axios.create({
    baseURL: 'https://borderly.dev',
    timeout: 2000,
    //headers: {Accept: text/plain}, 
});

export default APIFacts;