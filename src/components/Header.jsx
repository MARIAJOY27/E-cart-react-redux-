import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  
  return (
    <Navbar expand="lg" className="bg-primary w-100" style={{position:"fixed",top:'0px',zIndex:'1'}}>
      <Container>
        <Link to={'/'} style={{textDecoration:"none"}}>
        <Navbar.Brand className='text-light' ><FontAwesomeIcon icon={faCartShopping} beat className='me-3'/><b>E-Cart</b></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">

            <Nav.Link >
                <Link to={'/wishlist'}>
                    <button className='btn btn-outline-light border rounded'><FontAwesomeIcon icon={faHeart} style={{color: "#ef0b22",}} className='me-1' /> WishList <Badge className='rounded ms-1' bg="secondary">{wishlistArray.length}</Badge></button>
                </Link>
           </Nav.Link>

            <Nav.Link >
                <Link to={'/cart'}>
                    <button className='btn btn-outline-light border rounded'><FontAwesomeIcon icon={faCartPlus} style={{color: "#FFD43B",}} className='me-1'/> Cart <Badge className='rounded ms-1' bg="secondary">{cartArray.length} </Badge></button>
                </Link>
            </Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
