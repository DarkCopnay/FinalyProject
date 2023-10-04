import Footer from "./Footer/Footer"
import Headers from "./Header/Header"

export default function Layout( {content} ) {
    return (
        <>
            <Headers />
            {content}
            <Footer />
        </>
    )
}