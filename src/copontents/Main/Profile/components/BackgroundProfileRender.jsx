export const BackgroundProfileRender = ({BackgroundURL, PreBackgroundURL, onChangeFunction, IsEditMode}) => {
    return (
        <section className="Profile_header_BG">
            {
                IsEditMode
                ?
                <section className="Profile_header_BG_select" style={{backgroundImage: PreBackgroundURL ? `url(http://localhost:4444${PreBackgroundURL})`: null}}>
                    <input id="BG_select" type="file" name="background_select" accept="image/*" onChange={onChangeFunction} />
                    <label htmlFor="BG_select">
                        <h2>Background Select</h2>
                    </label>
                </section>
                :
                <section></section>
            }
        </section>
    )
}