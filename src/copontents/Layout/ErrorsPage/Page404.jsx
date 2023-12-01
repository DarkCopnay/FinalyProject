import { NavLink, useNavigate } from "react-router-dom"

export default function Page404() {
    const navigate = useNavigate()
    return (
        <>
            <section className="Error404">
                <h1 className="bg_error">404</h1>
                <section className="Error404_content">
                    <h1>Page not found</h1>
                    <p>Check the link above the site</p>
                    <NavLink to={navigate(-2)}>Return</NavLink>
                </section>
            </section>
        </>
    )
}