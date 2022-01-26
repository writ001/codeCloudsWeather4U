import React from "react";
import {  useSelector } from 'react-redux';


export default function Alert() {
  const alert= useSelector(state=>state.alert);
    let word=0;
    if(alert!==null){
        word=alert.type;
        if(word==="danger"){word="Error";}
        if(word==="success"){word="Success";}
    }
        
  return (
    <div style={{height:"5vh"}}>
     { alert && <div style={{position:"fixed",left:"40vw",top:"50px"}}  className={`text-center alert alert-${alert.type}`} role="alert">
         <strong>{alert.message}</strong>
      </div>}
    </div>
  );
}

