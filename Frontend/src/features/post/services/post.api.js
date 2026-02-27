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

export async function getAllSavedPosts() {
    try {
        const res = await api.get("/api/saves");

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

export async function savePost(id) {
    try {
        const res = await api.post("/api/saves/save/" + id);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function unsavePost(id) {
    try {
        const res = await api.delete("/api/saves/unsave/" + id);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function likePost(id) {
    try {
        const res = await api.post("/api/likes/like/" + id);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function unlikePost(id) {
    try {
        const res = await api.delete("/api/likes/unlike/" + id);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}