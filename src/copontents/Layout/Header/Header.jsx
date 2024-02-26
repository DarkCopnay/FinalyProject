import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { assets } from "../../../assets/Assets"
import { jwtDecode } from "jwt-decode"
import { AxiosInit } from "../../../axios/axiosInit"
import NavMenu from "./copontents/NavMenu"
import { motion } from "framer-motion"
// import PreLoader from "./copontents/PreLoader"

export const urls = {
    home: "/" ,
    market: "/market",
    rank: "/rank",
    login: "/login",
    register: "/register",
    profile: "/profile/:id"
}

export default function Headers() {
    const isAuth = window.localStorage.getItem('token');
    const [nickname, setNickName] = useState();
    const [avatarURL, setAvatarURL] = useState();

    if (isAuth) {
        AxiosInit.get(`/profile/${jwtDecode(isAuth)._id}`)
            .then((res) => {
                setNickName(res.data.nickname);
                setAvatarURL(res.data.avatarURL);
        })
    }
    return (
        <>
            {/* <PreLoader /> */}
            <header>
                <nav className="topnav">
                    <NavLink to="/"><motion.img src={assets.logo} /></NavLink>
                    
                <section className="topnav_right">
                    <ul>
                        <li><NavLink to={urls.market}>Marketplace <span></span></NavLink></li>
                        {/* <li><NavLink to={urls.rank}>Rankings <span></span></NavLink></li> */}
                    </ul>


                    {
                        isAuth ?
                        null
                        :
                        <>
                            <NavLink to={urls.register} className="topnav_sign_up">
                                <span className="material-symbols-outlined">person</span>
                                Sign Up
                            </NavLink>

                            <NavLink className="topnav_sign_up" to={urls.login}>
                                <span className="material-symbols-outlined">login</span>
                                Login
                            </NavLink>
                        </>
                    }

                    {
                        isAuth ?
                        <NavLink reloadDocument to={`/profile/${jwtDecode(isAuth)._id}`} className="topnav_Profile">
                            <img src={!avatarURL ? assets.Profile.NonAvatar : `http://localhost:4444${avatarURL}`} />
                            <h4>{nickname}</h4>
                        </NavLink>
                        :
                        null
                    }

                </section>
                <NavMenu />
                </nav>
            </header>
        </>
    )
}