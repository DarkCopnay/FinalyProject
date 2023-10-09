import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

export default function RoutesComponent( {Components} ) {
    const {Root_Layout, HomePage, Page404} = Components;

    return (
        <Routes>
            <Route index element={<Home Layout={Root_Layout} Content={HomePage} />} />
            <Route path="*" element={<Navigate to="/404"/>}/>
            <Route path="/404" element={<Page404 />}/>
        </Routes>
    )
}