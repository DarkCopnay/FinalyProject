import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchNFTposts } from '../../../redux/sliceRedux/SlicePosts';

import NFTCatalog from "./components/NFTCatalog";
import CollectionsCatalog from "./components/CollectionsCatalog";

export default function MarketPlace() {
    const [NFTactiv, setNFTactiv] = useState(true);
    const [CollectionsActiv, setCollectionActiv] = useState(false);
    const [Search, SetSearch] = useState("");

    const { NFT } = useSelector((state) => state.Market)
    const dispatch = useDispatch();

    const isLoading = NFT.status === 'loading';
    const idError = NFT.status === 'rejeact'

    useEffect(() => {
        dispatch(fetchNFTposts())
    }, [])

    return (
        <section className="MarketPlace">
            <header className="MarketPlace_header">
                <h1>Browse Marketplace</h1>
                <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                <section className="MarktPlace_search">
                    <input 
                        type="search" 
                        placeholder="Search your favourite NFTs and Collections" 
                        value={Search}
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

                    className={NFTactiv ? "activ": ""}> NFTs <span>{NFT.items.length}</span> <span className="line"></span></button>
                    <button onClick={() => {
                        setCollectionActiv(true);
                        setNFTactiv(false);
                    }} 

                    className={CollectionsActiv ? "activ": ""}>Collections <span>0</span> <span className="line"></span></button>
                </header>
                <section className="MarketPlace_medium_content">
                    {NFTactiv ? 
                            isLoading ? <h2>Loading...</h2> : <NFTCatalog SearchInfo={Search} items={NFT.items}/>
                        : <CollectionsCatalog SearchInfo={Search}/>}
                </section>
            </section>
        </section>
    )
}