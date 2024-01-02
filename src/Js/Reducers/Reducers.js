import { FAIL_USER, LOAD_USER, LOGIN_USER, LOG_OUT, REGISTER_USER } from "../ActionTypes/ActionTypes";

//initialisation
const initialState={
    user:null,
    load:false,
    auth:false, 
    error:null
}

//pure function
const userReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_USER:
            return {...state,load:true}
        case REGISTER_USER :
            localStorage.setItem("token",payload.token)
            return {...state,user:payload.newUser,auth:true,load:false}
        case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            return {...state,user:payload.findUser,auth:true,load:false}    
        case LOG_OUT:
            localStorage.removeItem("token")
            return {...state,user:null,auth:false,load:false}
        case FAIL_USER:
                    return {...state,error:payload}   
        default:
            return state
            
    }
}
export default userReducer;