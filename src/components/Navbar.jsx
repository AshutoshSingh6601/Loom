import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";



const Navbar = () => {
  return (
    <div>
      <div className="flex items-center py-5 justify-between px-20">
        <div className="left">
          <ul className='flex gap-6 text-sm'>
            <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>Home</li>
            <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>Shop</li>
            <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>Blog</li>
            <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>Pages</li>
            <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>Contact</li>
          </ul>
        </div>
        <div className="center pe-6">
          <img src="https://dt-glamora.myshopify.com/cdn/shop/files/Group_123935.png?v=1690449034&width=200" alt="" />
        </div>
        <div className="flex gap-6 items-center justify-center">
          <AiOutlineUserAdd className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' />
          <GoHeart className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' />
          <FiShoppingCart className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' />
          <p>$0.00</p>
        </div>

      </div>
    </div>
  )
}

export default Navbar