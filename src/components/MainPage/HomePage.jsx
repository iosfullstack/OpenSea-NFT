import React from 'react'
import Explore from '../Discovery/Explore'
import Collections from '../Collections/Collections'
import { ArtCollections } from '../Collections/ArtCollections'
import Market from '../Market/Market'
import Auctions from '../Auctions/Auctions'
import SellerList from '../SellerList/SellerList'
import Subscribe from '../Subscriber/Subscribe'
// import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      {/* <Container> */}
        <Explore/>
        <Collections/>
        <ArtCollections/>
        <Market/>
        <Auctions/>
        <SellerList/>
        <Subscribe/>
        
      {/* </Container> */}
    </div>
  )
}

export default HomePage