import React from 'react';
import {day} from "../../Helper/dateAndTime";
import "./card.css"


export default function Daily(props) {
    const{dailyData}=props;
   const minTemp=Math.round(dailyData.temp.min);
   const maxTemp=Math.round(dailyData.temp.max);
   const humidity=dailyData.humidity;
   const climate=dailyData.weather[0].description;
   const icon=dailyData.weather[0].icon;
   const dt=dailyData.dt;

  return <div className='col-12 col-sm-4 col-md-3 my-2'>
<div className="card card1"style={{minHeight:"200px",minWidth:"280px",border:"2px solid rgba(173, 237, 12, 0.93)"}} >
    <span className="badge  bg-secondary"><b>{day(dt)}</b></span>
   <div>
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon"  />
    <span><b>{climate}</b></span>
    </div>
  <div className="card-body ">
    <div className='d-flex justify-content-around'>
      <div><b>min:</b></div>
      <div><b>{minTemp}&deg;C</b></div>
    </div>
    <div className='d-flex justify-content-around'>
      <div><b>max:</b></div>
      <div><b>{maxTemp}&deg;C</b></div>
    </div>
    <div className='d-flex justify-content-around'>
      <div><b>humidity:</b></div>
      <div><b>{humidity} %C</b></div>
    </div>
    
  </div>
</div>
</div>

  ;
}
