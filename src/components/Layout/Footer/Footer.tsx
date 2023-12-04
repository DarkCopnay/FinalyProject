import { assets } from "../../../assets/Assets"
import { NavLink } from "react-router-dom"
import { urls } from "../Header/Header"

export const Footer = () => {
    return (
        <footer className="Footer">
            <section className="footer_content">
                <section className="footer_left">
                    <img src={assets.logo}/>
                    <p>NFT marketplace UI created with Anima for Figma.</p>
                    <h4>Join our community</h4>
                    <section>
                        <a href="#" target="_blank"><img src={assets.SocialLogo.Discord} alt="DiscordLogo" /></a>
                        <a href="#" target="_blank"><img src={assets.SocialLogo.YouTube} alt="YoutubeLogo" /></a>
                        <a href="#" target="_blank"><img src={assets.SocialLogo.Twitter} alt="TwitterLogo" /></a>
                        <a href="#" target="_blank"><img src={assets.SocialLogo.Instagram} alt="InstagramLogo" /></a>
                    </section>
                </section>
                <section className="footer_right">
                    <h2>Explore</h2>
                    <ul>
                        <li><NavLink to={urls.market}>Marketplace</NavLink></li>
                        <li style={{textAlign: "center"}}><NavLink to="#">IN DEV</NavLink></li>
                        <li style={{textAlign: "center"}}><NavLink to="#">IN DEV</NavLink></li>
                    </ul>
                </section>
            </section>
            <hr/>
            <span>Ⓒ NFT Market. Use this template freely.</span>
        </footer>
    )
}