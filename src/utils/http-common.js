import axios from 'axios';

const http = axios.create({
    baseURL: "https://api.coindesk.com",
    headers: {
        // Authorization: 'Bearer {token}',
        "Content-type": "application/json",
        // timeout: 1000,
        // "Access-Control-Allow-Origin": '*'
    }
})

export default http