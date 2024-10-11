import axios, { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosInstance, AxiosHeaders } from 'axios';

// Define the base URL for the API
export let baseUrl: string = "https://revo-reality-api.onrender.com/api/";

// Mock token, can be replaced with localStorage or AsyncStorage call
const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlNmE4ZDMwOTQ1ZWM5ZjY2ZTAzOGMiLCJuYW1lIjoiS2FzaGlmIiwicm9sZSI6InN1cF9hZG1pbiIsIm9yZ2FuaXphdGlvbklkIjoiNjY4ZTZhOGMzMDk0NWVjOWY2NmUwMzhhIiwiaWF0IjoxNzI4MDE2Mjc1fQ.FHGnK9Tfj815fCKjBU8gmzADuBIV7VImQUAw6nRTk4Q';

// Request interceptor to attach token to headers
const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    // Initialize headers if not already set
    if (!config.headers) {
        config.headers = new AxiosHeaders();
    }

    if (token) {
        // Attach token to Authorization header
        config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
};

// Axios instance for JSON requests
const API_AXIOS: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    timeoutErrorMessage: 'Network request timed out.',
    headers: new AxiosHeaders({
        "Content-Type": "application/json",
    }),
});

// Axios instance for multipart form-data requests
const API_AXIOS_MULTIPART: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    timeoutErrorMessage: 'Network request timed out.',
    headers: new AxiosHeaders({
        "Content-Type": "multipart/form-data",
    }),
});

// Attach request interceptor to both instances
API_AXIOS.interceptors.request.use(
    requestInterceptor,
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

API_AXIOS_MULTIPART.interceptors.request.use(
    requestInterceptor,
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

export { API_AXIOS, API_AXIOS_MULTIPART };
