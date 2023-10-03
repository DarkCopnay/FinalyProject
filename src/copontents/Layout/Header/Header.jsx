import { assets } from "../../../assets/assets"
import { Link } from "react-router-dom"
import NavMenu from "./copontents/NavMenu"
// import HomePage from "../../Main/HomePage/HomePage"

export default function Headers() {
    return (
        <header>
                <nav className="topnav">
                <Link to="/"><img src={assets.logo}/></Link>
                <section className="topnav_right">
                    <ul>
                        <li><Link to="/marketplace">Marketplace <span></span></Link></li>
                        <li><Link to="/rank">Rankings <span></span></Link></li>
                        <li><Link to="/contact">Connect a wallet <span></span></Link></li>
                    </ul>

                    <Link className="topnav_sign_up">
                        <span className="material-symbols-outlined">person</span>
                        Sign Up
                    </Link>
                </section>
                <NavMenu />
                </nav>
        </header>
    )
}