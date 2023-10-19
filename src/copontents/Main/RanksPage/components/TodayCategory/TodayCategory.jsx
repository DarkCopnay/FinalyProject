import { assets } from "../../../../../assets/Assets";
import data from "../../data/userdata.json";

export default function TodayCategory() {
    

    return (
        <>
            {
                data.sort((a, b) => b.change >= a.change ? 1: -1)
                .map((data, index) => 
                    <section className="RanksPages_content_user_block" key={index + 1}>
                        <header className="RanksPages_content_user_block_header">
                            <span>{index + 1}</span>
                            <img src={assets.avatars.avatar_4} width={60}/>
                            <h2>{data.name}</h2>
                        </header>
                        <section className="RanksPages_content_user_block_right">
                            <span style={{color: "green"}}>+{data.change}%</span>
                            <span>{data.NFTsolid}</span>
                            <span>{data.volume}</span>
                        </section>
                    </section>
                )
            }
        </>
    )
}