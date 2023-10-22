import { useState } from "react"
import { assets } from "../../../../assets/Assets";

export default function InputValid() {
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    // const [ErrorMsg, setErrorMsg] = useState('');

    // const [UserNameValid, setUserNameValid] = useState(false)
    // const [EmailValid, setEmailValid] = useState(false);
    // const [PasswordValid, setPasswordValid] = useState(false);
    // const [ConfirmPasswordValid, setConfirmPasswordValid] = useState(false)

    const placeholderName = {
        UserName: "Username",
        Email: "E-mail",
        Password: "Password",
        ConfirmPassword: "Confirm Password"
    }

    // function submitClick() {
    //     if (UserName == "") {
    //         setUserNameValid(true);
    //         setErrorMsg("The field can't be empty")
    //         console.log("test_1")
    //     }

    //     else if (UserName < 15) {
    //         setUserNameValid(true);
    //         setErrorMsg("Username min 15 symbols");
    //         console.log("test_1")
    //     } else {
    //         setUserNameValid(false);
    //         setErrorMsg(null);
    //     }
    // }

    return (
        <>
            <label htmlFor="Username">
                <input
                    id="Username"
                    type="text" 
                    value={UserName}
                    placeholder={placeholderName.UserName}
                    onChange={(event) => {setUserName(event.target.value)}}
                    style={{
                        backgroundImage: `url(${assets.SingUp.svg.User})`
                    }}
                />
                {/* {UserNameValid ? <span>*{ErrorMsg}</span>: ""} */}
            </label>
            <label htmlFor="Email">
                <input
                    id="Email"
                    type="email" 
                    value={Email}
                    placeholder={placeholderName.Email}
                    onChange={(event) => {setEmail(event.target.value)}}
                    style={{
                        backgroundImage: `url(${assets.SingUp.svg.Email})`
                    }}
                />

            </label>
            <label htmlFor="Password">
                <input
                    id="Password" 
                    type="text" 
                    value={Password}
                    placeholder={placeholderName.Password}
                    onChange={(event) => {setPassword(event.target.value)}}
                    style={{
                        backgroundImage: `url(${assets.SingUp.svg.Password})`
                    }}
                />
            </label>
            <label htmlFor="Confirm_Password">
                <input
                    id="Confirm_Password"
                    type="text" 
                    value={ConfirmPassword}
                    placeholder={placeholderName.ConfirmPassword}
                    onChange={(event) => {setConfirmPassword(event.target.value)}}
                    style={{
                        backgroundImage: `url(${assets.SingUp.svg.Password})`
                    }}
                />
            </label>

            <button >Create account</button>
        </>
    )
}