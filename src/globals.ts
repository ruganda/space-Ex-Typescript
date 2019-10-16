import axios from 'axios';

const API_HOST_URL = process.env.REACT_APP_API_HOST_URL;

let settings = {
  baseURL: API_HOST_URL
};

 const axiosInstance: any = axios.create(settings);

 export default { axiosInstance }