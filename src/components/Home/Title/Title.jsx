import React from "react";

export default function Title(props) {
    return (
        <div className="text-center display-5  title-div">
            <p>{props.title}</p>
            <img src={require('../../../Pictures/logo.png')} alt="Logo" />
        </div>
    )
};