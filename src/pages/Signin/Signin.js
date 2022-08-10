import React from "react";
import HeaderPage from "../../components/header/HeaderPage";
import Signin from "../../components/signin/Signin";

const SigninPage = () => {
    return (
        <div className="div-main">
            <HeaderPage />
            <Signin />  
        </div>
    )
}

export default SigninPage;