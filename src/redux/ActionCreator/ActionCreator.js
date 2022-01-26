import axios from "axios"
//Geo Location ApI calls
export const fetchReportRequest=()=>{
    return {
        type:"FETCH_REPORT_REQUEST"
    }
}
export const fetchReportSuccess=(data)=>{
    return {
        type:"FETCH_REPORT_SUCCESS",
        payload:data
    }
}
export const fetchReportFailure=(error)=>{
    return {
        type:"FETCH_REPORT_ERROR",
        payload:error
    }
}

export const fetchReport=(lat,lon)=>{
    return function(dispatch){
        dispatch(fetchReportRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            const report=response.data
            dispatch(fetchReportSuccess(report))
        })
        .catch(error=>{
            dispatch(fetchReportFailure(error.message))
        })
    }
}

//City Weather Api calls
export const fetchCityWeaterRequest=()=>{
    return {
        type:"FETCH_CITY_REQUEST"
    }
}
export const fetchCityWeaterSuccess=(data)=>{
    return {
        type:"FETCH_CITY_SUCCESS",
        payload:data
    }
}
export const fetchCityWeaterFailure=(error)=>{
    return {
        type:"FETCH_CITY_ERROR",
        payload:error
    }
}

export const fetchCityWeater=(city)=>{
    return function(dispatch){
        dispatch( fetchCityWeaterRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            const report=response.data
            dispatch(fetchCityWeaterSuccess(report))
        })
        .catch(error=>{
            dispatch(fetchCityWeaterFailure(error.message))
        })
    }
}
export const alert=(type,message)=>{
    return function(dispatch){
        dispatch( {
            type:type,
            payload:message
        })
        setTimeout(() => {
            dispatch( {
                type:"dismiss"
            })
        }, 3000);
        
    }
}