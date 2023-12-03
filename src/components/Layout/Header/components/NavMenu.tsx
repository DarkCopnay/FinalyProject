import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../../../assets/Assets";
import { urls } from "../Header";

export const NavMenu = () => {
    const isAuth = false;
    const [isOpenMenu, SetIsOpenMenu] = useState(false);
    const NavRef = useRef<HTMLElement>(null);

    function OpenMenu() {
        SetIsOpenMenu(true);

        useEffect(() => {
            setTimeout(() => {
                if (NavRef.current !== null) {
                    NavRef.current.style.left = '100%';
                }
            }, 100)
        })
    }

    function CloseMenu() {
        useEffect(() => {
            setTimeout(() => {
                if (NavRef.current !== null) {
                    NavRef.current.style.left = '0%';
                }
            }, 1000)
        })
    }

    return (
        <>
            <span id="topnan_menu_button" className="material-symbols-outlined" 
            onClick={OpenMenu}> menu</span>
            {
                isOpenMenu ? 
                <section id="topnav_menu" ref={NavRef}>
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
                                null
                                // <>
                                //     <NavLink reloadDocument to={`/profile/${jwtDecode(isAuth)._id}`} className="topnav_Profile">
                                //         <img src={!avatarURL ? assets.Profile.NonAvatar : avatarURL} />
                                //         <h4>{nickname}</h4>
                                //     </NavLink>
                                // </>
                            }
                        </section>
                    </section>
            </section> :
            null
            } 
        </>
    )
}