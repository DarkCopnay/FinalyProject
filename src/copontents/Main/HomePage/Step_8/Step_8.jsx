import { assets } from "../../../../assets/Assets";

export default function Step_8() {

    return (
        <section className="step_8">
            <section className="step_8_form">
                <img src={assets.Step_8.step_8_form} alt="step_8_form" />
                <section className="step_8_form_right">
                    <h2>Join our weekly <br /> digest</h2>
                    <p>Get exclusive promotions & updates straight to your inbox.</p>
                    <section className="step_8_form_right_input">
                    <input type="email" placeholder="E-mail" />
                    <button>
                        <span><span className="material-symbols-outlined">send</span>Sented</span>
                        <section>
                            <span className="material-symbols-outlined">mail</span>
                            <h4>Subscribe</h4>
                        </section>
                    </button>
                    </section>
                </section>
            </section>
            
        </section>
    )
}