import React from 'react'
import { FaXmark } from "react-icons/fa6";

const Register = ({register, setRegister}) => {

    const handleNav = () =>{
        setRegister(false)
      }

  return (
    <div>
        {
            register &&
            <div className="fixed top-0 left-0 z-50 w-full h-screen bg-smallNav flex items-center justify-center overflow-hidden">
                <div className=" bg-[#DBB594] xs:p-10 p-3 mt-5 xs:mt-0 rounded-lg xs:rounded-2xl w-11/12 xs:w-1/3 text-gray-800 ">
                <FaXmark onClick={handleNav} className='ms-auto text-xl transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c] cursor-pointer mb-5' />
                    <form action="">
                        <div className="flex flex-col gap-1">
                            <label className='ms-1' htmlFor="username">Username</label>
                            <input type="text" placeholder='Enter your Username' id='username' name='username' className='p-2 rounded-lg outline-none' />
                        </div>
                        <div className="flex flex-col my-5 gap-1">
                            <label className='ms-1' htmlFor="email">Email</label>
                            <input type="email" placeholder='Enter your email' id='email' name='email' className='p-2 rounded-lg outline-none' />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className='ms-1' htmlFor="password">Password</label>
                            <input type="password" placeholder='Enter your password' id='password' name='password' className='p-2 rounded-lg outline-none' />
                        </div>
                        <div className="text-end">
                        <button className='bg-[#F2E1CA] mt-5 py-1 px-3 rounded hover:bg-[#f1dab8] border border-[#ca9e61b2]'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        }
    </div>
  )
}

export default Register