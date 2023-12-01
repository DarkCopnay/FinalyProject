import { useState } from "react";
import { NavLink } from "react-router-dom"
import { jwtDecode } from "jwt-decode";
import { assets } from "../../../../assets/Assets";
import { urls } from "../Header";
import AxiosInit from "../../../../axios/axiosInit";

export default function NavMenu() {
    const isAuth = localStorage.getItem('token');
    const [nickname, setNickname] = useState('');
    const [avatarURL, setAvatarURL] = useState('');
    const [IsOpenMenu, SetIsOpenMenu] = useState(false);

    function OpenMenu() {
        SetIsOpenMenu(true);
        setTimeout(() => {
            document.querySelector("#topnav_menu").style.left = "0%";
        }, 100)
    }

    function CloseMenu() {
        document.querySelector("#topnav_menu").style.left = "100%";
        setTimeout(() => {
            SetIsOpenMenu(false);
        }, 1000)
    }

    if (isAuth) {
        AxiosInit.get(`/profile/${jwtDecode(isAuth)._id}`)
        .then((res) => {
            setNickname(res.data.nickname);
            setAvatarURL(res.data.avatarURL);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <span id="topnan_menu_button" className="material-symbols-outlined" 
            onClick={OpenMenu}> menu</span>
            {
                IsOpenMenu ? 
                <section id="topnav_menu">
                    <section className="topnav_menu_close_mine">
                        <span className="material-symbols-outlined" id="topnav_menu_close" onClick={CloseMenu}>close</span>
                    </section>

                    <NavLink onClick={CloseMenu} to={urls.home}><img src={assets.logo} /></NavLink>

                    <section className="topnav_center">
                        <ul>
                            <li><NavLink onClick={CloseMenu} to={urls.market}>Marketplace <span></span></NavLink></li>
                            {/* <li><NavLink onClick={CloseMenu} to={urls.rank}>Rankings <span></span></NavLink></li> */}
                            {/* <li><NavLink to={urls.contact}>Connect a wallet <span></span></NavLink></li> */}
                        </ul>
                        <section>
                            {
                                !isAuth ?
                                <>
                                    <NavLink onClick={CloseMenu} to="/register" className="topnav_sign_up">
                                        <span className="material-symbols-outlined">person</span>
                                        Sign Up
                                    </NavLink>
                                    <NavLink onClick={CloseMenu} className="topnav_sign_up" to={urls.login}>
                                        <span className="material-symbols-outlined">login</span>
                                        Login
                                     </NavLink>
                                </>
                                :
                                <>
                                    <NavLink reloadDocument to={`/profile/${jwtDecode(isAuth)._id}`} className="topnav_Profile">
                                        <img src={!avatarURL ? assets.Profile.NonAvatar : avatarURL} />
                                        <h4>{nickname}</h4>
                                    </NavLink>
                                </>
                            }
                        </section>
                    </section>
            </section> :
            null
            } 
        </>
    )
}