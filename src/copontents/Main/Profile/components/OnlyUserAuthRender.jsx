import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const OnlyUserAuthRender = ({token, id, ButtonEditMode, IsEditMode}) => {
    const navigate = useNavigate();
    if (token) {
        const decodeToken = jwtDecode(token)._id;
        if (decodeToken === id) {
            return (
                <>
                    <NavLink to={`/market/create`}>Create NFT</NavLink>
                    <button onClick={ButtonEditMode}>{IsEditMode ? "Edit Off" : "Edit"}</button>
                    <button className="Logout" onClick={onLogout}>Logout</button>
                </>
            )
        } else {
            return (
                <button><span className="material-symbols-outlined">add</span>Follow</button>
            )
        }
    } else {
        return (
            <button><span className="material-symbols-outlined">add</span>Follow</button>
        )
    }

    function onLogout() {
        window.localStorage.removeItem('token');
        navigate('/')
    }
}