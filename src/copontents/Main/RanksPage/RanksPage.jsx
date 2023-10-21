import { useState } from "react"
import TodayCategory from "./components/TodayCategory/TodayCategory";

export default function RanksPage() {
    const [isTodayBtn, setIsTodayBtn] = useState(true);
    const [isWeekBtn, setIsWeekBtn] = useState(false);
    const [isMonthBtn, setIsMonthBtn] = useState(false);
    const [isTimeBtn, setTimeBtn] = useState(false);

    function RenderRanksCategory() {
        if (isTodayBtn) {
            return (
                <TodayCategory/>
            ) 
        }        
        
        else {
            return <h2>Not Found Category</h2>
        }
    }
    return (
        <section className="RanksPage">
            <header className="RanksPage_header">
                <h2>Top Creators</h2>
                <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
            </header>
            <section className="RanksPage_content">
                <header className="RanksPage_contnet_header">
                    <button 
                    className={isTodayBtn ? "acitv": ""}
                    onClick={() => {
                        setIsTodayBtn(true);
                        setIsWeekBtn(false);
                        setIsMonthBtn(false);
                        setTimeBtn(false); }}>Today <span></span></button>
                    <button
                    className={isWeekBtn ? "acitv": ""} 
                    onClick={() => {
                        setIsTodayBtn(false);
                        setIsWeekBtn(true);
                        setIsMonthBtn(false);
                        setTimeBtn(false); }}>This Week <span></span></button>
                    <button
                    className={isMonthBtn ? "acitv": ""}
                    onClick={() => {
                        setIsTodayBtn(false);
                        setIsWeekBtn(false);
                        setIsMonthBtn(true);
                        setTimeBtn(false);
                    }} 
                    >This Month <span></span></button>
                    <button
                    className={isTimeBtn ? "activ": ""}
                    onClick={() => {
                        setIsTodayBtn(false);
                        setIsWeekBtn(false);
                        setIsMonthBtn(false);
                        setTimeBtn(true);
                    }}
                    >All Time <span></span></button>
                </header>

                <section className="RanksPages_content_info">
                    <h3># Artist</h3>
                    <section className="RanksPages_content_info_right">
                        <h3>Change</h3>
                        <h3>NFTs Sold</h3>
                        <h3>Volume</h3>
                    </section>
                </section>
                <section className="RanksPages_content_users">
                    <RenderRanksCategory />
                </section>
            </section>
        </section>
    )
}