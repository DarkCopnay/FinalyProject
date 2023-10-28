import axios from "axios";

const AxiosInit = axios.create({
    baseURL: "http://localhost:4444",
})

export default AxiosInit;