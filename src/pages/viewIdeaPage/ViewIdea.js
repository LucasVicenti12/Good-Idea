import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ViewIdea.css"

const ViewIdea = ({id}) => {
    const [values, setValues] = useState('')

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:4000/posts/${id}`)
            .then((response) => {
                setValues(response.data)
            })
        }
    })

    function likeOnClick(){
        let click = true
        
        if(click == true){
            let color = '#ffffff77';
            document.getElementById("btn-like").style = "background-color: #ffffff77;"
        }
        
    }

    return(
        <div className="div-view_main">
            <div className="viewidea-view">
                <div className="idea">
                    <h1 className="h1-title">{values.title}</h1>
                    <h2 className="h2-text">{values.text}</h2>
                    <footer className="viewidea-footer">
                        <button className="btn-comment">Type your comment</button>
                        <button className="btn-like" id="btn-like" onClick={likeOnClick}/>
                    </footer>
                </div>   
            </div>
        </div>
    )
}

export default ViewIdea;