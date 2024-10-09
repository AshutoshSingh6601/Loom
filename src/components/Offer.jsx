import React from 'react'
import offerImg from '../assets/Images/offerImg.jpeg'

const Offer = () => {

  const OfferContent = {
    image: offerImg,
    content: 'FESTIVE SALE OFFERS Handmade Jewelry For Special Occasions Aliquet eget sit amet tellus cras adipiscing enim. Non quam lacus suspendisse faucibus interdum posuere. Lobortis mattis aliquam faucibus purus in massa tempor nec.'
  }

  return (
    <>
    {
    <div className='md:flex w-full md:h-screen'>
        <div className="w-full h-full">
            <img src={OfferContent.image} className='h-full w-full object-cover object-center' alt="" />
        </div>
        <div className="w-full h-full bg-[#6e4d30] flex items-center justify-center px-10 py-8">
            <p className=' w-10/12 text-gray-50'>{OfferContent.content}</p>
        </div>
    </div>
    }
    </>
  )
}

export default Offer