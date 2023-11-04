import { assets } from "../../../assets/Assets";
import { NavLink } from "react-router-dom";

export default function CardLayout( {_id, isNeedAuthor=true, NFTname, AuthorName, AuthorAvatar, Price} ) {

    return (
        <section className="NFTcard">
            <img src={assets.Step_4.bgBox_1}/>
            <section className="NFTcard_contnet">
                <section>
                    <h2>{NFTname}</h2>
                    {isNeedAuthor ? <NavLink to={`/profile/${_id}`}><img src={assets.avatars.avatar_1}/>{AuthorName}</NavLink> : null}
                </section>

                <footer className="NFTcard_contnet_footer">
                    <h4>Price</h4>
                    <span>{Price} Coin</span>
                </footer>
            </section>
        </section>
    )
}