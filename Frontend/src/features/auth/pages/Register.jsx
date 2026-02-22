import { useState } from "react"
import axios from 'axios'

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
            <div className="container">
                <h2>Register : </h2>
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
                    <input type="submit" />
                </form>
            </div>
        </main>
    )
}

export default Register
