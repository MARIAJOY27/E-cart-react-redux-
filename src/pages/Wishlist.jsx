import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faArrowLeft, faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';


function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handleAdd = (product)=>{
    dispatch(addCartItem(product))
    dispatch(removeWishlistItem(product.id))
  }
  
  return (
    <Row className='ms-5 me-3 mt-5'>

    {wishlistArray.length > 0?
    wishlistArray.map((product)=>(
      <Col className='mb-5 p-4' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '18rem' }} className='mt-5 ms-5 mb-5 shadow'>
          <Card.Img variant="top" src={product.thumbnail} style={{height:"200px"}} />
          <Card.Body>
            <Card.Title>{product.title.slice(0,25)}</Card.Title>
            <Card.Text>
            {product.description.slice(0,50)}
            </Card.Text>
            <Card.Text>
              <b> Price :  ₹{product.price}</b>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
              <Button onClick={()=>dispatch(removeWishlistItem(product.id))} variant="light" className='ms-1 border outline border-danger rounded'><FontAwesomeIcon icon={faTrash} /></Button>

              <Button onClick={()=>handleAdd(product)} variant="light" className='me-2 border outline border-success rounded'><FontAwesomeIcon icon={faCartPlus} style={{ color: "#FFD43B", }} /></Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))
      

      :


      <div className='d-flex justify-content-center align-items-center w-100 mb-5'>
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex justify-content-center align-items-center w-100 flex-column">
          <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="empty-cart" style={{ width: "300px" }} />
          <h2 className='text-danger mt-4'>Your Wishlist is empty</h2>
          <Link to={'/'}><button className='btn btn-success p-3 mt-2 rounded'> <FontAwesomeIcon icon={faArrowLeft} className='me-2' /> Back to Home</button></Link>
        </div>
        <div className="col-md-4"></div>
       </div>}

    </Row>
  )
}

export default Wishlist
