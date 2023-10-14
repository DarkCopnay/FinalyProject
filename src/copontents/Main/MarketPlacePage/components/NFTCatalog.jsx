import { assets } from '../../../../assets/Assets';
import NFTdata from './data/NFT.json'

export default function NFTCatalog() {
    const data = NFTdata;
    return (
        <section className="step_5">
            <section className="step_5_content">
                {
                    data.map((data) => 
                        <section className='step_5_box' key={data.id}>
                            <img src={assets.Step_5.step_5_box1} alt='step_5'/>
                            <section className='step_5_box_content'>
                                <section>
                                    <h2>{data.name}</h2>
                                    <a href="#"><img src="img/MinePage/avatar/avatar_16.png" alt="avatar_16" /> {data.AuthorName}</a>
                                </section>
                                <section>

                                </section>
                            </section>
                        </section>
                    )
                }
            </section>
        </section>
    )
}