import { assets } from "../../../assets/assets"
import { Link } from "react-router-dom"
import NavMenu from "./copontents/NavMenu"
// import HomePage from "../../Main/HomePage/HomePage"

export const urls = {
    home: "/" ,
    market: "/market",
    rank: "/rank",
    contact: "/contact",
    singup: "/singup"
}

export default function Headers() {
    return (
        <header>
                <nav className="topnav">
                <Link to={urls.home}><img src={assets.logo}/></Link>
                <section className="topnav_right">
                    <ul>
                        <li><Link to={urls.market}>Marketplace <span></span></Link></li>
                        <li><Link to={urls.rank}>Rankings <span></span></Link></li>
                        <li><Link to={urls.contact}>Connect a wallet <span></span></Link></li>
                    </ul>

                    <Link to={urls.singup} className="topnav_sign_up">
                        <span className="material-symbols-outlined">person</span>
                        Sign Up
                    </Link>
                </section>
                <NavMenu />
                </nav>
        </header>
    )
}