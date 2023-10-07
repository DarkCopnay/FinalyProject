import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./copontents/Main/HomePage/HomePage"
import Page404 from "./copontents/Main/ErrorsPage/Page404"
import Root_Layout from "./copontents/Layout/Root_Layout"

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Root_Layout>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Root_Layout>
            </BrowserRouter>
        </>
    )
}