import React from "react";
import { useParams } from "react-router-dom";
import ViewIdea from "./ViewIdea";
import HeaderPage from "../../components/header/HeaderPage";
import "./ViewIdea.css"

const ViewIdeaPage = () => {
    const {id} = useParams();

    return(
        <div className="div-view-main">
            <HeaderPage/>
            <ViewIdea id={id ? Number.parseInt(id, 10) : null} /> 
        </div>
        
    )
}

export default ViewIdeaPage;