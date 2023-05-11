import React from "react";
import Switch from "./Switch";

export default function Header(props) {
    return <div className=" text-center m-5 mb-0 p-3">
        <img src={require('../../../Pictures/logo.png')} className="header" alt="Logo" />
        <Switch clicked={props.clicked} monthly={props.monthly} daily={props.daily}/>
    </div>
}