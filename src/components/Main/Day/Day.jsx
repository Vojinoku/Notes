import React from "react";
import ListItem from "../Month/ListItem"

export default function Day(props) {
    var options = {year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString("en-GB", options);
    
    return <div className="px-5 mx-5">
        <h1 className="display-2 fw-bold">{date}</h1>
        <div className="scroler text-center">
            {props.list.map((x,index)=>x.date===x.dateToday?<ListItem key={index} id={index} time={x.time} title={x.title} date="" remove={props.remove}/>:null)}
            {props.list.map((x,index)=>x.date.length<2&&<ListItem key={index} id={index} time={x.time} title={x.title} date="" remove={props.remove}/>)}
        </div>
    </div>
}