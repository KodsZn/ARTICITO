import React from 'react'
import './Famous.css'

const FamousCard = ({Famous}) => {

  return (
    <div className='FamousCard'>
	<div className="wrap animate pop">
		<div className="overlay">
			<div className="overlay-content animate slide-left delay-2">
				<h1 className="animate slide-left pop delay-4">{Famous.Famousname}</h1>
			</div>
			<div >
        <img className="image-content animate slide delay-5" src={Famous.FamousPhoto}/>
      </div>
					<div className="dots animate">
						<div className="dot animate slide-up delay-6"></div>
						<div className="dot animate slide-up delay-7"></div>
						<div className="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div className="text">
				<p><img className="inset" src={Famous.FamousPhoto} alt="the Famous Artist" />{Famous.FamousInfo}</p>

			</div>
	</div>
  </div>
  )
}

export default FamousCard