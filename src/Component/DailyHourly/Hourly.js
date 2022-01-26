import React from 'react';
import {hour} from "../../Helper/dateAndTime";
import "./card.css"

export default function Hourly(props) {
   const{hourlyData}=props;
   const temp=Math.round(hourlyData.temp);
   const humidity=hourlyData.humidity;
   const climate=hourlyData.weather[0].description;
   const icon=hourlyData.weather[0].icon;
   const dt=hourlyData.dt;

  return (<div className='col-12 col-sm-4 col-md-3 my-1' >
<div className="card card1" style={{minHeight:"200px",minWidth:"280px",border:"2px solid rgba(173, 237, 12, 0.93)"}}>
    <span className="badge  bg-secondary"><b>{hour(dt)}</b></span>
   <div>
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
    <span><b>{climate}</b></span>
    </div>
  <div className="card-body ">
    <div className='d-flex justify-content-around'>
      <div><b>temp:</b></div>
      <div><b>{temp}&deg;C</b></div>
    </div>
    <div className='d-flex justify-content-around'>
      <div><b>humidity:</b></div>
      <div><b>{humidity} %</b></div>
    </div>
    
    
  </div>
</div>
</div>);


}
