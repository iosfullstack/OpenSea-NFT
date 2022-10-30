import React from 'react'
import ArrowForward from "../Images/Vector (1).png"
import './Button.css'

const Button = () => {
  return (
    <div>
        <button className='btn-explore'>
            Explore <img className='arrow' src= {ArrowForward} alt="arrow" />
        </button>
    </div>
  )
}

export default Button