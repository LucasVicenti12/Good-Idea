import React, { useContext, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import IdeaFormPage from "./idea form page/IdeaFormPage";
import ViewIdeaPage from "./view idea page/ViewIdeaPage";
import SigninPage from "./Signin/Signin";
import SignupPage from "./Signup/Signup"
import HomePage from "./Home/home";
import { AuthProvider, AuthContext } from "../context/auth";

const Root = () => {
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);

        if(loading){
            return <div className="loading">Loading...</div>
        }

        if(!authenticated){
            return <Navigate to="/signin"/>
        }
        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/"  element={<Private><HomePage/></Private>}/>
                    <Route exact path="/create" element={<Private><IdeaFormPage/></Private>} />
                    <Route exact path="/signin" element={<SigninPage/>}/>
                    <Route exact path="/signup" element={<SignupPage/>}/>
                    <Route exact path="/edit/:id" element={<Private><IdeaFormPage /></Private>}/>
                    <Route exact path="/view/:id" element={<Private><ViewIdeaPage/></Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    ); 
}

export default Root;