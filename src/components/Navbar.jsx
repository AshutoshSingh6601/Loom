import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';



const Navbar = ({setShowNav}) => {

  const NavLinks = [
    {
      id: 1,
      name: 'Home',
      link: '/'
    },
    {
      id: 2,
      name: 'Design',
      link: 'design'
    },
    {
      id: 3,
      name: 'Sewers',
      link: 'sewers'
    },
    {
      id: 4,
      name: 'Blog',
      link: 'blog'
    },
    {
      id: 5,
      name: 'About Us',
      link: 'about'
    },
  ]

  const handleNav = () =>{
    setShowNav(true)
  }

  return (
    <div>
      
      <div className="flex items-center py-5 justify-between px-5 gap-5 md:px-20">
        {/* <div className="left"> */}
          <ul className='hidden md:flex gap-6 text-sm'>
            {
              NavLinks.map((link)=>
                <NavLink key={link.id} to={link.link}> <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>{link.name}</li> </NavLink>
              )
            }
          </ul>
        {/* </div> */}
        <div className="center">
          <img src="https://dt-glamora.myshopify.com/cdn/shop/files/Group_123935.png?v=1690449034&width=200" className='w-20 sm:w-auto' alt="" />
        </div>
        <div className="flex gap-6 items-center justify-center">
          <AiOutlineUserAdd className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' />
          <GoHeart className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' />
          <FiShoppingCart className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' />
          <RxHamburgerMenu onClick={handleNav} className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c] cursor-pointer md:hidden' />
        </div>

      </div>
      
    </div>
  )
}

export default Navbar