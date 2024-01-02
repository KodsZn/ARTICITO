import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import FamousList from '../Famous/FamousList'
import Masterpieces from './Masterpieces'
import { useSelector } from 'react-redux'


const Home = () => {
 const  user=useSelector(state=>(state.userReducer.user))
 console.log(user)
  return (
    <div>
      <div className='Welcome'>
          <div className='texth'>
            <h1 >Create   your own Gallery</h1>
            <h6> Be ARTASTIC and have your own Gallery online within your art style And let the world see the real art  </h6>
            {user?null:<Link to="/connecting"><button className='commencer' >Commencer</button></Link>}
          </div>
          <div className='imgwl'>
               <img className='x' src='https://i.pinimg.com/474x/44/d7/c8/44d7c8dbf1169d880299965bcf915cb4.jpg'/>
          </div>
     </div> 
    <FamousList /> 
    <div className='Masterpieces'>
      <h3 className='aboutm'>World's Most Famous Paintings <br></br>
      Discover the most iconic paintings in the world </h3>
    </div>
    <Masterpieces />
    <footer className='footer'>
      <h3>ARTASTIC</h3>
      <h5>If You Have any questions</h5>
      <ul className='contact'>
        <li>Email: znaidikods2003@gmail.com</li>
        <li>Phone:+21656133269</li>
    </ul>

    </footer>
   </div>
  )
}

export default Home