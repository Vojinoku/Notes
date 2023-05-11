import React from "react";
import Calendar from 'react-calendar';


export default function Calendar2(props){

    return <Calendar 
        className="w-100 my-5"
        onChange={props.onChange}
        
    />
}