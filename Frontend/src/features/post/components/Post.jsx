import { useMemo, useState } from "react";
import "../styles/post.scss";
import { toast, Bounce } from 'react-toastify'

const Post = ({ post, isUserPost }) => {

    const [like, setLike] = useState(false);

    const random = useMemo(() => {
        let rand = Math.floor(Math.random() * 200) - 100;
        return `${rand}deg`;
    }, [like]);

    function likeHandler() {
        setLike(true)

        setTimeout(() => setLike(false), 1000)
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

    console.log(post);
    return (
        <div className="post">

            <div className="upper">
                <div className="profile-pic">
                    {/* <img src={post.user.profileImage} alt="profile image of user" /> */}
                    <img src="https://imgs.search.brave.com/7AMIaL_UPcGsCTN2e22JEyBdAiVERytzLJUomPNJpo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTAvRGVm/YXVsdC1Qcm9maWxl/LVBpY3R1cmUtUE5H/LUltYWdlLUJhY2tn/cm91bmQucG5n" alt="example pic of user" />
                </div>
                <div className="user-details">
                    <h5><span>{post.user.username}</span> · {post.user.email}</h5>
                    <h6>{timeAgo()}</h6>
                </div>
                {!isUserPost && <button className="follow-btn">Follow</button>}
            </div>
            <div className="image" onDoubleClick={likeHandler}>
                {/* <img src={post.imgUrl} alt="post image" /> */}
                <img src="https://imgs.search.brave.com/A9OSl001FzM_oAJBThNLx_Utev5fzeVyd1Qso5s7bUw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/NzQ3LzQ2OC9zbWFs/bC9sb25lbHktYmVh/dXRpZnVsLXRyZWUt/b24tdGhlLXRvcC1y/b2NrLWhpbGwtbW91/bnRhaW4tYXQtc3Vu/c2V0LW5hdHVyZS1v/dXRkb29yLXNjZW5l/LXZpZXctcGhvdG8u/anBn" alt="post image" />

                {like && (
                    <div style={{ "--rot": random }} className="open like-feature">
                        <i className="heart ri-heart-fill"></i>
                    </div>
                )}
            </div>
            <div className="icons">
                <i className="ri-heart-line"></i>
                <i
                    onClick={() => {
                        toast("This section is in under construction, so this will be added in the next version")
                    }}
                    className="ri-chat-4-line"></i>
                <i
                    onClick={() => { toast("This section is in under construction, so this will be added in the next version") }}
                    className="ri-share-forward-fill"></i>
                <i id="bookmark-icon" className="ri-bookmark-line"></i>
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
