import { assets } from "../../../../assets/Assets"
import { NavLink } from "react-router-dom"
import { CardLayout } from "../../../Layout/CardLayout/CardLayout"

export default function NFTCatalog( {SearchInfo, items} ) {
    return (
        <section className="step_5 step_5_edit">
            <section className="step_5_content step_5_content_edit">
                <section className="step_5 step_5_edit">
                    <section className="step_5_content step_5_content_edit">
                        {
                            items.length === 0 ?
                            <h2>NFT not found</h2>
                            :
                            items.map((obj, index) => 
                                <CardLayout
                                    key={index}
                                    _id={obj.Author._id}
                                    NFTname={obj.title}
                                    AuthorName={obj.Author.nickname}
                                    VerifyCheck={obj.Author.verify}
                                    Color={"#464343"}
                                    Price={100}
                                />,
                            )
                        }
                    </section>
                </section>
            </section>
        </section>
    )
}