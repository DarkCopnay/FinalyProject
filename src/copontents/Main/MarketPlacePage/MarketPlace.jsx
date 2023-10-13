import { useState, useEffect } from "react"

export default function MarketPlace() {
    let tempCount = 25;
    return (
        <section className="MarketPlace">
            <header className="MarketPlace_header">
                <h1>Browse Marketplace</h1>
                <p>Browse through more than {tempCount}k NFTs on the NFT Marketplace.</p>
                <section className="MarktPlace_search">
                    <input type="text" placeholder="Search your favourite NFTs" />
                    <span className="material-symbols-outlined">search</span>
                </section>
            </header>
        </section>
    )
}