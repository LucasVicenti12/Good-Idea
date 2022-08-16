import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IdeaForm.css"

const initialValue = {
    "title": '',
    "text": ''
}

const NewIdeaPage = ({id}) => {
    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();

    function handleDeleteClick(){
        axios.delete(`http://192.168.1.100:4000/posts/${id}`).then((response) => {navigate('/')});
    }

    useEffect(() => {
        if(id){
            axios.get(`http://192.168.1.100:4000/posts/${id}`)
            .then((response) => {
                setValues(response.data)
            })           
        }
    }, []);

    function onChange(ev){
        const {name, value} = ev.target;
        setValues({...values, [name]:value})
    }

    function onSubmit(ev){
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id
            ? `http://192.168.1.100:4000/posts/${id}`
            : 'http://192.168.1.100:4000/posts'
        axios[method](url, values).then((response) => {navigate('/')});
    }

    return(
        <div className="newideapage-main">
            <div className="newideapage-create__idea">
                <h1 className="newideapage-title">Hello sir, describe your idea, I'll feel great to hear it.</h1>
                <form className="newideapage-form" onSubmit={onSubmit}>
                    <input id="title" name="title" onChange={onChange} value={values.title} type="text" placeholder="Your Nickname:" className="newideapage-form__name"/>
                    <textarea id="text" name="text" onChange={onChange} value={values.text} rows="20" cols="9" className="newideapage-form__txtarea" placeholder="Your Ideas:"/>
                    <p className="newideapage-form__graph">Do you want introduce an explanation document?</p>
                    {/* <input type="file" className="ideapage-form__file"/> */}
                    <button type="submit" className="ideapage-form__submit">Let's show to the world!</button>
                    {id ? ( <button onClick={handleDeleteClick} className="ideapage-form__submit">Delete</button>) : null}
                </form>
            </div>
        </div>
    )
}

export default NewIdeaPage;