import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UserAuth";
import "./Signin.css"

const Signin = () => {
    const {signin} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleClick = () => {
        if(!email | !password){
            setError("Fill in all fields");
            return;
        }
        const res = signin(email, password);
        if(res){
            setError(res)
            return;
        }
        navigate("/");
    }

    return(
        <div className="div-main">
            <div className="div-login">
                <h1>Goodness - Sign in</h1>
                <input type="text" value={email} placeholder="Email:" onChange={(evt) => [setEmail(evt.target.value), setError("")]}/>
                <input type="password" value={password} placeholder="Password:" onChange={(evt) => [setPassword(evt.target.value), setError("")]}/>
                <button className="btn-login" onClick={handleClick}>Sign in</button>
                <label className="lbl-error">{error}</label>
                <p className="create-ancount">If you don't have a login, create an <Link to="/signup" className="link">ancount</Link></p>
            </div>
        </div>
    )
}

export default Signin;