import { assets } from "../../../assets/Assets";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AxiosInit } from "../../../axios/axiosInit";
import { Slide, toast, ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";


export const CardLayout = ( {_id, _AuthorID, isNeedAuthor=true, IsDelButton=false, NFTname, NFTImg, AuthorName, AuthorAvatar, VerifyMe,Color, Price} ) => {
    const isAuth = localStorage.getItem('token');
    const DelBtnAnimation = {
        button: {width: "40px"},

        span: {opacity: 1},
    }

    function DeleteNFT() {
        AxiosInit.delete(`/market/nft/${_id}`)
        .then(() => {
            toast.success("NFT has been delete!", {
                autoClose: 2000,
                closeButton: false,
                pauseOnHover: false,
                hideProgressBar: true,
                theme: "dark",
                transition: Slide,
            });
            setTimeout(() => {
                window.location.reload(false)
            }, 3500);
        })

        .catch(() => {
            toast.error("NFT has been not deleted!", {
                autoClose: 2000,
                closeButton: false,
                pauseOnHover: false,
                hideProgressBar: true,
                theme: "dark",
                transition: Slide,
            });
        })
    }

    return (
        <>
            <ToastContainer />
            <motion.section className="NFTcard"
                whileHover={{scale: 1.02}}
                transition={{ease: 'easeInOut'}}
            >
            <img src={NFTImg ? NFTImg : assets.Step_4.bgBox_1}/>
            {
                IsDelButton ? 
                    isAuth ?
                        jwtDecode(isAuth)._id === _AuthorID ? 
                            <section className="NFTcard_control_menu">
                                <motion.button style={{backgroundColor: "green"}} variants={DelBtnAnimation} whileHover="button">
                                    <motion.span variants={DelBtnAnimation} whileHover="span">EDIT</motion.span>
                                </motion.button>
                                
                                <motion.button variants={DelBtnAnimation} whileHover="button">
                                    <motion.span variants={DelBtnAnimation} whileHover="span" onClick={DeleteNFT}>DEL</motion.span>
                                </motion.button>
                            </section>
                        :
                        null
                    :
                    null
                : 
                null
            }
            <section className="NFTcard_contnet" style={Color ?{backgroundColor: Color} : null}>
                <section>
                    <h2>{NFTname}</h2>
                    {
                        isNeedAuthor ? 
                        <NavLink to={`/profile/${_AuthorID}`}><img src={AuthorAvatar ? `http://localhost:4444${AuthorAvatar}` : assets.avatars.avatar_1}/>{AuthorName} 
                            {VerifyMe ? <span contextMenu="User verifed" className="material-symbols-outlined">verified</span> : null}
                        </NavLink> 
                        : 
                        null
                    }
                </section>

                <footer className="NFTcard_contnet_footer">
                    <h4>Price</h4>
                    <span>{Price} Coin</span>
                </footer>
            </section>
            </motion.section>
        </>
    )
}