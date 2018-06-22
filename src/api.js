import axios from 'axios';

export const getPicturesRequest = batch => (
  axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${batch}&_limit=100`)
);
