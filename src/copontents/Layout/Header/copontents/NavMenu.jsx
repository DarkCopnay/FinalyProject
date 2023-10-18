import { useState } from "react";
import { Link } from "react-router-dom"
import { assets } from "../../../../assets/Assets";
import { urls } from "../Header";

export default function NavMenu() {
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

                    <img src={assets.logo} />

                    <section className="topnav_center">
                        <ul>
                            <li><Link onClick={CloseMenu} to={urls.market}>Marketplace <span></span></Link></li>
                            <li><Link to={urls.rank}>Rankings <span></span></Link></li>
                            <li><Link to={urls.contact}>Connect a wallet <span></span></Link></li>
                        </ul>
                        <Link to={urls.singup} className="topnav_sign_up">
                            <span className="material-symbols-outlined">person</span>
                            Sign Up
                        </Link>
                    </section>
            </section> :
            null
            } 
        </>
    )
}