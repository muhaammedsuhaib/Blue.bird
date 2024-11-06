import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

const userAxios = axios.create({
  baseURL: "https://blue-bird-server.onrender.com/api",
  timeout: 10000,
  withCredentials: true,
});

userAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
userAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error("Error response:", error.response);
    }
    return Promise.reject(error);
  }
);

export default userAxios;
