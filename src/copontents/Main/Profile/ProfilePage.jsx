import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { assets } from "../../../assets/Assets";
import { AvatarRender } from "./components/AvatarRender";
import { BackgroundProfileRender } from "./components/BackgroundProfileRender";
import { AxiosInit, UploadFileAvatar, UpdateProfile } from "../../../axios/axiosInit";
import { OnlyUserAuthRender } from "./components/OnlyUserAuthRender";
import ProfilePageContent from "./components/ProfilePageContent";


export default function ProfilePage() {
    const token = window.localStorage.getItem("token");
    const [IsLoading, setIsLoading] = useState(true);
    const [IsEditMode, SetIsEditMode] = useState(false);
    const [data, setData] = useState();
    const [NewAvatar, SetNewAvatar] = useState("");
    const [newBG, setNewBG] = useState("");
    const [NewDataForm, setNewDataFrom] = useState({
        NewName: undefined,
        NewBio: undefined,
        NewDiscordLink: undefined,
        NewYouTubeLink: undefined,
        NewTwitterLink: undefined,
        NewInstagramLink: undefined,
    })
    
    const handleChangeFile = (event) => {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append("avatar", file);

        UploadFileAvatar(formData)
        .then((res) => {
            SetNewAvatar(res.url);
        })
    }

    const ContorlInput = (event) => {
        setNewDataFrom((data) => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }

    const { id } = useParams();

    useEffect(() => {
         AxiosInit.get(`profile/${id}`)
        .then(async (res) => {
            const response = await res.data;
            setData(response)
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
        })
        
    }, [])

    function ButtonEditMode() {
        SetIsEditMode(true);
        if (IsEditMode) {
            SetIsEditMode(false);
        }

        if (data.avatarURL) {
            SetNewAvatar(data.avatarURL);
        }
    }

    async function UploadProfile(event) {
        event.preventDefault();

        UpdateProfile(id, {
            avatarURL: NewAvatar,
            nickname: NewDataForm.NewName,
            Bio: NewDataForm.NewBio,
            'social.DiscordLink': NewDataForm.NewDiscordLink
        })
    }

    return (
        <>
            <ToastContainer />
            {
                IsLoading ? <h2>Profile Loading...</h2>
                :
                data.ErrorMsg ? navigate("/404")
                :
                <section className="Profile">
                    <BackgroundProfileRender IsEditMode={IsEditMode}/>
                    <header className="Profile_header">
                        <form className="Profile_header_left" encType="multipart/form-data">

                        <AvatarRender IsEditMode={IsEditMode} PreviewIMG={NewAvatar} imgURL={data.avatarURL} onChangeFunction={handleChangeFile}/>
                            {
                                IsEditMode ? <input type="text" name="NewName" defaultValue={data.nickname} onChange={ContorlInput}/> 
                                :
                                <h2>{data.nickname} {data.verify ? <span contextMenu="User verifed" className="material-symbols-outlined">verified</span>: null}</h2>
                            }
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
                                    IsEditMode ? null : <span>Bio not found</span>
                                    :
                                    IsEditMode ? null : <p>{data.Bio}</p>
                                }
                                {
                                    IsEditMode ?
                                        <textarea name="NewBio" defaultValue={data.Bio} onChange={ContorlInput}></textarea>
                                    :
                                    null
                                }
                            </section>

                            {
                                IsEditMode
                                ?
                                <section className="Profile_header_left_social_inputs">
                                    <input type="text" name="NewDiscordLink" defaultValue={data.social.DiscordLink} onChange={ContorlInput} placeholder="Discord Link"/>
                                    <input type="text" placeholder="YouTube Link"/>
                                    <input type="text" placeholder="Twitter Link"/>
                                    <input type="text" placeholder="Instagrm Link"/>
                                </section>
                                :
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
                            
                            {
                                IsEditMode ? 
                                <section className="Profile_Button_Save">
                                    <motion.button onClick={UploadProfile} whileHover={{
                                        backgroundColor: "rgb(11, 171, 11)",
                                    }}>Save</motion.button>
                                    <motion.button  whileHover={{
                                        backgroundColor: "rgb(231, 9, 9)",
                                    }}>Cancel</motion.button>
                                </section>
                                :
                                null
                            }
                        </form>
                        <section className="Profile_header_right">
                            <OnlyUserAuthRender ButtonEditMode={ButtonEditMode} IsEditMode={IsEditMode}  token={token} id={id}/>
                        </section>
                    </header>
                    <ProfilePageContent ProfileData={data}/>
                </section>
            }
        </>
    )
}