import axios from "axios";
import { ErrorMessage } from "@/components/Alert-Toast";

const axiosInstance = axios.create({
  baseURL: "mic-learn-plus-server.vercel.app",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => {
    ErrorMessage(err.message);
    console.log("Checked")
    Promise.reject(err);
  }
);

export default axiosInstance;
