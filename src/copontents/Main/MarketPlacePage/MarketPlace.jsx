import { useState, useEffect } from "react"


export default function MarketPlace() {
    const [activ, setActiv] = useState('activ');

    return (
        <section className="MarketPlace">
            <header className="MarketPlace_header">
                <h1>Browse Marketplace</h1>
                <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                <section className="MarktPlace_search">
                    <input type="text" placeholder="Search your favourite NFTs" />
                    <span className="material-symbols-outlined">search</span>
                </section>
            </header>
            <section className="MarketPlace_content">
                <header className="MarketPlace_content_header">
                    <button className="activ">NFTs <span>302</span> <span className="line"></span></button>
                    <button>NFTs <span>302</span> <span className="line"></span></button>
                </header>
            </section>
        </section>
    )
}