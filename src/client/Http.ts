import axiosInstance from "./axios";
import { AxiosRequestConfig } from "axios";

export class HttpRequest {
    async get(url: string, config?: AxiosRequestConfig) {
        return axiosInstance.get(url, config);
    }

    async post(url: string, body: any, config?: AxiosRequestConfig) {
        return axiosInstance.post(url, body, config);
    }

    async put(url: string, body: any, config?: AxiosRequestConfig) {
        return axiosInstance.put(url, body, config);
    }

    async patch(url: string, body?: any, config?: AxiosRequestConfig) {
        return axiosInstance.patch(url, body, config);
    }

    async delete(url: string, config?: AxiosRequestConfig) {
        return axiosInstance.delete(url, config);
    }
}