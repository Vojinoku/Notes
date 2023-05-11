import React from "react";

export default function InnerCarousel(props) {

    const active = props.index===0&&"active";

    return (
        <div className={"carousel-item pb-5 " + active }>
            <p>{props.text}</p>
        </div>
    ) 
};