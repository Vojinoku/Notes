import React from "react";

export default function Indicator(props) {
    return(
        <button  
                data-bs-target="#carouselExampleIndicators" 
                data-bs-slide-to={props.index} 
                className={props.index===0?"active":null}>
        </button>    
    )
};