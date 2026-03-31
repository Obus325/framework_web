import  axios  from 'axios';

const APIQuiz = axios.create({
    baseURL: 'https://opentdb.com',
    timeout: 5000,
    //headers: {Accept: text/plain}, 
});

export default APIQuiz;