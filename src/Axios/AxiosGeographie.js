import  axios  from 'axios';

const APIGeo = axios.create({
    baseURL: 'https://shadify.yurace.pro/api/countries',
    timeout: 2000,
    //headers: {Accept: text/plain}, 
});

export default APIGeo;