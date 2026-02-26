import { useState } from "react"
import '../styles/form.scss'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js"

const Login = () => {
    const { user, loading, handleLogin } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    async function formSubmitHandler(e) {
        e.preventDefault();

        await handleLogin(form.username, form.email, form.password)

        navigate('/');
    }

    if (loading) return <h1>Loading...</h1>

    return (
        <main className="form-container">
            <div className="left">
                <div className="logo">
                    <img src="primary-logo.png" alt="primary log" />
                </div>

                <div className="center">
                    <div className="text">
                        <div className="up">
                            See everyday moments from your
                        </div>
                        <div className="down">
                            close friends.
                        </div>
                    </div>

                    <div className="pic">
                        <img src="login-pic.png" alt="login pic" />
                    </div>
                </div>
            </div>

            <div className="right">
                <h2>Log into Instagram : </h2>
                <form onSubmit={formSubmitHandler}>
                    <input
                        onChange={(e) => {
                            setForm(prev => {
                                return {
                                    ...prev,
                                    username: e.target.value
                                }
                            })
                        }}
                        value={form.username}
                        type="text"
                        placeholder="Enter your username" />
                    <p className="or">or</p>
                    <input
                        onChange={(e) => {
                            setForm(prev => {
                                return {
                                    ...prev,
                                    email: e.target.value
                                }
                            })
                        }}
                        value={form.email}
                        type="email"
                        placeholder="Enter your email" />
                    <input
                        onChange={(e) => {
                            setForm(prev => {
                                return {
                                    ...prev,
                                    password: e.target.value
                                }
                            })
                        }}
                        value={form.password}
                        type="password"
                        placeholder="Enter the password" />
                    <input className="submit" type="submit" />
                </form>
                <p>Don't have account, create one : <Link to="/register">Register</Link> </p>
            </div>
        </main>
    )
}

export default Login
