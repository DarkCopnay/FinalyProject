import { assets } from "../../../assets/Assets";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
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
                        <img className="Profile_Avatar" src={!data.avatarURL ? assets.Profile.NonAvatar : data.avatarURL} alt="Test"/>
                            <h2>{data.nickname} {data.verify ? <span contextMenu="User verifed" className="material-symbols-outlined">verified</span>: null}</h2>
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
                                    <h3>{data.stat.followers}</h3>
                                    <span>Followers</span>
                                </li>
                            </ul>

                            <section className="Profile_header_left_bio">
                                <h3>Bio</h3>
                                {
                                    data.Bio == "" ?
                                    <span>Bio not found</span>
                                    :
                                    <p>{data.Bio}</p>
                                }
                            </section>

                            {
                                data.social.DiscordLink == "#" &&
                                data.social.YouTubeLink == "#" &&
                                data.social.TwitterLink == "#" &&
                                data.social.InstagrmLink == "#" 
                                ?
                                null
                                :
                                <section className="Profile_header_left_social">
                                <h3>Links</h3>
                                <section>
                                    {
                                        data.social.DiscordLink == "#" ? 
                                        null 
                                        :
                                        <a href={data.social.DiscordLink} target="_blank">
                                            <img src={assets.SocialLogo.Discord} alt="Discord"/>
                                        </a>
                                    }
                                    {
                                        data.social.YouTubeLink == "#" ?
                                        null
                                        :
                                        <a href={data.social.YouTubeLink} target="_blank">
                                            <img src={assets.SocialLogo.YouTube} alt="YouTube"/>
                                        </a>
                                    }
                                    {
                                        data.social.TwitterLink == "#" ?
                                        null
                                        :
                                        <a href={data.social.TwitterLink} target="_blank">
                                            <img src={assets.SocialLogo.Twitter} alt="Twitter"/>
                                        </a>
                                    }
                                    {
                                        data.social.InstagrmLink == "#" ?
                                        null
                                        :
                                        <a href={data.social.InstagrmLink} target="_blank">
                                            <img src={assets.SocialLogo.Instagram} alt="Instagram"/>
                                        </a>
                                    }
                                </section>
                            </section> 
                            }
                        </section>
                        <section className="Profile_header_right">
                            <button><span className="material-symbols-outlined">add</span>Follow</button>
                        </section>
                    </header>
                </section>
            }
        </>
    )
}