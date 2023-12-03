import { NavLink } from "react-router-dom"
// import { useEffect, useState } from "react"
import { assets } from "../../../assets/Assets"
// import { jwtDecode } from "jwt-decode"
// import NavMenu from "./copontents/NavMenu"
// import AxiosInit from "../../../axios/axiosInit"
import { UrlsType } from "../Types/inedex";

export const urls:UrlsType = {
    home: "/",
    market: "/market",
    register: "/register",
    login: "/login",
    
}

export const Header = () => {
    const isAuth:boolean = false;

    return (
        <>
            {/* <PreLoader /> */}
            <header>
                <nav className="topnav">
                <NavLink to="/"><img src={assets.logo}/></NavLink>
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

                    {/* {
                        isAuth ?
                        <NavLink reloadDocument to={`/profile/${jwtDecode(isAuth)._id}`} className="topnav_Profile">
                            <img src={!avatarURL ? assets.Profile.NonAvatar : avatarURL} />
                            <h4>{nickname}</h4>
                        </NavLink>
                        :
                        null
                    } */}

                </section>
                </nav>
            </header>
        </>
    )
}