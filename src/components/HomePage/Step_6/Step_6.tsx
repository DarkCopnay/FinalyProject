import { assets } from "../../../assets/Assets"
import { Timer } from "./components/Timer"


export const Step_6 = () => {
    return (
        <section className="step_6" style={ {backgroundImage: `url(${assets.Step_6.step_6_bg_1})`} }>
            <section className="step_6_gradient"></section>
            <section className="step_6_content">
                <section className="step_6_content_left">
                    <a href="#">
                        <img src={assets.avatars.avatar_2} alt="avatar_2" />
                        <section style={ {textAlign: "center"} }>
                            <span>Open</span>
                            <h4>Shroomie</h4>
                        </section>
                    </a>
                    <h1>Magic Mashrooms</h1>
                    <button>
                        <span className="material-symbols-outlined">visibility</span>
                        See NFT
                    </button>
                </section>
                <Timer/>
            </section>
        </section>
    )
}