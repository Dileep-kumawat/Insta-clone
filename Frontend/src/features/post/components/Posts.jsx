import { useEffect } from 'react';
import Loader from '../../shared/components/Loader'
import { usePost } from '../hooks/usePost'
import Post from './Post';
import "../styles/posts.scss";
import { Bounce, ToastContainer } from 'react-toastify';

const Posts = () => {
  const { handleGetAllPosts, posts, loading } = usePost();

  useEffect(() => {
    handleGetAllPosts();
  }, []);

  return (
    <section className="posts-container">
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} />
      {loading && <Loader />}
      {posts.length > 0 ?
        posts.map(post => {
          return <Post key={post._id} post={post} />
        })
        : "No posts available"}
    </section>
  )
}

export default Posts
