import React, { Children } from "react";
import "./Container.css"

const Container = ({Children}) => {
    return <div className="div-container">{Children}</div>
}
export default Container;