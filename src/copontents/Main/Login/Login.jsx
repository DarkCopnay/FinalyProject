import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"
import { fetchLoginData } from "../../../redux/sliceRedux/SliceAuth";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [IsError, setIsError] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState("");
    const isAuth = window.localStorage.getItem('token');

    const Dispatch = useDispatch();
    const navigate = useNavigate();


    async function PostLogin(event) {
        event.preventDefault()
        const data = await Dispatch(fetchLoginData({username, password}));

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
            
            setIsError(false);
        } else {
            setIsError(true);
            setErrorMsg(data.payload.ErrorMsg)
        }

        navigate("/");

    }

    if (isAuth) {
        navigate("/")
    }

    return (
        <section className="Login">
            <h2>Login Account</h2>
            <form className="Login_content" onSubmit={(event) => {PostLogin(event)}}>
                <label htmlFor="username_input">
                    <input id="username_input" type="text" name="username" placeholder="Username" value={username}
                        onChange={(event) => {setUsername(event.target.value)}}
                    />
                </label>

                <label htmlFor="username_password">
                    <input id="username_password" type="password" name="password" placeholder="Password" value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                    />
                </label>
                {IsError ? <span>*{ErrorMsg}</span>: null}
                <button type="submit">Login</button>
            </form>
        </section>
    )
}