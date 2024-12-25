import React, { useContext } from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineStraighten } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

import productContext from '../context/ProductContext';

import { Tooltip } from 'react-tooltip';


const Navbar = ({setShowNav, setRegister, setSewer}) => {

  const { cartData } = useContext(productContext)

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
      name: 'About Us',
      link: 'about'
    },
    {
      id: 5,
      name: 'Contact Us',
      link: 'contact'
    },
  ]

  const handleRegister = () =>{
    setRegister(true)
  }
  
  const handleSewer = () =>{
    setSewer(true)
  }

  const handleNav = () =>{
    setShowNav(true)
  }

  return (
    <div>
      <Tooltip id="my-tooltip" place="top" />
      <div className="grid grid-cols-2 md:grid-cols-4 items-center py-3 md:py-5 justify-between px-5 gap-5 md:px-20 shadow-[0_1px_1px_0px_rgba(0,0,0,0.3)] shadow-[#cd865c] xs:shadow-none">
          <ul className='hidden md:flex gap-6 text-sm xs:col-span-2 '>
            {
              NavLinks.map((link)=>
                <NavLink key={link.id} to={link.link}> <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>{link.name}</li> </NavLink>
              )
            }
          </ul>
        <div className="center">
          <Link to='/'><h1 className='font-Dancing font-bold text-4xl md:text-6xl'>Loom</h1></Link>
        </div>
        <div className="flex gap-3 xs:gap-6 items-center justify-end">
          <AiOutlineUserAdd onClick={handleRegister}  data-tooltip-id="my-tooltip" data-tooltip-content="Register" className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c] text-base cursor-pointer outline-none' />
          <div className="">
          <MdOutlineStraighten onClick={handleSewer} className='transition ease-in-out duration-300 hover:scale-110 outline-none hover:text-[#cd865c] text-base cursor-pointer' data-tooltip-id="my-tooltip" data-tooltip-content="Add Sewer Profile" />
          </div>
          <Link to='/cart'>
          <div className="relative">
          <FiShoppingCart className='text-base transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]'/>
            <span className='absolute -top-3  p-0 -right-2 flex px-1 text-xs items-center justify-center rounded-full bg-[#f1d9b7]'>{cartData.length}</span>
          </div>
          </Link>
          <div className="">
          <RxHamburgerMenu onClick={handleNav} className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c] cursor-pointer md:hidden' />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar