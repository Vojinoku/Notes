import React from "react";
import Details
 from "./Details";
export default function ListItem(props) {
    const [extend, setExtend] = React.useState(false);
    return <div className="row my-4 list-item-div" id={props.id} onClick={()=>extend?setExtend(false):setExtend(true)}>
       
        <div className="col-7 fw-bold text-start">
            <p>{props.title.length>20?props.title.substr(0,20)+"...":props.title}</p>
        </div>
        <div className="col-3 text-end">
         <p>{props.date.slice(5,10)}</p>
        </div>
        <div className="col-2">
            <p>{props.time}</p>
        </div>
        {extend&&<Details delete={props.remove} id={props.id}/>}
        
    </div>
}