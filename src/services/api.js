import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/', 
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImVtYWlsIjoiZGV2MkBnbWFpbC5jb20iLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTY5ODY5MDkzNSwiZXhwIjoxNjk4Njk2OTM1fQ.IhnyWrQwc-ftp-yx6op-FrsQ70e3pyQwAYHRcjOT33k`,
  },
});

export default api;