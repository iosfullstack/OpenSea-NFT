import React from 'react'
import "./Navbar.css"
import Search from '../Images/Vector.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      {/* <Link to='/'> */}
        <div className="logo container">
          <div className="white-logo"></div>
          <div className="pink-logo"></div>
        </div>
        <div className='brand-name'>
            <h2>Open Sea</h2>
        </div>
        {/* </Link> */}
        <form>
          <input type='text' placeholder='Search' id='search-text-input' />
          <Link><img className='search' src= {Search} alt= "icon"/></Link>
        </form>
        <ul className='navbar'>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to= "/products">Products</Link>
            </li>
            <li>
              <Link to= "/faqs">FAQs</Link>
            </li>
            <li>
              <Link to= "/contact">Contact</Link>
            </li>
        </ul>
        <button className='btn-buynow'>Buy Now</button>
    </nav>
  )
}

export default Navbar