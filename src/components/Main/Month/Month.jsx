import React from "react";
import Calendar from "./Calendar2"
import ListItem from "./ListItem";



export default function Month(props) {
    
    const[date,setDate] = React.useState()
    const [displayMonth, setDisplayMonth] = React.useState(false);
    const [previousButton, setButton] = React.useState("")
    const onChange = (date,event) => {
        
        // formatiranje datuma
        const day = date.getDate();
        const m = date.getMonth() + 1;
        const month = m.toString().length<2?"0"+m:m;
        const year = date.getFullYear();
        const date2 = year+"-"+month+"-"+day;

        setDate(date2);
        event.target===previousButton?setDisplayMonth(false):setDisplayMonth(true);

        setButton(event.target);
        
    }
    return <div className="mx-5 px-5" >
        <Calendar onChange={onChange} activeTile={displayMonth?date:null}/>
        <h1 className="display-3 text-left fw-bold my-5">This Month</h1>
        <div className="scroler text-center">
            {displayMonth?
                props.list.map((x,index)=>x.date===date&&<ListItem key={index} id={index} time={x.time} title={x.title} date={x.date} remove={props.remove}/>):
                props.list.map((x,index)=><ListItem key={index} id={index} time={x.time} title={x.title} date={x.date} remove={props.remove}/>)}
        </div>
       
    </div>
}