import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth"
import { useEffect } from "react";
import Navbar from "../../shared/components/Navbar";
import Posts from "../components/Posts";

import "../styles/home.scss";

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <main className="home-container">
            <Navbar />
            <Posts />
        </main>
    )
}

export default Home