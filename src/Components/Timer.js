import React, { useEffect,useState } from "react";
import './timer.css'

const Timer = ()=>{

const [seconds,setSeconds]=useState(0);
const[minutes,setMinuntes]=useState(0);
var timer;
useEffect(() => 
{

    timer = setInterval(()=>
    {
        setSeconds(seconds+1);
        if(seconds===59)
        {
            setMinuntes(minutes+1)
            setSeconds(0);
        }},1000)

return () =>clearInterval(timer);      

});

    return(
        <div className="timer">
        <div className="container">
        <div className="timer_container">
        <h1>Countdown</h1>
        <h1>{minutes<10? "0"+minutes: minutes}:{seconds<10?"0"+seconds: seconds}</h1>

        </div>

        </div>
        </div>
    )
}
export default Timer