import { assets } from "../../../../assets/Assets"
import { NavLink } from "react-router-dom"


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
                    <section className='step_5_box step_5_box_edit' key={index}>
                            {obj.ImgURL ? <img src={obj.ImgURL} alt={obj.ImgURL}/> : <section className="step_5_not_loaded_img"><span className="material-symbols-outlined">image</span></section>}
                            <section className='step_5_box_content step_5_box_content_edit'>
                                <section>
                                    <h2>{obj.title}</h2>
                                    <NavLink to={`/profile/${obj.Author._id}`} ><img src={assets.avatars.avatar_16} alt="avatar_16" /> {obj.Author.nickname}</NavLink>
                                </section>
                                <section className='step_5_box_footer step_5_box_footer_edit'>
                                    <section>
                                        <h4>Price</h4>
                                        <p>{2} ETH</p>
                                    </section>
                                    <section style={ {textAlign:'end'} }>
                                        <h4>Highest Bid</h4>
                                        <p>0 ETH</p>
                                     </section>
                                </section>
                            </section>
                    </section>
                    )
                }
            </section>
        </section>
            </section>
        </section>
    )
}