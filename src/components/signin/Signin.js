import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import "./Signin.css"

const Signin = () => {

    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (evt) => {
        evt.preventDefault();
        console.log("submit", {email, password});
        login(email, password);
    }

    return(
        <div className="div-main">
            <form onSubmit={handleClick} className="div-login">
                <h1>Goodness - Sign in</h1>
                <p>{String(authenticated)}</p>
                <input type="text" value={email} placeholder="Email:" onChange={(evt) => [setEmail(evt.target.value)]}/>
                <input type="password" value={password} placeholder="Password:" onChange={(evt) => [setPassword(evt.target.value)]}/>
                <button type="submit" className="btn-login">Sign in</button>
                <p className="create-ancount">If you don't have a login, create an <Link to="/signup" className="link">ancount</Link></p>
            </form>
        </div>
    )
}

export default Signin;