import { assets } from "../../../assets/Assets";
import PostForm from "./components/PostForm";

export default function SingUpPage() {

    return (
        <section className="SingUp">
            <img src={assets.SingUp.singup_img1} alt="singup_img_1"/>
            <section className="SingUp_right">
                <header>
                    <h2>Create account</h2>
                    <p>Welcome! enter your details and start creating, 
                        collecting and selling NFTs.</p>
                </header>
                <PostForm />
            </section>
        </section>
    )
}
