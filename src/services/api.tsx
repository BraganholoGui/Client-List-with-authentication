import axios from 'axios'

export default axios.create({
  timeout: 30000,
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }  
});


