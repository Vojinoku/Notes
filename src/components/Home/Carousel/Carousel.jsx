import React from "react";
import Indicator from "./Indicator";


export default function Carousel(props) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide text-center display-6 fw-bolder" data-bs-interval="3000" data-bs-ride="carousel">

            <div class="carousel-indicators">
                {props.children.map((x,index)=><Indicator index={index}/>)}
            </div>

            <div class="carousel-inner pb-5">
                {props.children}
            </div>
      </div>
    )
}