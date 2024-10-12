import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';



const Navbar = ({setShowNav, setRegister}) => {

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

  const handleNav = () =>{
    setShowNav(true)
  }

  const handleRegister = () =>{
    setRegister(true)
  }

  return (
    <div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 items-center py-3 md:py-5 justify-between px-5 gap-5 md:px-20 shadow-[0_1px_1px_0px_rgba(0,0,0,0.3)] shadow-[#cd865c] xs:shadow-none">
        {/* <div className="left"> */}
          <ul className='hidden md:flex gap-6 text-sm xs:col-span-2 '>
            {
              NavLinks.map((link)=>
                <NavLink key={link.id} to={link.link}> <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>{link.name}</li> </NavLink>
              )
            }
          </ul>
        {/* </div> */}
        <div className="center">
          <Link to='/'><h1 className='font-Dancing font-bold text-4xl md:text-6xl'>Loom</h1></Link>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <AiOutlineUserAdd onClick={handleRegister} className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' />
          {/* <GoHeart className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' /> */}
          <FiShoppingCart className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c]' />
          <RxHamburgerMenu onClick={handleNav} className='transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c] cursor-pointer md:hidden' />
        </div>

      </div>
      
    </div>
  )
}

export default Navbar