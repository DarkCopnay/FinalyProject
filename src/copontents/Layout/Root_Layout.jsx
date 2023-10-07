import Footer from "./Footer/Footer"
import Headers from "./Header/Header"

export default function Root_Layout({ children }) {
    return (
        <>
            <Headers />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}