import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 bg-primary p-5'>
      <div className="row">
        <div className="col-md-4 text-light">
          <h4 className='mb-3 mt-4'><FontAwesomeIcon icon={faCartShopping} /> E-CART</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsa quos temporibus, aperiam libero eos hic nesciunt vero, dolorem voluptate corrupti enim nam, ea aliquam! Fuga ipsam recusandae hic tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque veritatis blanditiis.
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2 text-light">
          <h4 className='mb-3 mt-4'>Links</h4>
          <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><p>Home Page</p></Link>
          <Link to={'/wishlist'} style={{ textDecoration: "none", color: "white" }} ><p>WishList</p></Link>
          <Link to={'/cart'} style={{ textDecoration: "none", color: "white" }}><p>Cart</p></Link>
        </div>

        <div className="col-md-2 text-light">
          <h4 className='mb-3 mt-4'>Guides</h4>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
        <div className="col-md-3 text-light">
          <h4 className='mb-3 mt-4'>Contact Us</h4>
          <div className='d-flex mt-3'>
            <input type="text" placeholder='Enter your email ID' className='form-control w-100' />
            <button className='btn btn-warning ms-3'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly mt-4'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
            <FontAwesomeIcon icon={faTwitter} size='2xl' />
            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            <FontAwesomeIcon icon={faFacebook} size='2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
