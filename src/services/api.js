import axios from 'axios';

export default axios.create({
  baseURL: `http://my-json-server.typicode.com/alicjaotto/dictionaries-mock-data/`,
  timeout: 1000,
  headers: {'Access-Control-Allow-Origin': '*'}
});
