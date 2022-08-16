import axios from "axios";
import React, { useEffect, useState } from "react";


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

    return(
        <div className="div-view_main">
            <div className="viewidea-view">
                <div className="idea">
                    <h1 className="h1-title">{values.title}</h1>
                    <h2 className="h2-text">{values.text}</h2>
                    <footer className="viewidea-footer">
                        <button className="btn-comment">Type your comment</button>
                        {/* <div className="btn-like">
                            <input type="checkbox" value="1" id="btn-check"/>
                            <label htmlFor="btn-check" />
                        </div> */}
                    </footer>
                </div>   
            </div>
        </div>
    )
}

export default ViewIdea;