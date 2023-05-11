import React from "react";

export default function Switch(props){
    return <div className="m-5">
        <button className={props.monthly==="active"?"button monthly-button clicked":"button monthly-button"} name="monthly" onClick={props.clicked}>Monthly</button>
        <button className={props.daily==="active"?"button daily-button clicked":"button daily-button"} name="daily" onClick={props.clicked}>Daily</button>
    </div>
}