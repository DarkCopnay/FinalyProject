import { assets } from '../../../../assets/Assets';
import CollectionsData from './data/Collections.json';

export default function CollectionsCatalog() {
    const data = CollectionsData;

    return (
        <section className="step_2">
            <section className="step_2_content step_2_content_edit">
                {
                    data.map((data) => 
                        <section className='step_2_box' key={data.id}>
                            <img src={assets.Step_2.Dog} alt='dog'/>
                            <section className='step_2_box_content'>
                                <img src={assets.Step_2.cat} width={100} alt='cat'/>
                                <img src={assets.Step_2.bear} width={100} alt='bear'/>
                                <section className='step_2_box_count'>1025+</section>
                            </section>
                            <section className='step_2_box_footer'>
                                <h2>{data.name}</h2>
                                <a href="#"> <img src={assets.avatars.avatar_1} alt="avatar_1" /> MrFox</a>
                            </section>
                        </section>
                    )
                }
            </section>
        </section>
    )
}