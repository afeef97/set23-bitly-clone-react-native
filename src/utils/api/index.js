import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const registerUser = async (data) => {
    return axios.post(`${BASE_URL}/api/register`, data).then((res) => res.data);
};

export const loginUser = async (data) => {
    console.log(data);
    return axios.post(`${BASE_URL}/api/login`, data).then((res) => res.data);
};

export const protectedRoute = async () => {
    return axios.get(`${BASE_URL}/api/protected`).then((res) => res.data);
};

export const getAllLinks = async (token) => {
    return axios.get(`${BASE_URL}/api/listAllLink`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const addLink = async (data, token) => {
    console.log(token);
    return axios.post(`${BASE_URL}/api/createLink`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const deleteLink = async (id, token) => {
    return axios.delete(`${BASE_URL}/api/createLink/?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
