import React, {   useState } from 'react'
import {  useSelector } from 'react-redux'
import PiecesCard from './PiecesCard'
import { get_piece } from '../../Js/Action/PieceActions'

const PiecesList = () => {
  const pieces=useSelector(state=>(state.PieceReducer.piece))
  const [piece,setpiece]=useState(pieces)
  
  console.log(pieces)

    return(
    <div>
       {piece?.map(Piece =><PiecesCard Piece={Piece} key={Piece._id} />)}

    </div>
  )
}

export default PiecesList