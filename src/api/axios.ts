import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    withCredentials: true,

    headers: {
        Accept: "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        config.headers["X-Requested-With"] = "XMLHttpRequest";

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },

    (error) => {
        if (error.response?.status === 401) {
            console.log("User is not authenticated.");
        }

        if (error.response?.status === 403) {
            console.log("You are not allowed to perform this action.");
        }

        if (error.response?.status === 422) {
            console.log("Validation error.");
        }

        return Promise.reject(error);
    }
);

export default api;