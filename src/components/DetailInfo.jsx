import React from 'react'
import offerImg from '../assets/Images/DetailInfo.jpeg'
import { Link } from 'react-router-dom'

const DetailInfo = () => {
    const OfferContent = {
        image: offerImg,
    }
    
      return (
        <>
        {
        <div className='md:flex w-full md:h-screen md:mt-5'>
            <div className="w-full h-full bg-[#d1c9bc] flex items-center justify-center xs:px-10 py-8">
                <p className=' w-11/12 xs:w-10/12 text-gray-900'>
                We'd like to announce that
<br /><br />
Don’t miss out on our limited-time offers for custom sewing services! Each piece is crafted with care and delivered right to your doorstep at an unbeatable price. Once they're gone, they're gone! Secure your order now and experience the perfect blend of quality and convenience. Act fast—your custom creation is just a click away!
<br /><br />
For our first 100 customers their will be of 25-30% for any order
<br /><br />
STICTHED WITH LOVE,<br />
DELIVERED WITH CARE.
<br /><br />
Don't loose the chance to save more and make your fashion at peak....
<br /><br />
GRAB OR GONE
<br /><br />
CALL now For any QUERY
<br /><br />
<Link to='/contact' onClick={()=>window.scrollTo(0, 0)}><button className='bg-[#f1d9b7] px-5 py-1 rounded border border-[#e1c89fad] text-gray-800'>Call Us</button></Link>

                </p>
            </div>
            <div className="w-full h-full">
                <img src={OfferContent.image} className='h-full w-full object-cover object-center' alt="" />
            </div>
        </div>
        }
        </>
      )
    }

export default DetailInfo