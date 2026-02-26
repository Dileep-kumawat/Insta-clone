import { useNavigate } from "react-router-dom"
import "../style/notfound.scss";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="notfound">
            <div className="left">
                <h4><strong>404.</strong> That's an error.</h4>
                <h3>The requested URL /example was not found on this server. That's all we know</h3>
                <div>Redirect to <span onClick={() => {
                    navigate(-1);
                }}>Previous Page</span></div>
            </div>
            <div className="right">
                <img src="not-found.png" alt="not found image" />
            </div>
        </div>
    )
}

export default NotFound
