import { useState } from "react";
import Navbar from "../../shared/components/Navbar";
import UploadBox from "../components/UploadBox";
import "../styles/createpost.scss";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router-dom";
import Loader from '../../shared/components/Loader';

const CreatePost = () => {

    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState("");

    const { loading, handleCreatePost } = usePost();

    async function handleSubmit(e) {
        e.preventDefault();

        await handleCreatePost(file, caption);

        navigate("/");
    }

    return (
        <section className="create-container">
            <Navbar />
            {
                loading ?
                    <Loader /> :
                    <section className="create-section">
                        <h1>Create Post : </h1>
                        <form
                            encType="multipart/form-data"
                            onSubmit={handleSubmit}
                        >
                            <UploadBox file={file} setFile={setFile} />
                            <input
                                type="text"
                                className="caption-input"
                                placeholder="Enter the caption of this post here..."
                                required={true}
                                value={caption}
                                onChange={(e) => { setCaption(e.target.value) }}
                            />
                            <button>Create Post</button>
                        </form>
                    </section>
            }
        </section>
    )
}

export default CreatePost
