import React from 'react'
import { Data6 } from '../AuctionData/AuctionDb'
import Reload1 from '../components/Images/Vector (3).png'

const AuctionList6 = () => {
  return (
    <div className='card'>
        {Data6.map((item) => {
            return (
                <div className='cards' key= {item.id}>
                <img className='img-avata' src={item.image} alt="avatar" />
                <p className='title'>{item.title} <span className='number'>{item.number}</span></p>
                <div className="details">
                    <div className="profile-img">
                        <img src={item.profile} alt="pro" />
                    </div>
                    <div className="own">
                        <p className='owned'>Owned by</p>
                        <p className='own-name'>{item.name}</p>
                    </div>
                    <div className="bid">
                        <p>Current bid</p>
                        <p>{item.price}</p>
                    </div>
                </div>
                <div className='bid-now'>
                    <button>Bid now</button>
                    <div className="img-rf">
                        <a href="//"><img className='img-rl' src={Reload1} alt="refresh" />View history</a>
                        {/* <img src={Reload} alt="refresh" /><span>View history</span> */}
                    </div>
                </div>

                </div>
            )
        }
        )}
    </div>
  )
}

export default AuctionList6