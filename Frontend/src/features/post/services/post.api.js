import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
    withCredentials: true
});

export async function getPosts() {
    try {
        const res = await api.get("/api/post/");

        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllPosts() {
    try {
        const res = await api.get("/api/post/all");

        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function createPost(file, caption) {
    try {
        const formData = new FormData();
        formData.append("imgUrl", file)
        formData.append("caption", caption);
        const res = await api.post("/api/post/", formData);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}