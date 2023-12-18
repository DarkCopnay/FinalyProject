import axios from "axios";

const AxiosInit = axios.create({
    baseURL: "http://localhost:4444",
})

AxiosInit.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
})

export {AxiosInit};