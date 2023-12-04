import { assets } from "../../../assets/Assets"

export const Step_5 = () => {
    return (
        <section className="step_5">
            <header className="step_5_header">
                <section className="step_5_header_left">
                    <h1>Discover More NFTs</h1>
                    <p>Explore new trending NFTs</p>                    
                </section>
                <a href="#"><span className="material-symbols-outlined">visibility</span> See All</a>
            </header>

            <section className="step_5_content">
                <section className="step_5_box">
                    <img src={assets.Step_5.step_5_box1} alt="step_5_box_1" />
                    <section className="step_5_box_content">
                        <section>
                            <h2>Distant Galaxy</h2>
                            <a href="#"><img src={assets.avatars.avatar_16} alt="avatar_16" /> MoonDancer</a>
                        </section>
                        <section className="step_5_box_footer">
                            <section className="step_5_box_footer">
                                <section>
                                    <h4>Price</h4>
                                    <p>1.63 ETH</p>
                                </section>
                                <section style={{ textAlign: "center" }}>
                                    <h4>Highest Bid</h4>
                                    <p>1.63 ETH</p>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>

                <section className="step_5_box">
                    <img src={assets.Step_5.step_5_box2} alt="step_5_box_2" />
                    <section className="step_5_box_content">
                        <section>
                            <h2>Life On Edena</h2>
                            <a href="#"><img src={assets.avatars.avatar_17} alt="avatar_17" /> NebulaKid</a>
                        </section>
                        <section className="step_5_box_footer">
                            <section className="step_5_box_footer">
                                <section>
                                    <h4>Price</h4>
                                    <p>1.63 ETH</p>
                                </section>
                                <section style={{ textAlign: "center" }}>
                                    <h4>Highest Bid</h4>
                                    <p>1.63 ETH</p>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>

                <section className="step_5_box">
                    <img src={assets.Step_5.step_5_box3} alt="step_5_box_3" />
                    <section className="step_5_box_content">
                        <section>
                            <h2>AstroFiction</h2>
                            <a href="#"><img width="24" src={assets.avatars.avatar_14} alt="avatar_17" /> Spaceone</a>
                        </section>
                        <section className="step_5_box_footer">
                            <section className="step_5_box_footer">
                                <section>
                                    <h4>Price</h4>
                                    <p>1.63 ETH</p>
                                </section>
                                <section style={{ textAlign: "center" }}>
                                    <h4>Highest Bid</h4>
                                    <p>1.63 ETH</p>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}