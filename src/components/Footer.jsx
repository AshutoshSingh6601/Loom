import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/Images/topLogo.jpeg'

const Footer = () => {
  return (
    <div className='bg-[#6e4d30] text-white p-10'>
        
       {/* ===============section 1==============  */}

       <div className="md:flex items-center justify-between mb-10">
        <div className="w-full xs:px-10 mb-10 md:mb-0">
        <Link to='/' onClick={()=>window.scrollTo(0, 0)} ><h1 className='font-Dancing font-bold text-4xl md:text-6xl mb-3'>Loom</h1></Link>
          <p>Thank you for choosing Loom, for your custom sewing needs. We are dedicated to providing high-quality clothing tailored to your style and delivered right to your doorstep. <span className='hidden xs:inline'>Connect with us on social media and stay updated on our latest offerings. Your satisfaction is our priority, and we look forward to bringing your fashion visions to life.</span> </p>
        </div>
        <div className="w-full xs:px-10 mb-10 md:mb-0">
          <h2 className='text-xl uppercase mb-5'>Customer Services</h2>
          <ul>
            <li className='mb-3'>Contact Us</li>
            <li className='mb-3'>About Us</li>
            <li className='mb-3'>FAQ</li>
            <li className='mb-3'>Our Products</li>
          </ul>
        </div>
        <div className="w-full xs:px-10 mb-10 md:mb-0">
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

      <div className="xs:flex items-center justify-between xs:text-base text-xs">

      <p>&copy; Guddi Sahu </p>

      <div className="">
        <ul className='xs:flex mt-3 xs:mt-0 gap-5 '>
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