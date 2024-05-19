import React, { useState } from 'react';
import Slider from "react-slick";
import {
    bannerImgFive,
    bannerImgFour,
    bannerImgOne,
    bannerImgThree,
    bannerImgTwo
} from '../../assests/index'

const Banner = () => {
    const [active,setActive]=useState(0)
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange:(prev,next)=>{
            setActive(next)
        },
        appendDots: dots => (
            <div
              style={{
                position:'absolute',
                top:'70%',
                left:'45%',
                transform:"translate(-50%,-50%)",
                width:'210px'
              }}
            >
              <ul style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between' }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i === active ? {
                    width: "30px",
                    height:'30px',
                    borderRadius:'50%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    color:'white',
                    background:'#131921',
                    padding:'8px 0',
                    cursor:'pointer',
                    border:'1px solid #f3a847'
                  }
                  :
                  {
                    width: "30px",
                    height:'30px',
                    borderRadius:'50%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    color:'white',
                    background:'#232F3E',
                    padding:'8px 0',
                    cursor:'pointer',
                    border:'1px solid #f3a847'
                  }
              }
            >
              {i + 1}
            </div>
          )
    };
    return (
        <div className='w-full'>
            <div className='w-full h-full relative'>
            <Slider {...settings}>
                <div>
                    <img src={bannerImgOne} alt='banner-1' style={{zIndex:'100'}} />
                </div>

                <div>
                    <img src={bannerImgTwo} alt='banner-1' />
                </div>

                <div>
                    <img src={bannerImgThree} alt='banner-1' />
                </div>

                <div>
                    <img src={bannerImgFour} alt='banner-1' />
                </div>
                <div>
                    <img src={bannerImgFive} alt='banner-1' />
                </div>

            </Slider>
        </div>
        </div>
    );
};

export default Banner;