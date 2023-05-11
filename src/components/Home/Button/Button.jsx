import React from "react";

export default function Button(props){
    const name = props.text.toLowerCase()==="facebook"?"facebook-f":props.text.toLowerCase();
    return(
        <button className={"login-button " + props.text.toLowerCase()}>
            <i class={"fa-brands icon me-5 align-items-middle fa-2x fa-" + name}></i>
            <p className="mt-5">{props.text.toUpperCase()}</p>
        </button>
    )
};