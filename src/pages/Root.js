import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Search from "../components/search/Search";
import NewIdeaPage from "./newIdeaForm/NewIdea";
import NewIdeaFormPage from "./newIdeaForm/NewIdeaFormPage";
import ViewIdeaPage from "./viewIdeaPage/ViewIdeaPage";
import Signin from "./Signin/Signin"
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
                <Route path="/" exact element={<Search />} />
                <Route path="/create" element={<Private Item={NewIdeaPage} />} />
                <Route path="/loginIn" element={<SigninPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/edit/:id" element={<NewIdeaFormPage />} />
                <Route path="/view/:id" element={<ViewIdeaPage/>}/>
            </Routes>
        </Router>
    ); 
}

export default Root;