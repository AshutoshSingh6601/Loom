import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from 'swiper/modules';

const Hero = () => {
  return (
    <div>
        <div className="flex gap-5 h-screen pb-6">
            <div className="w-full h-full">
                {/* <img src="https://dt-glamora.myshopify.com/cdn/shop/files/11.jpg?v=1694148355&width=1500" className='w-full h-full object-center object-cover brightness-[.9]' alt="" /> */}
                <Swiper className="mySwiper h-full w-[50rem]" grabCursor={true} loop={true} autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    >
                    <SwiperSlide className='w-full relative'>
                        <img src="https://dt-glamora.myshopify.com/cdn/shop/files/11.jpg?v=1694148355&width=1500" className='w-full h-full object-center object-cover brightness-[.9]' alt="" />
                        <div className="absolute top-0 left-0 z-10 text-left w-1/2 m-20 ">
                            <span className='text-7xl'>Save Upto $200 </span>
                            <span className='text-white block mt-8 mb-16 text-xl'> Classy & Light Weight </span>
                            <span className='text-7xl block mb-5'> 5% </span>
                            <span className='text-white block text-2xl'> Match's Significant <br /> Sentimental Value</span>
                            <button id="combtn" className='uppercase bg-white text-gray-700 w-52 h-12 mt-8 text-[14px] font-medium relative'>Discover Now</button>
                        </div>
                     
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://dt-glamora.myshopify.com/cdn/shop/files/12.jpg?v=1694148326&width=1500" className='w-full h-full object-center object-cover brightness-[.9]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://dt-glamora.myshopify.com/cdn/shop/files/13.jpg?v=1694148293&width=1500" className='w-full h-full object-center object-cover brightness-[.9]' alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="grid grid-rows-2 gap-5 w-full h-full">
                <div className="top w-full relative">
                    <img src="https://dt-glamora.myshopify.com/cdn/shop/files/home-2.png?v=1689248188&width=1500" className='w-full h-full object-center object-cover ' alt="" />
                    <div className="absolute z-10 top-[25%] right-[40px]">
                        <p className='text-5xl text-end'>20% Offer <br />
                        Glorious <br /> Jewellery</p>
                        <button id="combtn" className='uppercase bg-white text-gray-700 w-52 h-12 mt-8 text-[14px] font-medium relative'>Shop Now</button>
                    </div>
                </div>
                <div className="bottom w-full relative">
                    <img src="https://dt-glamora.myshopify.com/cdn/shop/files/home-3.png?v=1689248208&width=1500" className='w-full h-full object-center object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero