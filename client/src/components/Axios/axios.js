import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ai-trip-ridein-backend.onrender.com/api",
  withCredentials: true,
});
