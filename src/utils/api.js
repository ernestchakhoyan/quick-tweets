import axios from "axios";
import {
    getAccessToken,
    removeAccessToken
} from "./localStorage";

const API_SERVER = "";


const axiosInstance = axios.create({
    baseURL: API_SERVER,
    timeout: 120000,
});

axiosInstance.interceptors.request.use(function (config) {
    const { contentType, url, baseURL } = config;
    const contentTypeToSet = (!contentType || contentType === 1) ? "application/json" : "multipart/form-data";

    if(baseURL){
        config.baseURL = "";
    }

    config.headers = {
        ...config.headers,
        AccessToken: getAccessToken(),
        "Content-Type": contentTypeToSet
    };

    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log(error, "Error on api call");
    return Promise.reject(error);
});

export const httpRequest = (baseUrl, method, path, payload, query, contentType) => {
    if (method === "get" || method === "delete") {
        payload = { params: query };
        query = null;
    }
    return axiosInstance[ method ](path, payload, { params: query, contentType });
};