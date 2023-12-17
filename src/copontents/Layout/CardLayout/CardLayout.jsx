import { assets } from "../../../assets/Assets";
import { NavLink } from "react-router-dom";

export const CardLayout = ( {_id, isNeedAuthor=true, NFTname, NFTImg, AuthorName, AuthorAvatar, VerifyCheck, Color, Price} ) => {

    return (
        <section className="NFTcard">
            <img src={NFTImg ? NFTImg : assets.Step_4.bgBox_1}/>
            <section className="NFTcard_contnet" style={Color ?{backgroundColor: Color} : null}>
                <section>
                    <h2>{NFTname}</h2>
                    {isNeedAuthor ? <NavLink to={`/profile/${_id}`}><img src={AuthorAvatar ? AuthorAvatar : assets.avatars.avatar_1}/>{AuthorName} 
                    {VerifyCheck ? <span contextMenu="User verifed" className="material-symbols-outlined">verified</span> : null}
                    </NavLink> : null}
                </section>

                <footer className="NFTcard_contnet_footer">
                    <h4>Price</h4>
                    <span>{Price} Coin</span>
                </footer>
            </section>
        </section>
    )
}