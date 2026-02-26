import { createContext, useState } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    
    return <PostContext.Provider value={{ loading, setLoading, posts, setPosts }}>
        {children}
    </PostContext.Provider>
}