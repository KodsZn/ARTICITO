import './Log.css';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, register } from '../../Js/Action/UserAction';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../../Js/ActionTypes/ActionTypes';
import { get_piece } from '../../Js/Action/PieceActions';

const LogReg = () => {
const [user,setUser]=useState({})
console.log(user)
const [newUser, setNewUser]=useState({})
const dispatch=useDispatch()
const navigate=useNavigate()
const handleLogin=async()=>
{
	
	await dispatch(login(user))
	await dispatch(get_piece())
	navigate('/Profile')
}
const handleUser=(e)=>
{ 
	setUser({...user,[e.target.name]:e.target.value})
}
const handleNewUser=(e)=>
{ 
    setNewUser({...newUser,[e.target.name]:e.target.value})
}

return (
    <div className='LogReg'>
			<div className="main">  	
				<input type="checkbox" id="chk" aria-hidden="true"></input>

					<div className="signup">
						<form>
							<label for="chk" aria-hidden="true">Sign up</label>
							<input type="text" name="username" placeholder="User name" onChange={(e)=>handleNewUser(e)}></input>
							<input type="email" name="email" placeholder="Email" onChange={(e)=>handleNewUser(e)}></input>
							<input type="password" name="password" placeholder="Password" onChange={(e)=>handleNewUser(e)}></input>
							<Link to="/Profile"><button onClick={()=>dispatch(register(newUser))}>Sign up</button></Link>
						</form>
					</div>

					<div className="login">
						<form>
							<label for="chk" aria-hidden="true">Login</label>
							<input  name="username" placeholder="username" onChange={(e)=>handleUser(e)}></input>
							<input type="password" name="password" placeholder="Password" onChange={(e)=>handleUser(e)}></input>
							<button className='loginbutton' onClick={()=>handleLogin()}>Login</button>
						</form>
					</div>
			</div>

			</div>
			)
		}

		export default LogReg