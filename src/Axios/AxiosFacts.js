import  axios  from 'axios';

const APIFacts = axios.create({
    baseURL: 'https://uselessfacts.jsph.pl',
    timeout: 5000,
    //headers: {'Authorization': 'Bearer 0000'}, 
});

export default APIFacts;