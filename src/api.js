import axios from 'axios';

export default () => axios.create({
  baseURL: process.env.REACT_APP_API || 'http://ec2-54-241-187-187.us-west-1.compute.amazonaws.com:81'
});
