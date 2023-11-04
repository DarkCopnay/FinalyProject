import AxiosInit from "../../../../axios/axiosInit";
import CardLayout from "../../../Layout/CardLayout/CardLayout";
import { useEffect, useState } from "react";

export default function ProfilePageContent() {
    const [data, setData] = useState();

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
                <button>Created <span>0</span></button>
            </header>
            <section className="Profile_medium_content">
                {/* {
                    !data ?
                    <h2>Loading...</h2>
                    :
                    data.filter()
                } */}
            </section>
        </section>
    )
}