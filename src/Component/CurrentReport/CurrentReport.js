import React from "react";
import "./CurrentReport.css";
import { dateAndTime, time } from "../../Helper/dateAndTime";
import Spinner from "../Spinner";

export default function CurrentReport(props) {
  const {data, report, filterValue,setFilterValue } = props;

  let
    temperature,
    humidity,
    climate,
    wind,
    cloud,
    icon,
    dt,
    sunrise,
    sunset

  if (!(Object.keys(report).length === 0)) {
    temperature = Math.round(report.current.temp);
    humidity = report.current.humidity;
    climate = report.current.weather[0].description;
    wind = report.current.wind_speed;
    cloud = report.current.clouds;
    icon = report.current.weather[0].icon;
    dt = report.current.dt;
    sunrise = report.current.sunrise;
    sunset = report.current.sunset;
  }
  const onChange=(e)=>{
     setFilterValue(e.target.value)
  }

  return (
    <div className="container ">
      
      <div className="card mb-3 myCard  d-flex justify-content-center align-items-center" style={{border:"5px solid rgba(173, 237, 12, 0.93)"}}>
        <div className="row g-0  d-flex justify-content-around align-items-center width-100">
          <div
            className="col-4 d-flex justify-content-center align-items-center text-dark flex-column"
            style={{ Width: "80px"}}
          >
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              className="icon"
              alt="Weather icon"
              
            />
            <div style={{ fontSize: "20px" }}>
            
              <strong>{climate}</strong>
            </div>
            <div style={{ fontSize: "30px" }}>
              
              <strong>{temperature}&deg;C</strong>
            </div>
            <div className="card-text " >
            
                <small className="text-dark ">
                  <div className="form-check col-5 form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="hourly"
                      checked={filterValue==="hourly"}
                      onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                     <strong className="text-danger">Hourly</strong> 
                    </label>
                  </div>
                  <div className="form-check  col-5 form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="daily"
                      checked={filterValue==="daily"}
                      onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                    <strong className="text-danger">Daily</strong>
                    </label>
                  </div>
                </small>
              </div>
          </div>
          <div className="col-8">
            <div className="card-body ">
              <div className="locationClass d-flex flex-column">
                <div className="card-text d-flex justify-content-around ">
                  <i className="bi bi-geo-alt-fill col-2"></i>
                  <div id="location" className="col-10">
                    <b>{report.timezone}</b>
                  </div>
                </div>
                {dt && <p className="text-dark">{dateAndTime(dt)}</p>}
              </div>
              <div
                className="card-text container"
                style={{ marginTop: "32px",border:"2px solid black",background:"rgba(104, 227, 180, 0.44)" }}
                
              >
                { data.loading&&<Spinner/>}
                <div id="temp " className="d-flex justify-content-around">
                  <div className="col-7 col-sm-6 col-md-5 col-lg-3">
                    <b>Temparature</b>
                  </div>
                  <div className="col-5"><b>{temperature}&deg;C</b></div>
                </div>
                <div id="prec" className="d-flex justify-content-around">
                  <div className="col-7 col-sm-6 col-md-5 col-lg-3">
                   <b>Humidity</b> 
                  </div>
                  <div className="col-5"><b>{humidity}%</b></div>
                </div>
                <div id="wind" className="d-flex justify-content-around">
                  <div className="col-7 col-sm-6 col-md-5 col-lg-3">
                    <b>Wind Speed</b> 
                  </div>
                  <div className="col-5"><b>{wind} m/s</b> </div>
                </div>
                <div id="cloud" className="d-flex justify-content-around">
                  <div className="col-7 col-sm-6 col-md-5 col-lg-3"><b>Cloud</b></div>
                  <div className="col-5"><b>{cloud}%d</b></div>
                </div>
                <div id="sunrise" className="d-flex justify-content-around">
                  <div className="col-7 col-sm-6 col-md-5 col-lg-3">
                  <b>Sunrise</b>
                  </div>
                  {!dt && <div className="col-5"></div>}
                  {dt && <div className="col-5"><b>{time(sunrise)}</b></div>}
                </div>
                <div id="sunset" className="d-flex justify-content-around">
                  <div className="col-7 col-sm-6 col-md-5 col-lg-3"><b>Sunset</b></div>

                  {!dt && <div className="col-5"></div>}
                  {dt && <div className="col-5"><b>{time(sunset)}</b></div>}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
