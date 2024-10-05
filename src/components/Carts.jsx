import React from 'react'
import { TbMobiledata } from "react-icons/tb";
import { HiOutlineHeart } from "react-icons/hi2";


const Carts = () => {
  return (
    <div>
        <div className="grid grid-cols-4">
            <div className="card">
                <img src="https://dt-glamora.myshopify.com/cdn/shop/files/shop-5-2.jpg?v=1693992540&width=533" className='main-image' alt="" />
                <img src="https://dt-glamora.myshopify.com/cdn/shop/files/shop-5-1.jpg?v=1693992540&width=533" className='hover-image' alt="" />
                <div className="flex justify-center items-center absolute add-to-cart">
                    <TbMobiledata />
                    <p className='uppercase'>Add to cart</p>
                    <HiOutlineHeart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carts