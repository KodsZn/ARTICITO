import axios from 'axios'
import { ADD_PIECE, DELETE_PIECE, EDIT_PIECE, FAIL_PIECE, GET_PIECE, LOAD_PIECE } from '../ActionTypes/ActionTypes'
//ADD to gallery 
export const add_piece=(newpiece)=> async(dispatch)=>   
{   dispatch({type:LOAD_PIECE}) 

    try {
        let  result =await axios.post("http://localhost:5000/api/Piece/add_Piece",newpiece)  
        dispatch({type:ADD_PIECE,payload:result.data})
    } catch (error) {
            dispatch({type:FAIL_PIECE,payload:error})
    }
}

export const get_piece=()=>async(dispatch)=>{
    dispatch({type:LOAD_PIECE})
    try {
        let result=await axios.get("http://localhost:5000/api/Piece/get_Piece")
        dispatch({type:GET_PIECE,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_PIECE,payload:error})
    }
}
export const deletePiece=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PIECE})
    try {
        await axios.delete(`http://localhost:5000/api/Piece/delete_Piece/${id}`)
        dispatch({type:DELETE_PIECE})

    } catch (error) {
        dispatch({type:FAIL_PIECE,payload:error})

    }
}
export const editPiece=(id,upPiece)=>async(dispatch)=>{
    dispatch({type:LOAD_PIECE})
    try {
        let  result =await axios.put(`http://localhost:5000/api/Piece/edit_Piece/${id}`,upPiece)
        dispatch({type:EDIT_PIECE ,payload:result.data})

    } catch (error) {
        dispatch({type:FAIL_PIECE,payload:error})

    }
}