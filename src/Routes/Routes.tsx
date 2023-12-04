import { Routes, Route, Navigate } from "react-router-dom";
import { PageTemplate } from "./components/PageTemplate";

export const RoutesComponetns = ({Components}:any ) => {
    const {Home, Page404, Root_Layout} = Components;

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={Root_Layout} Content={Home}/>} />
            <Route path="/404" element={<Page404/>} />
            <Route path="*" element={<Navigate to='/404'/>}/>
        </Routes>
    )
}