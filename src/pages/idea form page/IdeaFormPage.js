import React from "react";
import { useParams } from "react-router-dom";
import NewIdeaPage from "./IdeaForm";
import HeaderPage from "../../components/header/HeaderPage";

const IdeaFormPage = () => {
    const {id} = useParams()

    return(
        <NewIdeaPage  id={id ? Number.parseInt(id, 10) : null}/>
    )
}

export default IdeaFormPage;