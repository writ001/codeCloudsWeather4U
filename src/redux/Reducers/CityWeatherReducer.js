const initialState={
    loading:false,
    report:{},
    error:""
}

const CityWeatherReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "FETCH_CITY_REQUEST":
            return{
                loading:true,
                report:{},
                error:""
            }
        case "FETCH_CITY_SUCCESS":
            return{
                loading:false,
                report:action.payload,
                error:""
            }
        case "FETCH_CITY_ERROR":
            return{
                loading:false,
                report:{},
                error:action.payload
            }
            
    
        default:
            return state
    }
}
export default CityWeatherReducer;