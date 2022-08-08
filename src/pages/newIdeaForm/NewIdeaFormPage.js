import React from "react";
import { useParams } from "react-router-dom";
import NewIdeaPage from "./NewIdea";

const NewIdeaFormPage = () => {
    const {id} = useParams()

    return(
        <NewIdeaPage  id={id ? Number.parseInt(id, 10) : null}/>
    )
}

export default NewIdeaFormPage;