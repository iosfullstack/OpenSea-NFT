import React from 'react'
import './Explore.css'
// import ArrowForward from "../Images/Vector (1).png"
import Play from "../Images/Polygon 1.png"
import Avatar1 from "../Images/Frame 10.png"
import Solana from "../Images/solanaLogo.png"
import Binance from "../Images/path16.png"
import Bitmex from "../Images/bitmex-logo-removebg-preview.png"
import Coinbase from "../Images/Vector (2).png"
import Button from '../Tools/Button'
import Marquee from "react-fast-marquee";



const Explore = () => {
  return (
    <div>
    <div className="discover">
        <div className="explore">
            <h2>Discover , sell and explore the beautiful art of  NFTs</h2>
            <p>DIscover and sell the art of  NFT DIscover and sell the art of  NFT DIscover and sell the art of  NFT DIscover and sell the art of  NFT</p>
            <div className="explore-btn">
                <Button/>
                <div className="btn">
                    <a href="http://" className='btn-play'>
                        <img className='play' src= {Play} alt="play-icon" />
                    </a>
                        <p>Watch Video</p>
                </div>
            </div>
        </div>
        <div className="explore-avatar">
            <img src= {Avatar1} alt="avatar" className="img-avatar" />
        </div>
    </div>
        <div className="review">
            <div className="downloads">
                <h4>21K +</h4>
                <p>Downloads</p>
            </div>
            <div className="reviews">
                <h4>100k +</h4>
                <p>Reviews</p>
            </div>
            <div className="purchase">
                <h4>20m +</h4>
                <p>Purchase</p>
            </div>
        </div>
        <div className="blockchain">
           <Marquee>
           <img src= {Solana} alt="solana" />
            <img src= {Binance} alt="binance" />
            <img src= {Bitmex} alt="bitmex" />
            <img src= {Coinbase} alt="coinbase" />
           </Marquee>
        </div>
    </div>
  )
}

export default Explore