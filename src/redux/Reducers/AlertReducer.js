const initialState=null;

const AlertReducer=(state=initialState,action)=>{
   switch (action.type) {
       case "success":return{
           type:"success",
           message:action.payload,
       }
       case "danger":return{
           type:"danger",
           message:action.payload,
       }
       case "dismiss":return null
   
       default:return state
           
   }
}

export default AlertReducer;