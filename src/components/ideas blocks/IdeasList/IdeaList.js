import React from "react";
import "./IdeaList.css"
import Idea from "../Idea/Idea"

const IdeaList = ({posts}) => {
    return (
        <div className="idea-list">
            {posts.map((post) => (
                <Idea post={post}/>
            ))}
        </div>
    )
}

export default IdeaList;