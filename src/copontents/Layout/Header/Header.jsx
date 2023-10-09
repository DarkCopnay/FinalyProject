import { NavLink } from "react-router-dom"
import { assets } from "../../../assets/Assets"
import NavMenu from "./copontents/NavMenu"
import PreLoader from "./copontents/PreLoader"

export const urls = {
    home: "/" ,
    market: "/market",
    rank: "/rank",
    contact: "/contact",
    singup: "/singup"
}

export default function Headers() {
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
                        <li><NavLink to={urls.contact}>Connect a wallet <span></span></NavLink></li>
                    </ul>

                    <NavLink to={urls.singup} className="topnav_sign_up">
                        <span className="material-symbols-outlined">person</span>
                        Sign Up
                    </NavLink>
                </section>
                <NavMenu />
                </nav>
            </header>
        </>
    )
}