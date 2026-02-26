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

    console.log(user);
    console.log(userPosts);
    return (
        <section className="profile-container">
            <Navbar />
            <div className="profile-section">
                <div className="top">
                    <div className="image">
                        {/* <img src={user.profileImage} alt="user profile pic" /> */}
                        <img src="https://imgs.search.brave.com/lSA2C_DdTvls2mgbN2iM0rKKzu7q3xJ5BTB0Jpltq9g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aW5zdGFncmFtLWRl/ZmF1bHQtdXNlci1w/cm9maWxlLXBpYy1m/bGlwLWZsb3BzLXYw/LWc5ODNvZmxmZWc0/ZDEuanBnP3dpZHRo/PTI2MiZmb3JtYXQ9/cGpwZyZhdXRvPXdl/YnAmcz1jNmVjMjMw/NTE5OWM2MzNmYzZk/NDYwMjM4ZDA0MDlm/NDE4MTJmZTc1" alt="" />
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
                <div className="bottom">
                    {userPosts.map((post) => {
                        return <Post key={post._id} isUserPost={true} post={post} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Profile
