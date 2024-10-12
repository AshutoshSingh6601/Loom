import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



const Contact = () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", apiKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

  return (
    <div className='my-20 xs:flex w-11/12 xs:w-10/12 mx-auto'>
        <div className="w-full xs:p-6 flex flex-col gap-3 md:gap-8">
            <div className="flex items-center gap-5">
            <FaPhone className='text-xl' />
            <p>+91 - 9876543210</p>
            </div>
            <div className="flex items-center gap-5">
            <FaInstagram className='text-xl' />
            <p className='text-blue-500 hover:underline hover:underline-offset-2'>https://www.instagram.com/sewnship_attire/</p>
            </div>
            <div className="flex items-center gap-5">
            <FaPinterest className='text-xl' />
            <p className='text-blue-500 hover:underline hover:underline-offset-2'>https://au.pinterest.com/sewnship_attire/</p>
            </div>
            <div className="flex items-center gap-5">
            <FaTwitter className='text-xl' />
            <p className='text-blue-500 hover:underline hover:underline-offset-2'>https://www.twitter.com/sewnship_attire/</p>
            </div>
            <div className="flex items-center gap-5">
            <FaFacebook className='text-xl' />
            <p className='text-blue-500 hover:underline hover:underline-offset-2'>https://www.facebook.com/sewnship_attire/</p>
            </div>
            <div className="flex items-center gap-5">
            <FaPhone className='text-xl' />
            <p>+91 - 9876543210</p>
            </div>
            <div className="flex items-center gap-5">
            <FaPhone className='text-xl' />
            <p>+91 - 9876543210</p>
            </div>
        </div>
        <div className=" bg-[#DBB594] xs:p-10 p-3 mt-5 xs:mt-0 rounded-lg xs:rounded-2xl w-full text-gray-800">
            <form action="" onSubmit={onSubmit}>
                <div className="flex flex-col gap-1">
                    <label className='ms-1' htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter your name' id='name' name='name' className='p-2 rounded-lg outline-none' />
                </div>
                <div className="flex flex-col my-5 gap-1">
                    <label className='ms-1' htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter your email' id='email' name='email' className='p-2 rounded-lg outline-none' />
                </div>
                <div className="flex flex-col gap-1">
                    <label className='ms-1' htmlFor="reason">Reason</label>
                    <textarea name="reason" id="reason" rows={3} placeholder='Enter your reason...' className='p-2 rounded-lg outline-none'></textarea>
                </div>
                <div className="text-end">
                <button className='bg-[#F2E1CA] mt-5 py-1 px-3 rounded hover:bg-[#f1dab8] border border-[#ca9e61b2]'>Submit</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Contact