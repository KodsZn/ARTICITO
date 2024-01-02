import axios from "axios"
import { FAIL_USER, LOAD_USER, LOGIN_USER, LOG_OUT, REGISTER_USER } from "../ActionTypes/ActionTypes"
export const register=(newUser)=> async(dispatch)=>   
{   dispatch({type:LOAD_USER}) 

    try {
        let  result =await axios.post("http://localhost:5000/api/User/register",newUser)  
        dispatch({type:REGISTER_USER,payload:result.data})
    } catch (error) {
                dispatch({type:FAIL_USER,payload:error})
    }
}
export const login = (user) => async(dispatch)=>
{
    dispatch({type:LOAD_USER})
    try {
        let result=await axios.post("http://localhost:5000/api/User/login",user)  
        dispatch({type:LOGIN_USER,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response})

    }
}
export const logOut=() =>async(dispatch)=>
{
    dispatch({type:LOG_OUT})
    
}