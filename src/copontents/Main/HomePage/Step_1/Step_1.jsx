import { assets } from "../../../../assets/Assets";
import { NavLink } from "react-router-dom";
import { urls } from "../../../Layout/Header/Header";

export default function Step_1() {
    return (
        <section className="step_1">
            <section className="step_1_left">
                <h1>Discover Digital Art & Collect NFTs</h1>
                <p>NFT marketplace UI created with Anima for Figma. Collect, 
                        buy and sell art from more than 20k NFT artists.</p>
                
                <NavLink to={urls.singup}>
                        <span className="material-symbols-outlined">rocket_launch</span>
                        Get Started
                </NavLink>

                <section className="step_1_left_footer">
                    <section className="step_1_left_footer_box">
                        <h2>240k+</h2>
                        <h4>Total Sale</h4>
                    </section>
                    <section className="step_1_left_footer_box">
                        <h2>100k+</h2>
                        <h4>Auctions</h4>
                    </section>
                    <section className="step_1_left_footer_box">
                        <h2>240k+</h2>
                        <h4>Artists</h4>
                    </section>
                </section>
            </section>
            <section className="step_1_right">
                <img src={assets.Step_1.SpaceBox} alt="spaceBox" />
                <section className="step_1_right_footer">
                    <h3>Space Walking</h3>
                    <a href="#">
                        <img src={assets.avatars.avatar_1} alt="avatar" />
                        Animakid
                    </a>
                </section>
            </section>
        </section>
    )
}