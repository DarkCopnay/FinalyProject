import { useState } from "react"

export default function ValidInput( {Id, Type, UnderTpye, Value, Placehloder, GetStyle, ContorlInput} ) {
    function TextValid({UnderTpye}) {
        const [IsError, setIsError] = useState(false);
        const [ErrorMsg, setErrorMsg] = useState("");
        const lowerOutput = UnderTpye.toLowerCase();

        switch (lowerOutput) {
            case "nickname":
                NicknameValid();
                break;
        }

        async function NicknameValid() {

            return (
                <label htmlFor={Id}>
                    <input 
                        id={Id}
                        type={Type}
                        value={Value}
                        placeholder={Placehloder}
                        onChange={(event) => {ContorlInput(event.target.value)}}
                        style={GetStyle}
                    />
                    {IsError ? <span>*{ErrorMsg}</span> : null}
                </label>
            )
        }
    }

    switch (Type) {
        case 'text':
            return <TextValid UnderTpye={UnderTpye}/>
            
    }
    // return (
    //     <label htmlFor={Id}>
    //         <input 
    //             id={Id}
    //             type={Type}
    //             value={Value}
    //             placeholder={Placehloder}
    //             onChange={(event) => {ContorlInput(event.target.value)}}
    //             style={GetStyle}
    //         />
    //     </label>
    // )
}