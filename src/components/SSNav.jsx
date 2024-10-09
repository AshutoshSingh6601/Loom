import React from 'react'
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SSNav = ({setShowNav}) => {

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
        setShowNav(false)
      }

  return (
    <div>
        <div className="md:hidden h-screen w-full bg-smallNav absolute z-30 top-0 text-white">
            <div className="w-2/3 xs:w-1/2 h-full ms-auto bg-[#7a5443] p-10">
            <FaXmark onClick={handleNav} className='ms-auto text-xl transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c] cursor-pointer' />

            <ul className='grid gap-6 text-sm mt-10'>
            {
              NavLinks.map((link)=>
                <Link key={link.id} onClick={handleNav} to={link.link}> <li className='uppercase tracking-widest cursor-pointer hover:text-[#cd865c]'>{link.name}</li> </Link>
              )
            }
          </ul>

            </div>
        </div>
    </div>
  )
}

export default SSNav