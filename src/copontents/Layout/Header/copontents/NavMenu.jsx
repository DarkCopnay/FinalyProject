import { useState } from "react";
import { NavLink } from "react-router-dom"
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

                    <NavLink onClick={CloseMenu} to={urls.home}><img src={assets.logo} /></NavLink>

                    <section className="topnav_center">
                        <ul>
                            <li><NavLink onClick={CloseMenu} to={urls.market}>Marketplace <span></span></NavLink></li>
                            <li><NavLink onClick={CloseMenu} to={urls.rank}>Rankings <span></span></NavLink></li>
                            {/* <li><NavLink to={urls.contact}>Connect a wallet <span></span></NavLink></li> */}
                        </ul>
                        <section>
                            <NavLink onClick={CloseMenu} to="/register" className="topnav_sign_up">
                            <span className="material-symbols-outlined">person</span>
                                Sign Up
                            </NavLink>
                            <NavLink onClick={CloseMenu} className="topnav_sign_up" to={urls.login}>
                                <span className="material-symbols-outlined">login</span>
                                Login
                            </NavLink>
                        </section>
                    </section>
            </section> :
            null
            } 
        </>
    )
}