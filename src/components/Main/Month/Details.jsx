import React from "react";

export default function Details(props) {
    return <div className="row">
        <hr></hr>
        <div className="col-10 pt-3">
            <p>View Details</p>
        </div>
        <div className="col-2">
        <div className="vl"></div>
        <i className="fa-solid fa-trash fa-xl px-5 mt-2 pt-4" onClick={props.delete} id={props.id}></i>
        </div>
    </div>
}