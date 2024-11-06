import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://localhost:4500/api/auth",
  timeout: 10000,
  withCredentials: true,
});

export default authAxios;
