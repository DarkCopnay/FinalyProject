import { AppProps } from "./components/Layout/Types/inedex";

export const App = ( {Routes, Components}:AppProps ) => {
    return (
        <>
            <Routes Components={Components}/>
        </>
    )
}