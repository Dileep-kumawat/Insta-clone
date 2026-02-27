import Navbar from "../../shared/components/Navbar";
import "../styles/profilepage.scss";
import { useAuth } from '../../auth/hooks/useAuth';
import { usePost } from "../../post/hooks/usePost";
import { useEffect } from "react";
import Post from '../../post/components/Post'
import { useProfile } from "../hooks/useProfile";

const Profile = () => {
    const { user } = useAuth();
    const { userPosts, handleGetPosts } = usePost();
    const { handleGetNoOfFollowers, nooffollowers, nooffollowings, handleGetNoOfFollowings } = useProfile();

    useEffect(() => {
        handleGetPosts();
        handleGetNoOfFollowers();
        handleGetNoOfFollowings();
    }, []);

    return (
        <section className="profile-container">
            <Navbar />
            <div className="profile-section">
                <div className="top">
                    <div className="image">
                        <img src={user.profileImage} alt="user profile pic" />
                    </div>
                    <div className="text">
                        <h1>{user.username}</h1>
                        <h2>{user.email}</h2>
                        <div className="stats">
                            <div className="no-posts">
                                <p>{userPosts.length} Posts</p>
                            </div>
                            <div className="followers">
                                <p>{nooffollowers} Followers</p>
                            </div>
                            <div className="following">
                                <p>{nooffollowings} Following</p>
                            </div>
                        </div>
                        <p>{user.bio}</p>
                    </div>
                </div>
                <div className="bottom-container">
                    {userPosts.length <= 0 && <div className="no-posts">
                        <i className="ri-camera-4-line"></i>
                        <h4>No Posts Yet</h4>
                    </div>}
                    {userPosts.map((post) => {
                        return <Post key={post._id} isUserPost={true} post={post} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Profile
