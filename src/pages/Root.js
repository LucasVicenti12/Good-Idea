import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from "../components/home/Home"
import IdeaFormPage from "./idea form page/IdeaFormPage";
import ViewIdeaPage from "./view idea page/ViewIdeaPage";
import Signin from "../components/signin/Signin";
import useAuth from "../hooks/UserAuth";
import SigninPage from "./Signin/Signin";
import SignupPage from "./Signup/Signup"

const Root = () => {
    
    const Private = ({Item}) => {
        const signed = useAuth();
        return signed > 0 ? <Item /> : <Signin />
    }

    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/create" element={<IdeaFormPage/>} />
                <Route path="/signin" element={<SigninPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/edit/:id" element={<IdeaFormPage />}/>
                <Route path="/view/:id" element={<ViewIdeaPage/>}/>
            </Routes>
        </Router>
    ); 
}

export default Root;