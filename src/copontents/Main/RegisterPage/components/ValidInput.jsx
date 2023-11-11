import { useState } from "react"

export default function ValidInput( {Id, Type, Value, Placehloder, GetStyle, ContorlInput} ) {
    const [IsError, setIsError] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState("");

    function TextInput() {
        switch (Value) {
            case "" || " ":
                setIsError(true);
                setErrorMsg("Input is Empty");
                break;
            
            case Value.length < 5:
                setIsError(true);
                setErrorMsg(`${Placehloder}, less than 5 characters`)
                break;
        }

        return (
            <label htmlFor={Id}>
                <input 
                    id={Id}
                    type="text"
                    value={Value}
                    placeholder={Placehloder}
                    onChange={ContorlInput}
                    style={GetStyle}
                />
                {IsError ? <span>*{ErrorMsg}</span> : null}
            </label>
        )
    }

    switch (Type) {
        case "text":
            return <TextInput/>;
    }
}