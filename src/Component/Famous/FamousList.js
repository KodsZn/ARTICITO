import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FamousCard from './FamousCard'
import { get_Famous } from '../../Js/Action/FamousAction'

const FamousList = () => {
    const famous=useSelector(state=>(state.FamousReducer.Famous))
    const [artist,setArtist]=useState(famous)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(get_Famous())
      setArtist(famous)
    },[dispatch])
    console.log(famous)
  return (
    <>   
    <h3 className='famintro'> GET TO KNOW  THE MOST FAMOUS ARTIST</h3>

    <div style={{display:'flex',flexDirection:'row'}}>

        {famous?.map(Famous =><FamousCard Famous={Famous} key={Famous._id} />)}
    </div>
 </> )
}

export default FamousList