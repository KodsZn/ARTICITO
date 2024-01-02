import axios from 'axios'
import { FAIL_FAMOUS, GET_FAMOUS, LOAD_FAMOUS } from '../ActionTypes/ActionTypes'

export const get_Famous=()=>async(dispatch)=>{
    dispatch({type:LOAD_FAMOUS})
    try {
        let result=await axios.get("http://localhost:5000/api/Famous/get_all_Famous")
        dispatch({type:GET_FAMOUS,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_FAMOUS,payload:error})
    }
}