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
      swiperHeader1: "Embrace Elegance with Our Ethnic Collection",
      swiperContent1: "Stunning Collections",
      swiperHeader2: "25-30% OFF",
      swiperContent2: "STYLE YOUR CLOTHES IN INDIAN WAY",
      motive: "Step into Style, Step into Tradition",
      swiperButton: "EXPLORE NOW",
    },
    {
      swiperImg: heroLeft2,
      swiperHeader1: "Modern Trends, Custom Fit",
      swiperContent1: "Excellent Style",
      swiperHeader2: "25-30% OFF",
      swiperContent2: "STYLE YOUR CLOTHES IN WESTERN WAY",
      motive: "Fashion That Tells Your Story",
      swiperButton: "EXPLORE NOW",
    },
    {
        swiperImg: heroLeft3,
        swiperHeader1: "From Festive to Everyday, Style Your Way",
        swiperContent1: "Now at your doorstep Just call once and, You'll be in our FAMILY",
        swiperHeader2: "25-30% OFF",
        swiperContent2: "STYLE YOUR CLOTHES IN YOUR WAY",
        motive: "Style Your Way",
        swiperButton: "EXPLORE NOW",
    },
];

const heroRightTop = {
    Image: heroRightTopImage,
    Content: "Add some Indian touch In your wardrobe",
    Button: "EXPLORE NOW",
  }
  
  const heroRightBottom = {
      Image: heroRightBottomImage,
      Content: "Let's Glam in a WESTERN WAY",
      Button: "EXPLORE NOW",
    }


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:h-screen pb-6">
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
                <div className="absolute top-0 left-0 z-10 text-left 2 m-10 xs:m-20 ">
                  <span className="text-5xl  xs:w-2/3 block">{content.swiperHeader1} </span>
                  <span className="text-white block mt-8 text-xl">
                    {content.swiperContent1}
                  </span>
                  <span className="text-5xl xs:text-7xl block my-10">
                    {content.swiperHeader2}
                  </span>
                  <span className="text-white block text-2xl">
                    {content.swiperContent2}
                  </span>
                  <span className="text-white block text-xl py-10">
                    {content.motive}
                  </span>
                  <button
                    className="uppercase combtn bg-white text-gray-700 w-52 h-12 mt-8 text-[14px] font-medium relative"
                  >
                    {content.swiperButton}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="grid grid-rows-2 gap-5 w-full h-screen">
            {
                <div className="top w-full relative">
                    <img
                    src={heroRightTop.Image}
                    className="w-full h-full object-center object-cover "
                    alt=""
                    />
                    <div className="absolute z-10 top-[25%] right-[40px] w-2/3 text-end">
                    <p className="text-3xl xs:text-5xl text-end ">
                    {heroRightTop.Content}
                    </p>
                    <button
                        className="uppercase combtn bg-white text-gray-700 w-52 h-12 mt-8 text-[14px] font-medium relative"
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
                    <div className="absolute z-10 top-[25%] right-[40px] w-2/3 text-end">
                    <p className="text-3xl xs:text-5xl text-end ">
                    {heroRightTop.Content}
                    </p>
                    <button
                        className="uppercase combtn bg-white text-gray-700 w-52 h-12 mt-8 text-[14px] font-medium relative"
                    >
                        {heroRightTop.Button}
                    </button>
                    </div>
                </div>
            }
        </div>
      </div>
    </div>
  );
};

export default Hero;
