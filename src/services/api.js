import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/lugat`;

axios.interceptors.request.use((config) => {
    const token = "token";
    const authorization = token ? token : "";
    config.headers.Authorization = authorization;
    return config;
});

export default axios;
