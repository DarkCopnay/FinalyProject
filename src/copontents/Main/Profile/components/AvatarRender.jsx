import { assets } from "../../../../assets/Assets";
export const AvatarRender = ( {IsEditMode, imgURL, onChangeFunction} ) => {
    return (
        <section className="Profile_Avatar" style={{backgroundImage: imgURL ? `url(http://localhost:4444${imgURL})`: `url(${assets.Profile.NonAvatar})`}}>
            {
                IsEditMode ?
                <section className="Profile_Avatar_blur">
                    <input type="file" id="AvatarPhoto" name="image" style={{display: "none"}} onChange={onChangeFunction} accept="image/*"/>
                    <label htmlFor="AvatarPhoto">
                        <h3>Photo</h3>
                    </label>
                </section>
                :
                null
            }
        </section>
    )
}