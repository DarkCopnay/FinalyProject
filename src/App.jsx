import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./copontents/Layout/layout"
import HomePage from "./copontents/Main/HomePage/HomePage"

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/singup" element={<HomePage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}