import { assets } from "../../../assets/Assets";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosInit from "../../../axios/axiosInit";

export default function ProfilePage() {
    const [data, setData] = useState();
    const [IsLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        AxiosInit.get(`profile/${id}`)
        .then((res) => {
            setData(res.data);
            setIsLoading(false);
        })
    }, [])

    return (
        <>
            {
                IsLoading ? <h2>Profile Loading...</h2>
                :
                <section className="Profile">
                    <section className="Profile_header_BG">
                    </section>
                    <header className="Profile_header">
                        <section className="Profile_header_left">
                        <img className="Profile_Avatar" src={assets.upload.uplodaAvater} alt="Test"/>
                            <h2>{data.nickname}</h2>
                            <ul className="Profile_header_left_stat_box">
                                <li>
                                    <h3>0</h3>
                                    <span>Volume</span>
                                </li>
                                <li>
                                    <h3>0</h3>
                                    <span>NFTs Create</span>
                                </li>
                                <li>
                                    <h3>0</h3>
                                    <span>Followers</span>
                                </li>
                            </ul>

                            <section className="Profile_header_left_bio">
                                <h3>Bio</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dicta. 
                                Ea cumque quia quidem minima sed aspernatur repellendus voluptatibus, modi 
                                perferendis tenetur numquam nostrum provident, 
                                iure culpa quisquam nemo necessitatibus.</p>
                            </section>

                            <section className="Profile_header_left_social">
                                <h3>Links</h3>
                                <section>
                                    <a href="#" target="_blank">
                                        <img src={assets.SocialLogo.Discord} alt="Discord"/>
                                    </a>
                                    <a href="#" target="_blank">
                                    <img src={assets.SocialLogo.YouTube} alt="YouTube"/>
                                    </a>
                                    <a href="#" target="_blank">
                                    <img src={assets.SocialLogo.Twitter} alt="Twitter"/>
                                    </a>
                                    <a href="#" target="_blank">
                                    <img src={assets.SocialLogo.Instagram} alt="Instagram"/>
                                    </a>
                                </section>
                            </section>
                        </section>
                    </header>
                </section>
            }
        </>
    )
}