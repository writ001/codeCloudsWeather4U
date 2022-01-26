import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchWeather.css";
import { bindActionCreators } from "redux";
import { ActionCreator } from "../../redux/index";
import {utcTime} from "../../Helper/dateAndTime";
import Spinner from "../Spinner";

export default function SearchWeather() {
  const dispatch = useDispatch();
  const { fetchCityWeater } = bindActionCreators(ActionCreator, dispatch);

  const data = useSelector((state) => state.cityWeather);
  const report=data.report

  const [city, setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    fetchCityWeater(city);
  };

  let temperature=0,humidity=0,climate=0,wind=0,cityName=0,icon=0,dt=0,sunrise=0,sunset=0;
  if(!(Object.keys(report).length===0))
  { temperature=Math.round(report.main.temp);
    humidity=report.main.humidity;
    climate=report.weather[0].description;
    wind=report.wind.speed;
    cityName=report.name;
    icon=report.weather[0].icon;
    dt=report.dt;
    sunrise=report.sys.sunrise;
    sunset=report.sys.sunset;
  }

  return (<div>
    <div className="card container rightComponent d-flex  justify-content-center align-items-center" style={{border:"5px solid rgba(173, 237, 12, 0.93)"}} >
      <form className="d-flex col-8" style={{position:"absolute",top:"5px"}}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Type Any City"
          aria-label="Search"
          value={city}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-warning"
          onClick={handleClick}
          type="submit"
        >
          Search
        </button>
        
      </form>
      { data.loading&&<Spinner/>}
      {dt===0?(<h5 className="my-2 text-danger" style={{fontSize:"25px"}}>No Data To Display</h5>):(<div className="card-text container2 container "  >
          <div className="d-flex  justify-content-center align-items-center text-danger"style={{position:"absolute",top:"45px"}} >
             {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="icon" alt="Weather icon"  />}
          <div style={{fontSize:"20px"}}> <strong>{climate}</strong> </div> 
          </div>
          <div className="container"style={{border:"2px solid black",background:"rgba(104, 227, 180, 0.44)" }}>
                <div id="place " className="d-flex justify-content-around">
                    <div className="col-7   col-lg-5"><b>City</b> </div>
                    <div className="col-5"><b>{cityName}</b></div>
                </div>
                <div id="temp " className="d-flex justify-content-around">
                    <div className="col-7   col-lg-5"><b>Temparature</b> </div>
                    <div className="col-5"><b>{temperature}&deg;C</b></div>
                </div>
             <div id="prec" className="d-flex justify-content-around">
                 <div className="col-7   col-lg-5"><b>Humidity</b></div>
                 <div className="col-5"><b>{humidity}%</b></div>
                 </div>
                 
             <div id="wind"className="d-flex justify-content-around">
                 <div className="col-7   col-lg-5"><b>Wind Speed</b> </div>
                 <div className="col-5"><b>{wind} m/s</b></div>
                 </div>
             <div id="sunrise"className="d-flex justify-content-around">
                 <div className="col-7   col-lg-5"><b>Sunrise</b></div>
                 {!dt && <div className="col-5"></div>}
                 {dt && <div className="col-5"><b>{utcTime(sunrise)}</b></div>}
            </div>
             <div id="sunset"className="d-flex justify-content-around">
                 <div className="col-7   col-lg-5"><b>Sunset</b></div>
                 {!dt && <div className="col-5"></div>}
                 {dt && <div className="col-5"><b>{utcTime(sunset)}</b></div>}
            </div>
            </div>
          </div>)}
    </div>
    </div>
  );
}
