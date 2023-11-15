import { assets } from "../../../../../assets/Assets";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import AxiosInit from "../../../../../axios/axiosInit";

export default function TodayCategory() {
    const [data, setData] = useState();
    
    useEffect(() => {
        AxiosInit.get("/ranks")
        .then((res) => {
            setData(res.data)
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
            setData(err);
        })
    }, [])
    return (
        <>            
            {
                !data ? <h2>Loading...</h2>
                :
                data.map((data, index) => 
                    <NavLink to={`/profile/${data._id}`} className="RanksPages_content_user_block" key={index + 1}>
                        <header className="RanksPages_content_user_block_header">
                            <span>{index + 1}</span>
                            <img src={assets.avatars.avatar_4} width={60}/>
                            <h2>{data.nickname}</h2>
                        </header>
                        <section className="RanksPages_content_user_block_right">
                            <span style={{color: "green"}}>+{0}%</span>
                            <span>{0}</span>
                            <span>{0}</span>
                        </section>
                    </NavLink>
                )
            }
        </>
    )
}