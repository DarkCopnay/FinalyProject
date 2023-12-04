import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { RootLayoutProps } from "./Interfaces"

export const Root_Layout = ( {children}:RootLayoutProps ) => {
    return (
        <>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}