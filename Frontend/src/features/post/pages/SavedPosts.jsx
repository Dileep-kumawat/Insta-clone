import { useEffect } from "react";
import Navbar from "../../shared/components/Navbar";
import { usePost } from "../hooks/usePost";
import "../styles/savedposts.scss";
import Loader from '../../shared/components/Loader';
import Post from "../components/Post";

const SavedPosts = () => {
    const { loading, handleGetALLSavedPosts, savedPosts } = usePost();
    useEffect(() => {
        handleGetALLSavedPosts();
    }, []);
    return (
        <section className="saved-container">
            <Navbar />
            <section className="savedposts-container">
                {loading && <Loader />}
                {
                    savedPosts.length <= 0 ?
                        "No Post saved Yet!" :
                        savedPosts.map((e) => {
                            return <Post key={e?._id} post={e.post} />
                        })
                }
            </section>
        </section>
    )
}

export default SavedPosts
