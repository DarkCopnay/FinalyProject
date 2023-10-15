import { useState, useEffect } from "react"
import NFTdata from './components/data/NFT.json'
import CollectionsData from './components/data/Collections.json';
import NFTCatalog from "./components/NFTCatalog";
import CollectionsCatalog from "./components/CollectionsCatalog";


export default function MarketPlace() {
    const [NFTactiv, setNFTactiv] = useState(true);
    const [CollectionsActiv, setCollectionActiv] = useState(false);
    const [Search, SetSearch] = useState("");
    const data = NFTdata;

    return (
        <section className="MarketPlace">
            <header className="MarketPlace_header">
                <h1>Browse Marketplace</h1>
                <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                <section className="MarktPlace_search">
                    <input 
                        type="search" 
                        placeholder="Search your favourite NFTs" 
                        onChange={(event) => {SetSearch(event.target.value)}}
                        />
                    <span className="material-symbols-outlined">search</span>
                </section>
            </header>
            <section className="MarketPlace_medium">
                <header className="MarketPlace_medium_header">
                    <button 
                    onClick={() => {
                        setNFTactiv(true);
                        setCollectionActiv(false);
                    }}

                    className={NFTactiv ? "activ": ""}> NFTs <span>{data.length}</span> <span className="line"></span></button>
                    <button onClick={() => {
                        setCollectionActiv(true);
                        setNFTactiv(false);
                    }} 

                    className={CollectionsActiv ? "activ": ""}>Collections <span>{CollectionsData.length}</span> <span className="line"></span></button>
                </header>
                <section className="MarketPlace_medium_content">
                    {NFTactiv ? <NFTCatalog/> : <CollectionsCatalog SearchInfo={Search}/>}
                </section>
            </section>
        </section>
    )
}