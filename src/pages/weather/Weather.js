import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrentReport from '../../Component/CurrentReport/CurrentReport.js';
import SearchWeather from '../../Component/SearchWeather/SearchWeather.js';
import { bindActionCreators } from 'redux';
import { ActionCreator } from '../../redux/index';
import Daily from '../../Component/DailyHourly/Daily.js';
import Hourly from '../../Component/DailyHourly/Hourly.js';

export default function Weather() {
   
   const data= useSelector(state=>state.report);
   
   const [filterValue, setFilterValue] = useState("daily");

    const dispatch=useDispatch();
    const {fetchReport,alert}=bindActionCreators(ActionCreator,dispatch)
    function geoLocation(){
        
        navigator.geolocation.getCurrentPosition((success)=>{
            fetchReport(success.coords.latitude,success.coords.longitude);
            alert("success","location have been detected");
            
        }, (error)=>{
            alert("danger","Can not fetch Location");
             
        })
        
    }

  useEffect(() => {
    geoLocation();
    // eslint-disable-next-line
  }, []);
  
  const daily=[];
  if(!(Object.keys(data.report).length===0)){
    for(let i=0;i<=6;i++){
      daily.push(data.report.daily[i]);
    }
  }
  const hourly=[];
  if(!(Object.keys(data.report).length===0)){
    for(let i=0;i<=11;i++){
      hourly.push(data.report.hourly[i]);
    }
  }
  return (<>
    <div className='container-fluid container1'>
     
      <div className='row'>
        <div className="col-12 col-md-7">
        
        { data.report && <CurrentReport data={data} report={data.report} filterValue={filterValue} setFilterValue={setFilterValue}/>}
        
        </div>
        <div className='col-12 col-md-5'>
            <SearchWeather/>

        </div>
      </div>
    </div>
    {filterValue==="daily"?(<div className="container-fluid">
      <div className="row">
        {daily.map((element)=>{return <Daily key={element.dt} dailyData={element} />})}
      </div>
    </div>):<div className="container-fluid">
   <div className="row">
     {hourly.map((element)=>{return <Hourly key={element.dt} hourlyData={element} />})}
   </div>
 </div>}
    </>
    );
}
