import { useEffect, useMemo, useState } from "react";
import "../styles/post.scss";
import { toast } from 'react-toastify'
import { useAuth } from "../../auth/hooks/useAuth";
import { usePost } from "../hooks/usePost";

const Post = ({ post }) => {

    const [like, setLike] = useState(false);
    const [likeAnimate, setLikeAnimate] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = useAuth();
    const { handleSavePost, handleUnSavePost, handleLikePost, handleUnLikePost } = usePost();

    useEffect(() => {
        setSaved(post.isSavedPost);
        setLike(post.isLiked);
    }, [post.isSavedPost, post.isLiked]);

    async function savePostHandler() {
        await handleSavePost(post._id);
        setSaved(true);
    }

    async function UnSavePostHandler() {
        await handleUnSavePost(post._id);
        setSaved(false);
    }

    async function likePostHandler() {
        await handleLikePost(post._id);
        setLike(true);
    }

    async function UnLikePostHandler() {
        await handleUnLikePost(post._id);
        setLike(false);
    }

    const random = useMemo(() => {
        let rand = Math.floor(Math.random() * 200) - 100;
        return `${rand}deg`;
    }, []);

    function likeHandler() {
        setLikeAnimate(true);

        setTimeout(() => setLikeAnimate(false), 1000);

        if (!like) likePostHandler();
    }

    const [isExpanded, setIsExpanded] = useState(false);

    function limitText(text) {
        const maxLength = 100;
        if (isExpanded) return text;
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength);
    }

    const timeAgo = (dateString = post.createdAt) => {
        const now = new Date();
        const past = new Date(dateString);
        const seconds = Math.floor((now - past) / 1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            day: 86400,
            hour: 3600,
            minute: 60,
        };

        for (let key in intervals) {
            const interval = Math.floor(seconds / intervals[key]);
            if (interval >= 1) {
                return `Created ${interval} ${key}${interval > 1 ? "s" : ""} ago`;
            }
        }

        return "Created just now";
    };

    return (
        <div className="post">

            <div className="upper">
                <div className="profile-pic">
                    <img src={post.user.profileImage} alt="profile image of user" />
                </div>
                <div className="user-details">
                    <h5><span>{post.user.username}</span> · {post.user.email}</h5>
                    <h6>{timeAgo()}</h6>
                </div>
                {!(user._id.toString() === post.user._id.toString()) && <button
                    onClick={() => {
                        toast("This section is in under construction, so this will be added in the next version")
                    }}
                    className="follow-btn">Follow</button>}
            </div>
            <div className="image" onDoubleClick={likeHandler}>
                <img src={post.imgUrl} alt="post image" />

                {likeAnimate && (
                    <div style={{ "--rot": random }} className="open like-feature">
                        <i className="heart ri-heart-fill"></i>
                    </div>
                )}
            </div>
            <div className="icons">
                {
                    like ?
                        <i
                            onClick={UnLikePostHandler}
                            id="like" className="ri-heart-fill"></i> :
                        <i
                            onClick={likePostHandler}
                            id="like" className="ri-heart-line"></i>
                }
                <i
                    onClick={() => {
                        toast("This section is in under construction, so this will be added in the next version")
                    }}
                    className="ri-chat-4-line"></i>
                <i
                    onClick={() => { toast("This section is in under construction, so this will be added in the next version") }}
                    className="ri-share-forward-fill"></i>
                {
                    saved ?
                        <i onClick={UnSavePostHandler} id="bookmark-icon" className="ri-bookmark-fill"></i>
                        : <i onClick={savePostHandler} id="bookmark-icon" className="ri-bookmark-line"></i>
                }
            </div>
            <div className="bottom">
                <p>
                    {limitText(post.caption)}

                    {post.caption.length > 100 && (
                        <span
                            className="more-btn"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? " show less" : "... more"}
                        </span>
                    )}
                </p>
            </div>
        </div>
    )
}

export default Post
