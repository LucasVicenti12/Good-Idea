import React from "react";
import { useParams } from "react-router-dom";
import ViewIdea from "./ViewIdea";

const ViewIdeaPage = () => {
    const {id} = useParams();

    return(
        <ViewIdea id={id ? Number.parseInt(id, 10) : null} />
    )
}

export default ViewIdeaPage;