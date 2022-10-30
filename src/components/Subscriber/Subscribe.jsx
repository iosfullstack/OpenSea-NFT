import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe-card">
            <h3>Never miss a drop</h3>
            <p>Get updates about NFTs and Art</p>
            <form className='subscribe-form' action="" method="post">
                <input className='sub-form' type="email" name="" id="" placeholder='Enter your Email' />
                <button className='sub-btn' type="submit">Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Subscribe