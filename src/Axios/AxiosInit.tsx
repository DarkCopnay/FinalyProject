import axios from "axios";

export const AxiosInit = axios.create({
    baseURL: "http://localhost:4444"
})

AxiosInit.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
})

