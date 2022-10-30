import React from 'react'
import Button from '../Tools/Button'
import Image1 from '../Images/Rectangle 10.png'
import Image2 from '../Images/Rectangle 7.png'
import Image3 from '../Images/Rectangle 8.png'
import Image4 from '../Images/Rectangle 9.png'
import './ArtCollections.css'


export const ArtCollections = () => {
  return (
    <div>
        <div className="art-collections">
            <div className="text-collections">
                <h2>Get more beautiful art work here</h2>
                <p>Get more beautiful art work here Get more beautiful art work here Get more beautiful art work here</p>
                <Button/>
            </div>
            <div className="img-collections">
                <div className="img1">
                    <img src={Image1} alt="image1" />
                </div>
                <div className="img-combo">
                    <img src={Image2} alt="image2" />
                    <img src={Image3} alt="image3" />
                </div>
                <div className="img2">
                    <img src={Image4} alt="image4" />
                </div>
            </div>
        </div>
    </div>
  )
}
