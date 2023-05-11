import React from "react";
import Input, { Time, Date, Color } from "./Input";

export default function Popup(props) {
    return<div className="pop-up-div">

        <h1 className="fw-bold mb-5 display-3">Create New Task</h1>
            <form>
                <Input name="title" title="Topic" placeholder="Write Topic"/>
                <Input name="description" title="Description" placeholder="Write Description" />
                <Date />
                <Time />
                <Color />
                <button className="add-button" type="submit" onClick={props.click} value={Input.value}>ADD</button>
            </form>
           
       
    </div>
}