import axios from "axios";

export const AxiosInit = axios.create({
    baseURL: "http://localhost:4444",
})

AxiosInit.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
})


export const UploadFileAvatar = async (FileURL) => {
    try {
        const { data } = await AxiosInit.post("/upload", FileURL)

        return data;
    } catch (err) {
        console.warn(err);
    }
}
