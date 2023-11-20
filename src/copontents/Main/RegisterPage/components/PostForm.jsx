import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { assets } from "../../../../assets/Assets";
import { fetchRegister } from "../../../../redux/sliceRedux/SliceAuth";
import ValidInput from "./ValidInput";

export const FormContext = createContext();

export default function PostForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const [FormData, setFormData] = useState({
        username: "",
        nickname: "",
        email: "",
        password: "",
        ConfirmPassword: ""
    });

    const placeholderName = {
        UserName: "Username",
        NickName: "Nickname",
        Email: "E-mail",
        Password: "Password",
        ConfirmPassword: "Confirm Password"
    }

    const HeadControlerInput = (event) => {
        setFormData((data) => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }

    async function RegisterPost(event) {
        event.preventDefault();
        setValue(event);
        const RegisterData = await dispatch(fetchRegister({
                email: FormData.email,
                password: FormData.password,
                username: FormData.username,
                nickname: FormData.nickname
            }));

        if ('token' in RegisterData.payload) {
            localStorage.setItem('token', RegisterData.payload.token);
            navigate('/')
        }
    }
    return (
        <form className="SingUp_right_content" onSubmit={RegisterPost}>
        <FormContext.Provider value={value}>
         <ValidInput
                Id={"username"}
                Type={"text"}
                Value={FormData.username}
                UnderTpye={"username"}
                Placehloder={placeholderName.UserName}
                ContorlInput={HeadControlerInput}
                GetStyle={{
                    backgroundImage: `url(${assets.SingUp.svg.User})`
                }}
            />

            <ValidInput
                Id={"nickname"}
                Type={"text"}
                UnderTpye={"nickname"}
                Value={FormData.nickname}
                Placehloder={placeholderName.NickName}
                ContorlInput={HeadControlerInput}
                GetStyle={{
                    backgroundImage: `url(${assets.SingUp.svg.User})`
                }}
            />

            <ValidInput
                Id={"email"}
                Type={"email"}
                Value={FormData.email}
                Placehloder={placeholderName.Email}
                ContorlInput={HeadControlerInput}
                GetStyle={{
                    backgroundImage: `url(${assets.SingUp.svg.Email})`
                }}
            />
            <ValidInput
                Id={"password"}
                Type={"password"}
                Value={FormData.password}
                Placehloder={placeholderName.Password}
                ContorlInput={HeadControlerInput}
                GetStyle={{
                    backgroundImage: `url(${assets.SingUp.svg.Password})`
                }}
            />
            <ValidInput
                Id={"password_confirm"}
                Type={"password"}
                Value={FormData.ConfirmPassword}
                Placehloder={placeholderName.ConfirmPassword}
                ContorlInput={HeadControlerInput}
                GetStyle={{
                    backgroundImage: `url(${assets.SingUp.svg.Password})`
                }}
                isDobule={true}
            />

            <button type="submit">Create account</button>
            </FormContext.Provider>
        </form>
    )
}