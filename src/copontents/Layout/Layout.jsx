import Headers from "./Header/Header"

export default function Layout( {content} ) {
    return (
        <>
            <Headers />
            {content}
        </>
    )
}