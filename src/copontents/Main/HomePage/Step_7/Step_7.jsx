import { assets } from "../../../../assets/Assets";

export default function Step_7() {
    return (
        <section className="step_7">
        <header className="step_7_header">
            <h2>How it works</h2>
            <p>Find out how to get started</p>
        </header>
        <section className="step_7_content">
            <section className="step_7_box">
                <img src={assets.Step_7.step_7_img_1} alt="step_7_img_1" />
                <section className="step_7_box_content">
                    <h2>Setup Your wallet</h2>
                    <p>Set up your wallet of choice. 
                        Connect it to the Animarket
                        by clicking the wallet icon in the top right 
                        corner.</p>
                </section>
            </section>

            <section className="step_7_box">
                <img src={assets.Step_7.step_7_img_2} alt="step_7_img_2" />
                <section className="step_7_box_content">
                    <h2>Create Collection</h2>
                    <p>Upload your work and setup your collection. 
                        Add a description, social links and floor price.</p>
                </section>
            </section>

            <section className="step_7_box">
                <img src={assets.Step_7.step_7_img_3} alt="step_7_img_3" />
                <section className="step_7_box_content">
                    <h2>Start Earning</h2>
                    <p>Choose between auctions and fixed-price listings. 
                        Start earning by selling your NFTs or trading others.</p>
                </section>
            </section>
        </section>
    </section>
    )
}