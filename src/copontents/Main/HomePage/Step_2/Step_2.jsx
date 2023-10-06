import { assets } from "../../../../assets/assets";

export default function Step_2() {

    return (
        <section className="step_2">
            <header className="step_2_header">
                <h2>Trending Collection</h2>
                <p>Checkout our weekly updated trending collection.</p>
            </header>
            <section className="step_2_content">

                <section className="step_2_box">
                    <img src={assets.Step_2.Dog} alt="dog"/>
                    <section className="step_2_box_content">
                        <img src={assets.Step_2.cat} width={100} alt="cat" />
                        <img src={assets.Step_2.bear} width={100} alt="bear" />
                        <section className="step_2_box_count">1025+</section>
                    </section>
                    <section className="step_2_box_footer">
                        <h2>DSGN Animals</h2>
                        <a href="#"><img src={assets.avatars.avatar_1} alt="avatar_1" /> MrFox</a>
                    </section>
                </section>

                <section className="step_2_box">
                    <img src={assets.Step_2.Mushroom_1} alt="Mushroom_1"/>
                    <section className="step_2_box_content">
                        <img src={assets.Step_2.Mushroom_2} width={100} alt="Mushroom_2" />
                        <img src={assets.Step_2.Mushroom_3} width={100} alt="Mushroom_3" />
                        <section className="step_2_box_count">1025+</section>
                    </section>
                    <section className="step_2_box_footer">
                        <h2>Magic Mushrooms</h2>
                        <a href="#"><img src={assets.avatars.avatar_1} alt="avatar_1" /> Shroomie</a>
                    </section>
                </section>

                <section className="step_2_box">
                    <img src={assets.Step_2.robot_1} alt="robot_1"/>
                    <section className="step_2_box_content">
                        <img src={assets.Step_2.robot_2} width={100} alt="robot_2" />
                        <img src={assets.Step_2.robot_3} width={100} alt="robot_3" />
                        <section className="step_2_box_count">1025+</section>
                    </section>
                    <section className="step_2_box_footer">
                        <h2>Disco Machines</h2>
                        <a href="#"><img src={assets.avatars.avatar_1} alt="avatar_1" /> BeKind2Robots</a>
                    </section>
                </section>
            </section>
        </section>
    )
}