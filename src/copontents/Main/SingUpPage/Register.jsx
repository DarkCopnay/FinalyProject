import { assets } from "../../../assets/Assets";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../../redux/sliceRedux/SliceAuth";

export default function SingUpPage() {
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    let { Usename } = document.getElementById("Username");


    const placeholderName = {
        UserName: "Username",
        Email: "E-mail",
        Password: "Password",
        ConfirmPassword: "Confirm Password"
    }

    async function onSubmit(event) {
        event.preventDefault();
        if (UserName === "") {
            Usename.style.border = "1px solid red";
        }
        
    }

    return (
        <section className="SingUp">
            <img src={assets.SingUp.singup_img1} alt="singup_img_1"/>
            <form className="SingUp_right"
                onSubmit={(event) => {onSubmit(event)}}>
                <header>
                    <h2>Create account</h2>
                    <p>Welcome! enter your details and start creating, 
                        collecting and selling NFTs.</p>
                </header>
                <form className="SingUp_right_content" >
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

            <button type="submit">Create account</button>
                </form>
            </form>
        </section>
    )
}
