const initialState={
    loading:false,
    report:{},
    error:""
}

const ReportReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "FETCH_REPORT_REQUEST":
            return{
                loading:true,
                report:{},
                error:""
            }
        case "FETCH_REPORT_SUCCESS":
            return{
                loading:false,
                report:action.payload,
                error:""
            }
        case "FETCH_REPORT_FAILURE":
            return{
                loading:false,
                report:{},
                error:action.payload
            }
            
    
        default:
            return state
    }
}
export default ReportReducer;