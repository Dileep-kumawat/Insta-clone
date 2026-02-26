import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth"
import { useEffect } from "react";
import Navbar from "../../shared/components/Navbar";
import Posts from "../components/Posts";
import Suggestions from "../components/Suggestions";

import "../styles/home.scss";

const Home = () => {

    //----------------Reactive after development of posts usage

    // const navigate = useNavigate();
    // const { user } = useAuth();
    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login');
    //     }
    // }, [user, navigate]);

    return (
        <main className="home-container">
            <Navbar />
            <Posts />
            <Suggestions />
        </main>
    )
}

export default Home