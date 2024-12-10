import Axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from '@env';

const LOG_AXIOS = false;

const axiosInstance = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error al obtener el token", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

if (LOG_AXIOS) {
  axiosInstance.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    return request;
  });

  axiosInstance.interceptors.response.use((response) => {
    console.log("Response:", response);
    return response;
  });
}

export default axiosInstance;