import  axios  from 'axios';

const APIFacts = axios.create({
    baseURL: 'https://shadify.yurace.pro/api/countries',
    timeout: 2000,
    //headers: {Accept: text/plain}, 
});

export default APIFacts;