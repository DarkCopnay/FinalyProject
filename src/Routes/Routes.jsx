import { Routes, Route, Navigate } from "react-router-dom";
import PageTemplate from "./components/PageTemplate";
import { urls } from "../copontents/Layout/Header/Header";

export default function RoutesComponent( {Components} ) {
    const {Root_Layout, HomePage, Page404, MarketPlace, RanksPage, SingUpPage} = Components;

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={Root_Layout} Content={HomePage} />} />
            <Route path={urls.market} element={<PageTemplate Layout={Root_Layout} Content={MarketPlace}/>} />
            <Route path={urls.rank} element={<PageTemplate Layout={Root_Layout} Content={RanksPage}/>}/>
            <Route path={urls.singup} element={<PageTemplate Layout={Root_Layout} Content={SingUpPage}/>}/>
            <Route path="*" element={<Navigate to="/404"/>}/>
            <Route path="/404" element={<Page404 />}/>
        </Routes>
    )
}