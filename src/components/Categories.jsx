import React from 'react'
import vendor1 from '../assets/Images/Vendor1.jpeg'
import vendorPro1 from '../assets/Images/VerndorPro1.jpeg'
import vendorPro2 from '../assets/Images/VerndorPro2.jpeg'
import vendorPro3 from '../assets/Images/VerndorPro3.jpeg'

const Categories = () => {

    const vendorDetails = [
        {
            Image: vendor1,
            name: 'Ashutosh',
            exp: '5'
        },
        {
            Image: vendorPro1,
            name: 'Ashutosh',
            exp: '5'
        },
        {
            Image: vendorPro2,
            name: 'Ashutosh',
            exp: '5' 
        },
        {
            Image: vendorPro3,
            name: 'Ashutosh',
            exp: '5' 
        },
        {
            Image: vendor1,
            name: 'Ashutosh',
            exp: '5' 
        },
        {
            Image: vendor1,
            name: 'Ashutosh',
            exp: '5'
        },
    ]

  return (
    <>
     <div className="text-center mt-10">

        <h2 className='text-xl'>Disign And Styles</h2>
        <p>Glamorous wear collections</p>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-10/12 mx-auto my-5">
        {
            vendorDetails.map((vendor, i)=>
                <div key={i} className=''>
                    <img src={vendor.Image} alt="" className='h-[8rem] w-[8rem] border border-[#38444d] sm:h-[12rem] sm:w-[12rem] object-cover object-left-top rounded'  />
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

export default Categories