import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../Js/Action/UserAction'
import { Link } from 'react-router-dom'
import './Profile.css'
import PiecesList from '../Gallery/PiecesList'
import AddPiece from '../Gallery/AddPiece'
const Profile = () => {

    const user=useSelector((state)=>state.userReducer.user)
    const errors= useSelector((state)=>state.userReducer.error)
    console.log(user)
    console.log(errors)
    const dispatch=useDispatch()
   
    return (
    <div className='bodyProfile'>
      

    <div className="container">
    <div className="row profile">
		<div className="col-md-3">
			<div className="profile-sidebar">
				
				<div className="profile-userpic">
					<img src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" className="img-responsive" alt=""/>
				</div>
				
				<div className="profile-usertitle">
					<div className="profile-usertitle-name">
						{user.username}
					</div>
					<div className="profile-usertitle-job">
						I Am an Artist  
					</div>
				</div>
			
				<div className="profile-userbuttons">
        <AddPiece  className="btn-1" />
          <Link to="/connecting"><button  className="btn-2" onClick={()=>dispatch(logOut())}>LOG OUT</button></Link>

					
				</div>
            <div  className="aboutusername">                                    
        <div>
            <h4 className="profile-desc-title">About {user.username}</h4>
            <span className="profile-desc-text "> For Commssion Contact me </span>
            <div className="margin-top-20 profile-desc-link">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                  <a href="https://www.apollowebstudio.com"> {user.email}</a>
            </div>
            <div className="margin-top-20 profile-desc-link">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <a href="https://www.twitter.com/jasondavisfl/">{user.phone}</a>          

        </div>
            </div>
        </div>                   
        
        
			</div>
		</div>
		<div className="col-md-9">
            <div className="profile-content">
              <h1 style={{color:"#433821"}}>Welcome To My Gallery</h1>
              <div className='Gallery-1'>
                <PiecesList />
              </div>
       </div>
		</div>
	</div>
</div>

    </div>
  )
}

export default Profile