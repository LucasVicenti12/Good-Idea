import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./HeaderPage.css"
import { AuthContext } from "../../context/auth";

const HeaderPage = () => {
    const {logout} = useContext(AuthContext)
    const handleLogout = () => {
        logout();
    }

    return(
        <div className="div-header">
            <div className="div-header__left">
                <Link to="/" className="div-header__link">Home</Link>
                <Link to="/signin" className="div-header__link">Login</Link>
            </div>
            <div className="div-header__right">
                <p onClick={handleLogout} className="p-logout">Sign out</p>
            </div>
        </div>
    )
}

export default HeaderPage;