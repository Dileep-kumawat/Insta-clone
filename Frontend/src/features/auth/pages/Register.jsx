import { useState } from "react"
import axios from 'axios'
import '../styles/form.scss'
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    async function formSubmitHandler(e) {
        e.preventDefault();

        const res = await axios.post(import.meta.env.VITE_BACKEND_ENDPOINT + '/api/auth/register', {
            username: form.username,
            email: form.email,
            password: form.password
        }, { withCredentials: true });

        console.log(res);
    }

    return (
        <main>
            <div className="left">
                <div className="logo">
                    <img src="primary-logo.png" alt="primary log" />
                </div>

                <div className="center">
                    <div className="text">
                        <div className="up">
                            Join today and start capturing
                        </div>
                        <div className="down">
                            the moments that matter.
                        </div>
                    </div>

                    <div className="pic">
                        <img src="register-pic.png" alt="login pic" />
                    </div>
                </div>
            </div>

            <div className="right">
                <h2>Get started on Instagram : </h2>
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
                <p>Already have account : <Link to="/login">Login</Link> </p>
            </div>
        </main>
    )
}

export default Register
