import axios from "axios";

// Llamadas al Backend
const service = axios.create({
    baseURL: `http://localhost:5005/api`
})

export default service;