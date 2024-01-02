import './Masterpieces.css'
import Carousel from 'react-bootstrap/Carousel';
import './Masterpieces.css'

const Masterpieces = () => {
   
return (
   <> 
     <Carousel className='cors' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/dc/df/cf/dcdfcf240066a47f0cedd51918a35148.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption className='caption'>
          <h5>The Great Wave</h5>
          <p>Katsushika Hokusai’s most famous works of art in the world</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/97/f0/82/97f082f512ec7a96c103283e1bff4a23.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='caption'>
          <h5>Water Lilies</h5>
          <p>CLaude Monet said: One instant, one aspect of nature contains it all</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/f8/89/17/f88917505face7f33046971a44e666c9.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='caption'>
          <h5>The Starry Night</h5>
          <p>
          Starry Night is one of the most recognized pieces of art in the world. It is absolutely everywhere</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </>
  )
}

export default Masterpieces