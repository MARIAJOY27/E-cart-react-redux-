import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addWishlistItem } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';


function Home() {
  const dispatch = useDispatch()
  
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);


  return (
    
     <Row className='ms-5 me-3' style={{marginTop:'80px'}}> 

       {data?.length>0?
       data?.map((product)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card  className='mt-5 ms-5 mb-5 shadow'>
          <Card.Img variant="top" src={product.thumbnail} style={{height:"200px"}} />
          <Card.Body>
            <Card.Title>{product.title.slice(0,25)}</Card.Title>
            <Card.Text>
            {product.description.slice(0,50)}
            </Card.Text>
            <Card.Text>
             <b> Price : {product.price}</b>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
              <Button onClick={()=>dispatch(addWishlistItem(product))} variant="light" className='ms-1 border outline border-danger rounded'><FontAwesomeIcon icon={faHeart} style={{color: "#ef0b22",}} /></Button>

              <Button onClick={()=>dispatch(addCartItem(product))} variant="light" className='me-2 border outline border-success rounded'><FontAwesomeIcon icon={faCartPlus} style={{color: "#FFD43B",}} /></Button>
            </div>
          </Card.Body>
        </Card>
       </Col> ))
          
          :


       <p>Loading...</p>}

     </Row>
   
  )
}

export default Home
