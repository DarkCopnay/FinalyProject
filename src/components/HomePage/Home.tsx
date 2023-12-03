import { useState } from "react"

export const Home = () => {
    const [count, setCount] = useState(0);

    function OnClick() {
        setCount(count + 1);
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={OnClick}>Cats</button>
        </>
    )
}