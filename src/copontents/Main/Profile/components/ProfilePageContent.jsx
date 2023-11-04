import AxiosInit from "../../../../axios/axiosInit";
import CardLayout from "../../../Layout/CardLayout/CardLayout";
import { useEffect, useState } from "react";

export default function ProfilePageContent( {ProfileData} ) {
    const [data, setData] = useState();
    const [NFT, setNFT] = useState();

    useEffect(() => {
        AxiosInit.get('/market')
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <section className="Profile_medium">
            <header className="Profile_medium_header">
                <button>Created <span>{0}</span></button>
            </header>
            <section className="Profile_medium_content">
                {
                    !data ?
                    <h2>Loading...</h2>
                    :
                    data.filter((UserData) => UserData.Author.username === ProfileData.username).map((data, index) => 
                        <CardLayout 
                            _id={data._id}
                            index={index + 1}
                            isNeedAuthor={false}
                            NFTname={data.title}
                            AuthorName={data.Author.nickname}
                            Price={data.price}
                        />
                    )
                }
            </section>
        </section>
    )
}

{/* data.map((data) => {
                        console.log(data);
                    }) */}