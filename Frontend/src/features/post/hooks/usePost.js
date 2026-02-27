import { useContext } from "react";
import { PostContext } from "../post.context";
import { getPosts, getAllPosts, createPost, getAllSavedPosts, savePost, unsavePost, likePost, unlikePost } from "../services/post.api";

export function usePost() {
    const { loading, setLoading, posts, setPosts, userPosts, setUserPosts, savedPosts, setSavedPosts } = useContext(PostContext);

    async function handleGetAllPosts() {
        setLoading(true);
        const res = await getAllPosts();
        setPosts(res.posts);
        setLoading(false);
    }

    async function handleGetPosts() {
        setLoading(true);
        const res = await getPosts();
        setUserPosts(res.posts);
        setLoading(false);
    }

    async function handleGetALLSavedPosts() {
        setLoading(true);
        const res = await getAllSavedPosts();
        setSavedPosts(res.savedPosts);
        setLoading(false);
    }

    async function handleCreatePost(file, caption) {
        setLoading(true);
        await createPost(file, caption);
        setLoading(false);
    }

    async function handleSavePost(id) {
        const res = await savePost(id);
        return res;
    }

    async function handleUnSavePost(id) {
        const res = await unsavePost(id);
        return res;
    }

    async function handleLikePost(id) {
        const res = await likePost(id);
        return res;
    }

    async function handleUnLikePost(id) {
        const res = await unlikePost(id);
        return res;
    }

    return { loading, handleGetAllPosts, posts, handleGetPosts, userPosts, handleCreatePost, handleGetALLSavedPosts, savedPosts, handleSavePost, handleUnSavePost, handleLikePost, handleUnLikePost };
}