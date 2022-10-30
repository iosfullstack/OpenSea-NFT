import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Facebook from '../Images/Vector 2.png'
import Insta from '../Images/Vector 1.png'
import Linkdln from '../Images/Vector 3.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-details">
            <div className="footer-brand">
                <div className="footer-logo">
                    <div className="footer-white-logo"></div>
                    <div className="footer-pink-logo"></div>
                </div>
                <div className='footer-brand-name'>
                    <h2>Open Sea</h2>
                    <Link><p>Get updates about latest NFTs and Art</p></Link>
                </div>

            </div>
            <div className="market-place">
                <p>Market</p>
                <Link><p>Crypto</p></Link>
                <Link><p>Market</p></Link>
            </div>
            <div className="resources">
                <p>Resources</p>
                <Link><p>Market gap</p></Link>
                <Link><p>Coin gecko</p></Link>
            </div>
            <div className="company">
                <p>Company</p>
                <Link><p>Open Sea</p></Link>
                <Link><p>Grand time</p></Link>
            </div>

        </div>
        <div className="footer-copy"> 
            <div className="social">
                <Link><img src={Facebook} alt="facebook" /></Link>
                <Link><img src={Insta} alt="instagram" /></Link>
                <Link><img src={Linkdln} alt="linkdln" /></Link>
            </div>
            <div className="copyright">
                <p>© All right reserverd @ 2022</p>
            </div>
            <div className="code">
                <p>code by IOSDev</p>
            </div>
        </div>
       
    </div>
  )
}

export default Footer
