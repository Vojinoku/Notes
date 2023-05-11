import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar(props) {
    return <>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarsExample02">
                <ul className="navbar-nav mr-auto">
                    <NavbarItem icon="list" />
                    <NavbarItem icon="clock" />
                    <NavbarItem icon="sd" />
                    <img src={require('../../../Pictures/add.png')} alt="Logo" onClick={props.click} />
                    <NavbarItem icon="bell" />
                    <NavbarItem icon="user" />
                </ul>
      </div>
    </nav>
    </>
}