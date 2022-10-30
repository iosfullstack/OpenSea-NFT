import React from 'react'
import { Sell } from '../../Data/SellerDb'
import './SellerList.css'

const SellerList = () => {
  return (
    <div className='seller'>
        <h3>Top NFT Sellers</h3>
    <div className='sell-card'>
        {Sell.map((item) => {
            return (
                <div className='sell-cards' key= {item.id}>
                    <div className="profile">
                        <img src={item.profile} alt="" />
                    </div>
                    <div className="detail">
                        <p className='d-name'>{item.name}</p>
                        <p className='d-price'>Over {item.price}</p>
                        <p className='d-sold'>sold</p>
                    </div>
                    <div className="dot">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
        }
        )}
    </div>
    <div className="see-btn">

        <button className='btn-see'>See All</button>
        </div>
    </div>
  )
}

export default SellerList