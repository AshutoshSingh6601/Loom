import React from 'react'
// import logo from '../assets/Images/topLogo.jpeg'

const Footer = () => {
  return (
    <div className='bg-[#6e4d30] text-white p-10'>
        
       {/* ===============section 1==============  */}

       <div className="md:flex items-center justify-between mb-10">
        <div className="w-full px-10 mb-10 md:mb-0">
          <img src='https://dt-glamora.myshopify.com/cdn/shop/files/Group_123935.png?v=1690449034&width=200' alt="" className='invert mb-10' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur quisquam dignissimos, ipsam velit sequi est ea voluptatem aliquid veritatis?</p>
        </div>
        <div className="w-full px-10 mb-10 md:mb-0">
          <h2 className='text-xl uppercase mb-5'>Customer Services</h2>
          <ul>
            <li className='mb-3'>Contact Us</li>
            <li className='mb-3'>About Us</li>
            <li className='mb-3'>FAQ</li>
            <li className='mb-3'>Our Products</li>
          </ul>
        </div>
        <div className="w-full px-10 mb-10 md:mb-0">
          <h2 className='text-xl uppercase mb-5'>Company</h2>
          <ul>
            <li className='mb-3'>Terms & Conditions </li>
            <li className='mb-3'>Privacy Policy</li>
            <li className='mb-3'>Plan & Pricing</li>
            <li className='mb-3'>Product Quality</li>
          </ul>
        </div>
       </div>

      <hr className='pt-10' />

      <div className="xs:flex items-center justify-between">

      <p>&copy; Guddi Ashutosh Singh </p>

      <div className="">
        <ul className='flex gap-5'>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact</li>
        </ul>
      </div>

      </div>

    </div>
  )
}

export default Footer