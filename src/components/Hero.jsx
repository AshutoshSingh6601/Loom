import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import heroLeft1 from '../assets/Images/heroLeft1.jpeg'
import heroLeft2 from '../assets/Images/heroLeft2.jpeg'
import heroLeft3 from '../assets/Images/heroLeft3.jpeg'
import heroRightTopImage from '../assets/Images/heroRightTop.jpeg'
import heroRightBottomImage from '../assets/Images/heroRightBottom.jpg'

const Hero = () => {
  const heroContens = [
    {
      swiperImg: heroLeft1,
      swiperHeader1: "Save Upto $200",
      swiperContent1: "Classy & Light Weight",
      swiperHeader2: "5%",
      swiperContent2: "Match's Significant Sentimental Value ",
      swiperButton: "Discover Now",
    },
    {
      swiperImg: heroLeft2,
      swiperHeader1: "Save Upto $200",
      swiperContent1: "",
      swiperHeader2: "",
      swiperContent2: "",
      swiperButton: "",
    },
    {
        swiperImg: heroLeft3,
        swiperHeader1: "",
        swiperContent1: "",
        swiperHeader2: "",
        swiperContent2: "",
        swiperButton: "",
    },
];

const heroRightTop = {
    Image: heroRightTopImage,
    Content: " 20% Offer Glorious Jewellery",
    Button: "Shop Now",
  }
  
  const heroRightBottom = {
      Image: heroRightBottomImage,
      Content: "20% Offer Glorious Jewellery",
      Button: "Shop Now",
    }


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 md:h-screen pb-6">
        <div className="w-full h-screen">
          <Swiper
            className="mySwiper h-full w-full"
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {heroContens.map((content,i) => (
              <SwiperSlide key={i} className="w-full relative">
                <img
                  src={content.swiperImg}
                  className="w-full h-full object-center object-cover brightness-[.9]"
                  alt=""
                />
                <div className="absolute top-0 left-0 z-10 text-left w-1/2 m-20 ">
                  <span className="text-7xl">{content.swiperHeader1} </span>
                  <span className="text-white block mt-8 mb-16 text-xl">
                    {content.swiperContent1}
                  </span>
                  <span className="text-7xl block mb-5">
                    {content.swiperHeader2}
                  </span>
                  <span className="text-white block text-2xl">
                    {content.swiperContent2}
                  </span>
                  <button
                    id="combtn"
                    className="uppercase bg-white text-gray-700 w-52 h-12 mt-8 text-[14px] font-medium relative"
                  >
                    {content.swiperButton}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="grid grid-rows-2 md:gap-5 w-full h-screen">
            {
                <div className="top w-full relative">
                    <img
                    src={heroRightTop.Image}
                    className="w-full h-full object-center object-cover "
                    alt=""
                    />
                    <div className="absolute z-10 top-[25%] right-[40px]">
                    <p className="text-5xl text-end">
                    {heroRightTop.Content}
                    </p>
                    <button
                        id="combtn"
                        className="uppercase bg-white text-gray-700 w-52 h-12 mt-8 text-[14px] font-medium relative"
                    >
                        {heroRightTop.Button}
                    </button>
                    </div>
                </div>
            }
            {

                <div className="bottom w-full relative">
                    <img
                    src={heroRightBottom.Image}
                    className="w-full h-full object-center object-cover"
                    alt=""
                    />
                </div>
            }
        </div>
      </div>
    </div>
  );
};

export default Hero;
