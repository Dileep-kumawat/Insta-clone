import { useContext } from "react";
import { AuthContext } from "../auth.Context";
import { login, register, getMe } from '../services/auth.api.jsx'

export function useAuth() {
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;

    async function handleLogin(username, email, password) {
        setLoading(true);

        const res = await login(username, email, password);

        setUser(res.user);

        setLoading(false);
    }

    async function handleRegister(username, email, password) {
        setLoading(true);

        const res = await register(username, email, password);

        setUser(res.user);

        setLoading(false);
    }

    async function handleGetMe() {
        setLoading(true);

        const res = await getMe();

        setUser(res.user);

        setLoading(false);
    }

    return { user, loading, handleGetMe, handleLogin, handleRegister }
}