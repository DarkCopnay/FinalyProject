import { Link } from "react-router-dom"
import { assets } from "../../../../assets/Assets";
import { urls } from "../Header";

export default function NavMenu() {

    function OpenMenu() {
        document.getElementById("topnav_menu").style.display = "flex";
        setTimeout(() => {
            document.getElementById("topnav_menu").style.left = "0%";
        }, 200)
    }

    function CloseMenu() {
        document.getElementById("topnav_menu").style.left = "100%";
        setTimeout(() => {
            document.getElementById("topnav_menu").style.display = "none";
        }, 1100)
    }
    
    return (
        <>
            <span id="topnan_menu_button" className="material-symbols-outlined" onClick={OpenMenu}>menu</span>

            <section id="topnav_menu">
                    <section className="topnav_menu_close_mine">
                        <span className="material-symbols-outlined" id="topnav_menu_close" onClick={CloseMenu}>close</span>
                    </section>

                    <img src={assets.logo} />

                    <section className="topnav_center">
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
            </section> 
        </>
    )
}