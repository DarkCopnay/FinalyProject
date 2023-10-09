import { NavLink } from "react-router-dom"
import { urls } from "../Header/Header"

export default function Page404() {
    return (
        <>
            <section className="Error404">
                <h1 className="bg_error">404</h1>
                <section className="Error404_content">
                    <h1>Page not found</h1>
                    <p>Cheack url on website</p>
                    <NavLink to={urls.home}>Return Home</NavLink>
                </section>
            </section>
        </>
    )
}