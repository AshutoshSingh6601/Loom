import React from 'react'
import vendor1 from '../assets/Images/Vendor1.jpeg'
import vendorPro1 from '../assets/Images/VerndorPro1.jpeg'
import vendorPro2 from '../assets/Images/VerndorPro2.jpeg'
import vendorPro3 from '../assets/Images/VerndorPro3.jpeg'
import Men2 from "../assets/Images/Men2.jpeg";
import Men9 from "../assets/Images/Men9.jpeg";
import Men10 from "../assets/Images/Men10.jpeg";
import Men13 from "../assets/Images/Men13.jpeg";

const Experince = () => {
    
    const vendorDetails = [
        {
            Image: vendor1,
            name: 'Pooja shastri ',
            exp: '6'
        },
        {
            Image: vendorPro1,
            name: 'Durva Dutta',
            exp: '5'
        },
        {
            Image: vendorPro2,
            name: 'Praisy Jha ',
            exp: '10' 
        },
        {
            Image: vendorPro3,
            name: 'Shanmukh Agarkar',
            exp: '8' 
        },
        {
            Image: Men10,
            name: 'Ashutosh',
            exp: '3' 
        },
        {
            Image: Men9,
            name: 'Jay ',
            exp: '9'
        },
        {
            Image: Men2,
            name: 'Rohit',
            exp: '7' 
        },
        {
            Image: Men13,
            name: 'Ayansh',
            exp: '11'
        },
    ]

  return (
    <>
     <div className="text-center mt-10 md:mb-5">

        <h2 className='text-5xl text-[#cd865c] font-["Italiana"]'>Experienced Sewers</h2>
        <p className='w-2/3 mx-auto py-5'>At Loom, we pride ourselves on our extensive experience in the world of sewing. With years of passion and expertise behind us, we understand the intricacies of fabric, design, and technique. Our team of skilled sewists is dedicated to sharing this knowledge with you, offering guidance and support as you embark on your fashion style.</p>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-10/12 mx-auto my-5 ">
        {
            vendorDetails.map((vendor, i)=>
                <div key={i} className='flex flex-col items-center justify-center'>
                    <img src={vendor.Image} alt="" className='h-[8rem] w-[8rem] border border-[#38444d] sm:h-[12rem] sm:w-[12rem] object-cover object-left-top rounded-full'  />
                    <div className="text-left ps-3">
                    <p><span className='font-bold'>Name: </span> {vendor.name} </p>
                    <p><span className='font-bold'>Experience: </span> {vendor.exp} years </p>
                    </div>
                </div>
            )
        } 
        </div>
     </div>
    </>
  )
}

export default Experince