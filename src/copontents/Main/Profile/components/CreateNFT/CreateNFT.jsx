import ValidInput from "../../../RegisterPage/components/ValidInput";
import { CardLayout } from "../../../../Layout/CardLayout/CardLayout";
import { toast, ToastContainer } from "react-toastify";
import { fetchCreateNFT } from "../../../../../redux/sliceRedux/SlicePosts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const CreateNFT = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState();
    const [FormData, setFormData] = useState({
        "NFTname": "",
        "Price": 0
    })

    const ControlInput = (event) => {
        setFormData((data) => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }
    
    async function CreateNFTSubmit(event) {
        event.preventDefault();
        setValue(event);
        const CreateNFTdata = await dispatch(fetchCreateNFT({
            title: FormData.NFTname,
            price: FormData.Price
        }))

        console.log(CreateNFTdata.type)

        switch (CreateNFTdata.type) {
            case "market/fetchCreateNFT/fulfilled":
                toast.success("Your NFT has been created", {
                    autoClose: 2000,
                    pauseOnHover: false
                });
                setTimeout(() => {
                    navigate(-1);
                }, 3000)
                break;           
            case "market/fetchCreateNFT/rejected":
                toast.error("Create NFT is not possible. Chek your NFT name", {
                    autoClose: 5000,
                    pauseOnHover: false
                });
                break;
        }
    }

    return (
        <>
            <ToastContainer/>
            <section className="CreateNFT">
                <form className="CreateNFT_left" onSubmit={CreateNFTSubmit}>
                    <ValidInput 
                        Id={"NFTname"}
                        Type={"text"}
                        UnderTpye={"default"}
                        Placehloder={"Name NFT"}
                        ContorlInput={ControlInput}
                        Value={FormData.NFTname}
                        GetStyle={{
                            backgroundImage: `none`
                        }}
                    />
                    <ValidInput 
                        Id={"Price"}
                        Type={"number"}
                        UnderTpye={"default"}
                        Placehloder={"Price"}
                        ContorlInput={ControlInput}
                        Value={FormData.Price}
                        GetStyle={{
                            backgroundImage: `none`
                        }}
                    />
                    <button type="submit">Create NFT</button>
                </form>
                <CardLayout
                    isNeedAuthor={false}
                    NFTname={FormData.NFTname}
                    Price={FormData.Price}
                />
        </section>
        </>
    )
}