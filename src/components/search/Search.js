import React, { useEffect, useState } from "react";
import IdeaList from "../ideas/IdeasList/IdeaList";
import NewIdea from "../newIdea/NewIdea";
import "./Search.css"
import axios from "axios"
import HeaderPage from "../header/HeaderPage";

const Search = () => {
    const [posts, setposts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const params = {}
        if(search){
            params.title_like = search;
        }
        axios.get('http://localhost:4000/posts', {params}).then(
            (response) => {setposts(response.data)}
        );
    }, [search])

    return(
        <div className="search-main__page">
            <HeaderPage />
            <div className="search-title__page">
                <h1 className="search-title_to_page">GoodNess Idea!</h1>
            </div>
            <NewIdea/>
            <IdeaList posts={posts}/>
        </div>
    )
}

export default Search;