import axios from "axios";

const authAxios = axios.create({
  baseURL: "https://blue-bird-server.onrender.com/api/auth",
  timeout: 10000,
  withCredentials: true,
});

export default authAxios;
