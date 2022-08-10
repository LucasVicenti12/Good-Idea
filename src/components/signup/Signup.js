import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        alert("Usuário cadatrado com sucesso!");
        navigate("/");
    };

    return(
        <div className="div-main-signup">
            <div className="div-login-signup">
                <h1>Goodness - Sign up</h1>
                <input type="email" placeholder="Type your email:" value={email} onChange={(evt) => [setEmail(evt.target.value)]}/>
                <input type="email" placeholder="Confirm your email:" value={emailConf} onChange={(evt) => [setEmailConf(evt.target.value)]}/>
                <input type="password" placeholder="Type a password:" value={senha} onChange={(evt) => [setSenha(evt.target.value)]}/>
                <button className="btn-login" onClick={handleSignup}>Sign Up</button>
                <p className="make-login">If you already have a ancount, <Link to="/signin" className="link">sign in</Link></p>
            </div>
            
        </div>  
    )
}
export default Signup;