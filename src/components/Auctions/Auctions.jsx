// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Auctions.css'
// import TabList from '../../TabList'
import AuctionList1 from "../../AuctionList/AuctionList1";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import AuctionList2 from "../../AuctionList/AuctinList2";
import AuctionList3 from "../../AuctionList/AuctionList3";
import AuctionList4 from "../../AuctionList/AuctionList4";
import AuctionList5 from "../../AuctionList/AuctionList5";
import AuctionList6 from "../../AuctionList/AuctionList6";
import AuctionList7 from "../../AuctionList/AuctionList7";
import AuctionList8 from "../../AuctionList/AuctionList8";
import AuctionList9 from "../../AuctionList/AuctionList9";

const Auctions = () => {
  return (
    <div className="swipers">
    <h3>Live Auctions</h3>
      <Swiper
        
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><AuctionList1/></SwiperSlide>
        <SwiperSlide><AuctionList2/></SwiperSlide>
        <SwiperSlide><AuctionList3/></SwiperSlide>
        <SwiperSlide><AuctionList4/></SwiperSlide>
        <SwiperSlide><AuctionList5/></SwiperSlide>
        <SwiperSlide><AuctionList6/></SwiperSlide>
        <SwiperSlide><AuctionList7/></SwiperSlide>
        <SwiperSlide><AuctionList8/></SwiperSlide>
        <SwiperSlide><AuctionList9/></SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Auctions
