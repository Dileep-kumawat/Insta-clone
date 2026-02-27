import { useContext } from "react";
import { PostContext } from "../post.context";
import { getPosts, getAllPosts, createPost } from "../services/post.api";

export function usePost() {
    const { loading, setLoading, posts, setPosts, userPosts, setUserPosts } = useContext(PostContext);
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

    async function handleCreatePost(file, caption) {
        setLoading(true);
        await createPost(file, caption);
        setLoading(false);
    }

    return { loading, handleGetAllPosts, posts, handleGetPosts, userPosts, handleCreatePost };
}