import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPage.css"

const HeaderPage = () => {
    return(
        <div className="div-header">
            <div className="div-header__left">
                <p className="div-header__title">Wellcome</p>
                <Link to="/signin" className="div-header__link">Login</Link>
            </div>
            <div className="div-header__right">
                <p>Sign out</p>
                <p>Made by: Lucas Vicenti</p>
            </div>
        </div>
    )
}

export default HeaderPage;