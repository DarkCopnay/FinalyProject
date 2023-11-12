import { useState } from "react"

export default function ValidInput( {Id, Type, UnderTpye, Value, Placehloder, GetStyle, ContorlInput} ) {
    const [IsError, setIsError] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState("");
    const [name, setName] = useState("")

    document.addEventListener("submit", function() {
        const controler = new AbortController();

        if (Value === "") {
            setIsError(true);
            setErrorMsg("Faild is empty");
            controler.abort();

        } else {
            setIsError(false);
            
        }
        
        function TextValid() {
            function NicknameValid() {

                if (Value.length > 1 && Value.length < 4) {
                    setIsError(true);
                    setName("Nickname");
                    setErrorMsg(`${name} must be longer than 4 symbols.`)
                }  
            }
        

             switch (UnderTpye) {
                 case "nickname":
                     NicknameValid();
                     break;
             }
        }

        switch (Type) {
            case "text":
                TextValid();
                break;
                
        }
        
    })

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

            {IsError ? <span>*{ErrorMsg}</span>: null}
        </label>
    )
}