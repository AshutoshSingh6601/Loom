import React from 'react'
import offerImg from '../assets/Images/offerImg.jpeg'

const Offer = () => {

  const OfferContent = {
    image: offerImg,
    
  }

  return (
    <>
    {
    <div className='md:flex w-full md:h-screen'>
        <div className="w-full h-full">
            <img src={OfferContent.image} className='h-full w-full object-cover object-center' alt="" />
        </div>
        <div className="w-full h-full bg-[#6e4d30] flex items-center justify-center px-2 md:px-10 py-8">
            <p className=' w-full md:w-10/12 text-gray-50'>
            
            <span className='hidden md:block'>

At Loom, we provide high-quality sewing services at affordable prices. Simply place your order by sharing your requirements, such as size, fabric type, and color, and we’ll take care of the rest. You don’t need to choose a design—we’ll work with you to create exactly what you need. Enjoy the convenience of having your custom pieces delivered right to your doorstep. Start your sewing journey with us today!
<br/><br/>
            </span>
Your stunning choices starting with prices...
<br/><br/>
Kurti Set  -   800 Rs.<br/>
Simple Lehenga Set   -   2000 Rs.<br/>
Designer Lehenga Set   -   4000 Rs.<br/>
Wedding Lehenga  Set   -   8000 Rs.<br/>
Sharara Set   -   2000 Rs.<br/>
Saree Blouses   -   500 Rs.<br/>
Plazo Kurti Set   -   1000 Rs.<br/>
Ethnic Co-ords Set   -   1500 Rs.<br/>
Shrugs   -   700 Rs.<br/>
Shrugs Set   -   2000 Rs.<br/>
Ethnic Gowns   -   2000 Rs.<br/>
Western Gowns    -    2500 Rs.<br/>
Bodycon   -   2000 Rs.<br/>
One piece   -   1500 Rs.<br/>
<br/>
All with customizable prices according to your requirements
<br/><br/>
We do take orders of men's, kids and senior citizens too....
<br/><br/>
Call for any queries and orders according to your location
<br/><br/>
 <button className='bg-[#f1d9b7] px-5 py-1 rounded border border-[#5b5957bc] text-gray-800'>Order Now</button>

            </p>
        </div>
    </div>
    }
    </>
  )
}

export default Offer