 

export const dateAndTime=(dt)=>{
    const currentdate = new Date(dt*1000);
    const date=currentdate.toDateString();
    const time=currentdate.toLocaleTimeString();
    return date+" "+time;

}
export const time=(dt)=>{
    const currentdate = new Date(dt*1000);
    const time=currentdate.toLocaleTimeString();
    return time;
}
export const utcTime=(dt)=>{
    const currentdate = new Date(dt*1000);
    const hour=currentdate.getUTCHours();
    const minute=currentdate.getUTCMinutes();
    const second=currentdate.getUTCSeconds();
    return hour+":"+minute+":"+second+"(UTC)";
}
export const day=(dt)=>{
    const dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",'Saturday']
    const currentdate = new Date(dt*1000);
    const day=dayArray[currentdate.getDay()];
    return day;
}
export const hour=(dt)=>{
    const currentdate = new Date(dt*1000);
    const time=currentdate.getHours();
    return time+":00";
}