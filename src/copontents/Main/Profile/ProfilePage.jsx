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
                    <img className="Profile_Avatar" src={assets.upload.uplodaAvater} alt="Test"/>
                    <header className="Profile_header">
                        <section className="Profile_header_left">
                            <h2>Animakid</h2>
                            <section className="Profile_header_left_stat">
                                    <ul className="Profile_header_left_stat_box">
                                        <li>
                                            <h3>250k+</h3>
                                            <span>Volume</span>
                                        </li>
                                        <li>
                                            <h3>250k+</h3>
                                            <span>Volume</span>
                                        </li>
                                        <li>
                                            <h3>250k+</h3>
                                            <span>Volume</span>
                                        </li>
                                    </ul>
                            </section>
                        </section>
                    </header>
                </section>
            }
        </>
    )
}