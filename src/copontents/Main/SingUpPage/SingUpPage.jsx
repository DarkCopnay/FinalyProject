import { assets } from "../../../assets/Assets";
import InputValid from "./components/InputValid";

export default function SingUpPage() {

    return (
        <section className="SingUp">
            <img src={assets.SingUp.singup_img1} alt="singup_img_1"/>
            <form className="SingUp_right">
                <header>
                    <h2>Create account</h2>
                    <p>Welcome! enter your details and start creating, 
                        collecting and selling NFTs.</p>
                </header>
                <section className="SingUp_right_content">
                    <InputValid />
                </section>
            </form>
        </section>
    )
}
