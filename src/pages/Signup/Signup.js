import React from "react";
import Signup from "../../components/signup/Signup"
import HeaderPage from "../../components/header/HeaderPage";

const SignupPage = () => {
    return(
        <div className="div-main">
            <HeaderPage/>
            <Signup />
        </div> 
    )
}

export default SignupPage;