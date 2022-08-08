import React from "react";
import "./NewIdea.css"
import { Link } from "react-router-dom";

const NewIdea = () => {
    return(
        <div className="newIdea-box">
            <h1 className="newIdea-box__title">I think I had an idea...</h1>
            <Link to="/create" className="newIdea-box__create_idea">Create Idea</Link>
        </div>
    )
}

export default NewIdea; 