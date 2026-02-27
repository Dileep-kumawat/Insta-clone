import { createContext, useState } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    return <PostContext.Provider value={{ loading, setLoading, posts, setPosts, userPosts, setUserPosts,savedPosts, setSavedPosts }}>
        {children}
    </PostContext.Provider>
}