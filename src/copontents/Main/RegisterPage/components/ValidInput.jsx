import { useState, useEffect, useRef } from "react"
import { AxiosInit } from "../../../../axios/axiosInit";


export default function ValidInput( {
    Id, 
    Type, 
    UnderTpye, 
    Value, 
    Placehloder, 
    GetStyle, 
    ContorlInput, 
    PostEvent,
    CustomErrorMsg,
    isConfirmPass
    } ) {
    const [data, setData] = useState();
    const [dataEmail, setDataEmail] = useState();
    const [IsError, setIsError] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        AxiosInit.get("/users")
            .then(async (res) => {
                const responseData = await res.data;

                setData(responseData)

                setDataEmail(responseData);

            })
    
            .catch((err) => {
                console.error(err);
            })

            if (PostEvent) {
                Validation()
            }
    }, [PostEvent])

    const Validation = () => {
         if  (Value === "") {
             setIsError(true);
             setErrorMsg("Field is empty");

        } else {
            setIsError(false);
        }
        
        function TextValid() {
            function NicknameValid() {
                if (Value.length >= 1 && Value.length < 4) {
                    setIsError(true);
                    setErrorMsg(`Nickname must be longer than 8 symbols.`)
                }

                data.map((data) => {
                    if (Value === data.nickname) {
                        setIsError(true);
                        setErrorMsg(`That's the nickname already in use`)
                    }
                })


            }

            function UsernameValid() {
                if (Value.length > 1 && Value.length < 4) {
                    setIsError(true);
                    setErrorMsg(`Username must be longer than 8 symbols.`)
                }

                data.map((data) => {
                    if (Value === data.username) {
                        setIsError(true);
                        setErrorMsg(`That's the username already in use`)
                    }
                })
            }


            switch (UnderTpye) {
                case "nickname":
                     NicknameValid();
                     break;

                case "username":
                    UsernameValid();
                    break;

                case "default":
                    break;

                default:
                    throw new Error("UnderType is undefined")
            }
        }

        // function NumberValid() {

        // }

        function EmailValid() {
            const EmailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

            if (Value === "") {
                setIsError(true);
                setErrorMsg("Field is empty");
    
            } else {
                if (EmailRegax.test(Value)) {
                    setIsError(false);
                } else {
                    setIsError(true);
                    setErrorMsg("Invalid water email")
                }
            }

            dataEmail.map((data) => {
                if (Value === data.email) {
                    setIsError(true);
                    setErrorMsg("The email is already in use.");
                }
            })
        }

        function PasswordValid() {
            if (Value === "") {
                setIsError(true);
                setErrorMsg("Field is empty");
    
            } else {
                if (Value.length < 8) {
                    setIsError(true);
                    setErrorMsg("Password must be more than 8 characters")
                }
            } 
        }

        switch (Type) {
            case "text":
                TextValid();
                break;
            
            case "email":
                EmailValid();
                break;
            
            case "password":
                PasswordValid();
                break;
                
        }
    }

    return (
        <label htmlFor={Id}>
            <input 
                id={Id}
                name={Id}
                type={Type}
                value={Value}
                placeholder={Placehloder}
                onChange={ContorlInput}
                style={GetStyle}
            />

            {IsError ? <span>*{CustomErrorMsg ? CustomErrorMsg : ErrorMsg}</span>: null}
        </label>
    )
}