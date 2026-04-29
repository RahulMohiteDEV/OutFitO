import { setError, setLoading, setUser } from "../state/auth.slice";
import { registerUser, loginUser } from "../service/auth.api";
import { useDispatch } from "react-redux";

export const useAuth = () => {
    const dispatch = useDispatch();

    async function handleRegister({ email, contact, password, fullname, isSeller = false }) {
    
        const data = await registerUser({ email, contact, password, fullname, isSeller });

        dispatch(setUser(data));
        return data.user
    }

     async function handleLogin({ email, password }) {

        const data = await loginUser({ email, password })
        dispatch(setUser(data.user))
        return data.user
    }

    return {
        handleRegister,
        handleLogin
    }
}