import { assets } from '../../../../assets/Assets';
import NFTdata from './data/NFT.json'

export default function NFTCatalog( {SearchInfo} ) {
    const data = NFTdata;
    return (
        <section className="step_5 step_5_edit">
            <section className="step_5_content step_5_content_edit">
                {
                    data.filter(data => data.name.includes(SearchInfo.join("")) ||
                                        data.name.toLocaleLowerCase().includes(SearchInfo.join("")) ||
                                        data.name.toUpperCase().includes(SearchInfo.join(""))).map(data =>

                        <section className='step_5_box step_5_box_edit' key={data.id}>
                                <img src={assets.Step_5.step_5_box1} alt='step_5'/>
                                <section className='step_5_box_content step_5_box_content_edit'>
                                    <section>
                                        <h2>{data.name}</h2>
                                        <a href="#"><img src={assets.avatars.avatar_16} alt="avatar_16" /> {data.AuthorName}</a>
                                    </section>
                                    <section className='step_5_box_footer step_5_box_footer_edit'>
                                        <section>
                                            <h4>Price</h4>
                                            <p>{data.price} ETH</p>
                                        </section>
                                        <section style={ {textAlign:'end'} }>
                                            <h4>Highest Bid</h4>
                                            <p>{data.sell} ETH</p>
                                        </section>
                                    </section>
                                </section>
                        </section>    
                    )
                }
            </section>
        </section>
    )
}