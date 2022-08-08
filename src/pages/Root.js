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

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Search />} />
                <Route path="/create" element={<NewIdeaPage />} />
                <Route path="/edit/:id" element={<NewIdeaFormPage />} />
                <Route path="/view/:id" element={<ViewIdeaPage/>}/>
            </Routes>
        </Router>
    ); 
}

export default Root;