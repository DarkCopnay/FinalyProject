import { Link } from "react-router-dom"
import { urls } from "../../../Layout/Header/Header"

export default function Step_3() {
    return (
        <section className="step_3">
            <header className="step_3_header">
                <section className="step_3_header_left">
                    <h2>Top creators</h2>
                    <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                </section>
                <Link to={urls.rank}>
                    <span class="material-symbols-outlined">rocket_launch</span>
                    View Rankings
                </Link>
            </header>

            <section className="step_3_content">

            </section>
        </section>
    )
}