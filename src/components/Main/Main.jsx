import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Popup from "./Popup/Popup";
import Month from "./Month/Month";
import Day from "./Day/Day";

const list = [];

export default function Main() {
    const [add, setAdd] = React.useState("actives");
    const [state, setState] = React.useState({
        monthly: "active",
        daily: "inactive"
    });
    const clicked = (event) => {
        const name = event.target.name;
        if (name==="monthly"){
            setState({
                monthly:"active",
                daily:"inactive"
            })
        }else{
            setState({
                monthly:"inactive",
                daily: "active"
            })
        };
    };
    const addItem = () => {
        setAdd("active");
    }
    const close = () => {
        const todayDate = new Date();
        const month = todayDate.getMonth() + 1;
        const day = todayDate.getDate();
        const realmonth = month.toString().length<2?"0"+month:month
        const year = todayDate.getFullYear();
        const date2= year+"-"+realmonth+"-"+day


        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const time = document.getElementById("time").value;
        const date = document.getElementById("date").value;
        const color = document.getElementById("color").value;
        const dateToday = date2;

        
        const item = {
            title: title,
            description: description,
            time: time,
            date: date,
            color: color,
            dateToday: dateToday
        }
        const policeman = () =>{
            return item.title.length>1?list.push(item):null;    
        }
        policeman();
        setAdd("closed");

    }
    const remove = (event) => {
        const id = event.target.id;
        list.splice(id,1);
        console.log(list);
        setAdd(prevvalue=>prevvalue + "s");
    }

    return <div className="no-overflow">
        {add==="active"&&<Popup click={close}/>}
        <Header clicked={clicked} daily={state.daily} monthly={state.monthly}/>

        
        {state.monthly==="active"?<Month remove={remove} list={list}/>:<Day remove={remove} list={list}/>}


        <Footer click={addItem}/>
    
    </div>
        
};