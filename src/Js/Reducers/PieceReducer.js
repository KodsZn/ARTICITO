import { ADD_PIECE, DELETE_PIECE, EDIT_PIECE, GET_PIECE, LOAD_PIECE } from "../ActionTypes/ActionTypes"

//initialisation
const initialState ={  
    piece:null,
    load:false,    
    error:null
}
//pure function
const PieceReducer =(state=initialState,{type,payload})=>{
    console.log(payload,"payload")
    switch (type) {
        case LOAD_PIECE:
            return{...state,load:true}
        case ADD_PIECE:
            return{...state,piece:payload.Piece,load:false}
        case EDIT_PIECE:
            return{...state,piece:payload.Piece,load:false}
        case GET_PIECE:
            return{...state,piece:payload.Piece,load:false}  
        case DELETE_PIECE:
            return{...state,load:false}   
        default:
            return state
    }}
export default PieceReducer
