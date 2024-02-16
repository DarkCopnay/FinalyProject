import { assets } from "../../../../assets/Assets";
export const AvatarRender = ( {IsEditMode, PreviewIMG, imgURL, onChangeFunction} ) => {
    return (
        <>
            {
                IsEditMode
                ?
                <section className="Profile_Avatar" style={{backgroundImage: PreviewIMG ? `url(http://localhost:4444${PreviewIMG})`: `url(${assets.Profile.NonAvatar})`}}>
                    <section className="Profile_Avatar_blur">
                        <input type="file" id="AvatarPhoto" name="image" style={{display: "none"}} onChange={onChangeFunction} accept="image/*"/>
                        <label htmlFor="AvatarPhoto">
                            <h3>Photo</h3>
                        </label>
                    </section>
                </section>
                :
                <section className="Profile_Avatar" style={{backgroundImage: imgURL ? `url(http://localhost:4444${imgURL})`: `url(${assets.Profile.NonAvatar})`}}></section>
            }
        </>
    )
}