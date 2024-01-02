import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editPiece, get_piece } from '../../Js/Action/PieceActions';

const Editing = ({Piece}) => {
    //teb3a el bootstrap function 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    //the updating
    const [upPiece,setupPiece]= useState({...Piece})
    const handleChange=(e)=>{
        setupPiece({...upPiece,[e.target.name]:e.target.value})
    }
    const dispatch=useDispatch()
    const handleEditpiece = async (id) => {
        try {
            await dispatch(editPiece(id,upPiece));
            await dispatch(get_piece());
            handleClose();
    } catch (error) {
        console.error('Error editing this One:', error);
    }};
    console.log(upPiece)

  return (
    <div>
<Button className='btn-1' onClick={handleShow}>
      Modify
      </Button>

      <Modal show={show} >
        <Modal.Header className='.profile ' closeButton>
          <Modal.Title className='profile-usertitle-name'>Add Your Piece of Art</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='profile-stat-title'> Title </Form.Label>
              <Form.Control
                type='text'
                placeholder={Piece.Title}
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
              <Form.Control as="textarea" name='Title'  placeholder={Piece.Description}  rows={2} onChange={(e) => handleChange(e)}  />
              <Form.Label className='profile-stat-title'> Your Art Link </Form.Label>
              <Form.Control
                type='text'
                placeholder={Piece.Image}

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
          <Button variant="primary" className='btn-1' onClick={()=>handleEditpiece(Piece._id)}>
            save modification
          </Button>
        </Modal.Footer>
      </Modal>

    </div> 
  )
}

export default Editing