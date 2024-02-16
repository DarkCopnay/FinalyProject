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
                            items.map((data, index) => 
                                <CardLayout
                                    key={index}
                                    _AuthorID={data.Author._id}
                                    AuthorAvatar={data.Author.avatarURL}
                                    NFTname={data.title}
                                    AuthorName={data.Author.nickname}
                                    Color={"#464343"}
                                    VerifyMe={data.Author.verify}
                                    Price={100}
                                />
                            )
                        }
                    </section>
                </section>
            </section>
        </section>
    )
}