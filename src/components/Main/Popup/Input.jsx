import React from "react";

export default function Input(props) {
    return <div className="py-5 my-2">

        <h1 className="fw-bold">{props.title}</h1>
        <input className="input-input"  size="35" id={props.name} placeholder={props.placeholder} required></input>

    </div>
}

export function Time() {
    return <div className="py-5 my-2">
        <h1 className="fw-bold">Time</h1>
        <input className="input-input w-100 text-center" type="time" id="time" name="appt" required/> 
    </div>
}

export function Date() {
    return <div className="py-5 my-2">
        <h1 className="fw-bold">Date</h1>
        <input id="date" maxLength={2}  type="date" data-date-format="DD MMMM YYYY" className=" w-100 input-input text-center me-3" size="9" required/>

    </div>
}

export function Color() {
    return <div className="py-5 my-2">

        <h1 className="fw-bold">Choose color</h1>
        <input className="input-input m-5 color" id="color" type="color"></input>
        
    </div>
}
