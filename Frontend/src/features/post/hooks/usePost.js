import { useContext } from "react";
import { PostContext } from "../post.context";
import { getPosts, getAllPosts } from "../services/post.api";

export function usePost() {
    const { loading, setLoading, posts, setPosts } = useContext(PostContext);
    async function handleGetAllPosts() {
        setLoading(true);
        const res = await getAllPosts();
        setPosts(res.posts);
        setLoading(false);
    }

    return { loading, handleGetAllPosts, posts };
}