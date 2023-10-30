import AxiosInit from "../../../axios/axiosInit";
import { Navigate } from "react-router-dom";
import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [IsError, setIsError] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState("");

    const isAuth = window.localStorage.getItem("token");

    function PostLogin(event) {
        event.preventDefault()
        AxiosInit.post('/login', {username, password})
        .then((res) => {
            const dataUser = res.data;

            if ('token' in dataUser) {
                window.localStorage.setItem('token', dataUser.token);
            }
            setIsError(false);
            setErrorMsg("")

            return (
                <Navigate to='/'/>
            )

        })
        .catch((err) => {
            const ErrorMsg = err.response.data.ErrorMsg;
            setIsError(true);
            setErrorMsg(ErrorMsg)
        })
    }

    if (isAuth) {
        return (
            <Navigate to="/"/>
        )
    }


    return (
        <section className="Login">
            <h2>Login Account</h2>
            <form className="Login_content" onSubmit={(event) => PostLogin(event)}>
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
                <button>Login</button>
            </form>
        </section>
    )
}