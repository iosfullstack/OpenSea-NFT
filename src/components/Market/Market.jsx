import React from 'react'
import Mkt1 from '../Images/Vector (7).png'
import Mkt2 from '../Images/Vector (4).png'
import Mkt3 from '../Images/Vector (5).png'
import Mkt4 from '../Images/Vector (6).png'
import './Market.css'

const Market = () => {
  return (
    <div>
        <h2 className='txt3'>Create and sell your  NFT</h2>
        <div className="market">
            <div className="mkt1">
                <div className="img-mkt">
                <img src={Mkt1} alt="mkt1"/>
                </div>
                <p className='mkt-txt'>Set up your wallet</p>
                <p className='mkt-txt1'>Get more beautiful art work here Get more beautiful art work here </p>
            </div>
            <div className="mkt2">
                <div className="img-mkt">
                <img src={Mkt2} alt="mkt2" />
                </div>
                <p className='mkt-txt'>Create collection</p>
                <p className='mkt-txt1'>Get more beautiful art work here Get more beautiful art work here </p>
            </div>
            <div className="mkt3">
                <div className="img-mkt">
                <img src={Mkt3} alt="mkt3" />
            </div>
                <p className='mkt-txt'>Add your NFTs</p>
                <p className='mkt-txt1'>Get more beautiful art work here Get more beautiful art work here </p>
            </div>
            <div className="mkt4">
            <div className="img-mkt">
                <img src={Mkt4} alt="mkt4" />
            </div>
                <p className='mkt-txt'>List them for sale</p>
                <p className='mkt-txt1'>Get more beautiful art work here Get more beautiful art work here </p>
            </div>
        </div>
    </div>
  )
}

export default Market