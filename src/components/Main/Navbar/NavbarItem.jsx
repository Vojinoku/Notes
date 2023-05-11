import React from "react";

export default function NavbarItem(props) {
    return <>
        <li className="nav-item">
            <a className="nav-link" href="/"><i className={props.icon==="list"?"fa-solid fa-3x fa-list":"fa-regular fa-3x fa-"+props.icon}></i></a>
        </li>
    </>
}