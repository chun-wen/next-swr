import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  }
});

const fetcher = (url: string) => AxiosInstance.get(url).then((res) => res.data);

export default fetcher;
