import { FAIL_FAMOUS, GET_FAMOUS, LOAD_FAMOUS } from "../ActionTypes/ActionTypes";

//inisialisation
const initialState={
    Famous:null,
    load:false,
    error:null
}
//pure function
const FamousReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_FAMOUS: 
            return{...state,load:true}
        case GET_FAMOUS:
            return{...state,Famous:payload.Famous,load:false} 
            
        case FAIL_FAMOUS:
            return{...state,error:payload}        
        default:
            return state
    }
}
export default FamousReducer