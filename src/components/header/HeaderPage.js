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
            <Link to="/" className="div-header__link">Home</Link>
            <p onClick={handleLogout} className="p-logout">Sign out</p>        
        </div>
    )
}

export default HeaderPage;