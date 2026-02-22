import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_ENDPOINT + '/api/auth',
    withCredentials: true
})

export async function login(username, email, password) {
    const res = await api.post('/login', {
        username,
        email,
        password
    });

    return res.data;
}

export async function register(username, email, password) {
    const res = await api.post('/register', {
        username,
        email,
        password
    });

    return res.data;
}

export async function getMe() {
    const res = await api.get('/get-me');

    return res.data;
}