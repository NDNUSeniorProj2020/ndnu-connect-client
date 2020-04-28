import axios from 'axios';

export const url = process.env.REACT_APP_API || 'https://praveenv.org'
export default () => axios.create({ baseURL: url });
