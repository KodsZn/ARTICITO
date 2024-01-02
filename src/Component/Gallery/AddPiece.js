import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { add_piece, get_piece } from '../../Js/Action/PieceActions';
import './Pieces.css'

const AddPiece = () => {
  const [NewPiece,setNewPiece]= useState()
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick=async()=>{
    try{
        await dispatch(add_piece(NewPiece))
        await dispatch(get_piece());
        handleClose();}
   catch (error) {
    console.error('Error adding this One:', error);
}
  }
  const handleChange=(e)=>{
    setNewPiece({...NewPiece,[e.target.name]:e.target.value})
}
  return (
    <div>
      <Button className='btn-1' onClick={handleShow}>
      Add Your touch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='profile ' closeButton>
          <Modal.Title className='profile-usertitle-name'>Add Your Piece of Art</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='profile 'className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='profile-stat-title'> Title </Form.Label>
              <Form.Control
                type='text'
                name="Title"
                autoFocus
                onChange={(e) => handleChange(e)} 
              />
             
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className='profile-stat-title'>About Your Art</Form.Label>
              <Form.Control as="textarea" name='Title' rows={2} onChange={(e) => handleChange(e)}  />
              <Form.Label className='profile-stat-title'> Your Art Link </Form.Label>
              <Form.Control
                type='text'
                name="Image"
                autoFocus
                onChange={(e) => handleChange(e)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='btn-1' onClick={handleClick} onHide={handleClose}>
            Add to Gallery
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddPiece