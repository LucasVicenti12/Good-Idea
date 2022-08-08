import React from "react";
import { Link } from "react-router-dom";
import "./Idea.css"

const Idea = ({post}) => {
    
    return(
        <Link to={`/view/${post.id}`} className="link">
            <div className="div-idea">            
                <div className="div-title">
                    <h2>{post.title}</h2>
                </div>
                <div className="div-text">
                    <p>{post.text}</p>
                </div>
                <footer className="footer-idea">
                    <Link to={`/edit/${post.id}`} className="link">Edit Idea</Link>
                </footer>
            </div>
        </Link>
    )
}

export default Idea;