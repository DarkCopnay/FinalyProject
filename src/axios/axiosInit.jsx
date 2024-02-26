import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const AxiosInit = axios.create({
    baseURL: "http://localhost:4444",
})

AxiosInit.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
})


export const UploadFileAvatar = async (FileURL) => {
    try {
        const { data } = await AxiosInit.post("/upload/avatar", FileURL)

        return data;
    } catch (err) {
        console.warn(err);
    }
}

export const UpdateProfile = async (id, UpdateData) => {
    try {
        const { data } = await AxiosInit.patch(`/profile/${id}/edit`, UpdateData);

        toast.success("Profile is updated!", {
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            transition: Bounce
        })

        setTimeout(() => {
            location.reload();
        }, 3800);

        return data;
    } catch(err) {
        toast.error("Profile didn't update!", {
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            transition: Bounce
        })
    }
}