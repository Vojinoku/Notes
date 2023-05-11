import React from "react";
import Title from "./Title/Title";
import Carousel from "./Carousel/Carousel";
import InnerCarousel from "./Carousel/InnerCarousel";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

const slide1 = "Very simple Things To-Do List.  Helps you to manage yourdaily life, without any hassle! ";
const slide2 = "This text should be displayed on page 2 This text should be displayed on page 2";
const slide3 = "This text should be displayed on page 3 This text should be displayed on page 3";
const carouselList = [slide1,slide2,slide3];


export default function Home() {
    return<>
        <section className="m-5 px-5 py-4">

        <Link to="/Main" className="text-end nav-link"><h1 className="fw-bold">Skip</h1></Link>

        <Title title="Hi there! Welcome to"/>

        <Carousel>
            {carouselList.map((x,index) =><InnerCarousel index={index} text={x}/>)}
        </Carousel>
           
        <div className="text-center buttons-div">
            <Button text="Facebook"/>
            <Button text="Twitter"/>
        </div>
        </section>
       
    </>
       
};