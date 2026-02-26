import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
    withCredentials: true
});

export async function getNoOfFollowers() {
    const res = await api.get("/api/follows/nooffollowers");

    return res.data;
}

export async function getNoOfFollowings() {
    const res = await api.get("/api/follows/nooffollowings");

    return res.data;
}