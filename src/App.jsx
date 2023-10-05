import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./copontents/Layout/Layout"
import HomePage from "./copontents/Main/HomePage/HomePage"
import Page404 from "./copontents/Main/Error/Page404"

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="*" element={<Page404 />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}