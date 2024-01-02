import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deletePiece,  get_piece } from '../../Js/Action/PieceActions';
import { useDispatch } from 'react-redux';
import Editing from './Editing';


const PiecesCard = ({Piece}) => {
  //const [NewPiece,setNewPiece]= useState()
  const dispatch=useDispatch()

  const handleDeletepiece = async (_id) => {
    try {
      dispatch(deletePiece(_id));
      await dispatch(get_piece());
    } catch (error) {
      console.error('Error deleting this One:', error);
    }};
  
      
  return (
    <div>
      <Card  style={{ width: '18rem', border:'solid #433821' ,flexWrap: 'nowrap'}}>
      <Card.Img variant="top" src={Piece.Image} />
      <Card.Body>
        <Card.Title>{Piece.Title}</Card.Title>
        <Card.Text>
        {Piece.Descrption}
        </Card.Text>
        <Button  className='btn-1' onClick={() =>handleDeletepiece(Piece._id)}>Delete </Button>
        <Editing Piece={Piece} />
          
      </Card.Body>
    </Card>
    </div>
  )
}

export default PiecesCard;