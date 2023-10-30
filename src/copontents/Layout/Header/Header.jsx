import { NavLink } from "react-router-dom"
import { assets } from "../../../assets/Assets"
import NavMenu from "./copontents/NavMenu"
import PreLoader from "./copontents/PreLoader"

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
    return (
        <>
            {/* <PreLoader /> */}
            <header>
                <nav className="topnav">
                <NavLink to="/"><img src={assets.logo}/></NavLink>
                <section className="topnav_right">
                    <ul>
                        <li><NavLink to={urls.market}>Marketplace <span></span></NavLink></li>
                        <li><NavLink to={urls.rank}>Rankings <span></span></NavLink></li>
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
                        <NavLink to="/profile" className="topnav_Profile">
                            <img src={assets.avatars.avatar_1} />
                            <h4>Nickname</h4>
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