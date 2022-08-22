import axios from "axios";
import React, { useEffect, useState } from "react";

const initialValue ={
    "comment": ''
}

const ViewIdea = ({id}) => {
    const [values, setValues] = useState('')
    const [comments, setComments] = useState(initialValue)

    const btnHandleClick = (ev) => {
        ev.preventDefault();
        console.log(comments)
        axios.post('http://localhost:4000/posts/', comments)
    }

    function onChange(ev){
        const {name, value} = ev.target;
        setComments({...comments, [name]:value})
    }

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:4000/posts/${id}`)
            .then((response) => {
                setValues(response.data)
            })
        }
    })

    return(
        <div className="viewidea-view">
            <div className="idea">
                <h1 className="h1-title">{values.title}</h1>
                <h2 className="h2-text">{values.text}</h2>
            </div>
            <footer className="viewidea-footer">
                <form onSubmit={btnHandleClick} className="form">
                    <input name="comment" value={comments.comment} className="input-comment" type="text" onChange={onChange}/>
                    <button className="btn-comment">Type your comment</button>
                    {/* <div className="btn-like">
                        <input type="checkbox" value="1" id="btn-check"/>
                        <label htmlFor="btn-check" />
                    </div> */}                
                </form>
            </footer>
        </div>
    )
}

export default ViewIdea;