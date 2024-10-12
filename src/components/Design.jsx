import React, { useRef, useState } from 'react'
import Men1 from "../assets/Images/Men1.jpeg";
import Men2 from "../assets/Images/Men2.jpeg";
import Men3 from "../assets/Images/Men3.jpeg";
import Men4 from "../assets/Images/Men4.jpeg";
import Men5 from "../assets/Images/Men5.jpeg";
import Men6 from "../assets/Images/Men6.jpeg";
import Men7 from "../assets/Images/Men7.jpeg";
import Men8 from "../assets/Images/Men8.jpeg";
import Men9 from "../assets/Images/Men9.jpeg";
import Men10 from "../assets/Images/Men10.jpeg";
import Men11 from "../assets/Images/Men11.jpeg";
import Men12 from "../assets/Images/Men12.jpeg";
import Men13 from "../assets/Images/Men13.jpeg";

import Girl1 from "../assets/Images/Girl1.jpeg";
import Girl2 from "../assets/Images/Girl2.jpeg";
import Girl3 from "../assets/Images/Girl3.jpeg";
import Girl4 from "../assets/Images/Girl4.jpeg";
import Girl5 from "../assets/Images/Girl5.jpeg";
import Girl6 from "../assets/Images/Girl6.jpeg";
import Girl7 from "../assets/Images/Girl7.jpeg";
import Girl8 from "../assets/Images/Girl8.jpeg";
import Girl9 from "../assets/Images/Girl9.jpeg";
import Girl10 from "../assets/Images/Girl10.jpeg";

import BabyGirl1 from "../assets/Images/BabyGirl1.jpeg";
import BabyGirl2 from "../assets/Images/BabyGirl2.jpeg";
import BabyGirl3 from "../assets/Images/BabyGirl3.jpeg";
import BabyGirl4 from "../assets/Images/BabyGirl4.jpeg";
import BabyGirl5 from "../assets/Images/BabyGirl5.jpeg";
import BabyGirl6 from "../assets/Images/BabyGirl6.jpeg";

import BabyBoy1 from "../assets/Images/BabyBoy1.jpeg";
import BabyBoy2 from "../assets/Images/BabyBoy2.jpeg";
import BabyBoy3 from "../assets/Images/BabyBoy3.jpeg";
import BabyBoy4 from "../assets/Images/BabyBoy4.jpeg";
import BabyBoy5 from "../assets/Images/BabyBoy5.jpeg";


const Design = () => {
  
    const vendorDetails = [
        {
          Image: Girl1,
          name: "Kurti Set",
          uni: 'aurat',
        },
        {
          Image: Girl2,
          name: "Sharara Set ",
          uni: 'aurat',
        },
        {
          Image: Girl3,
          name: "Gown ",
          uni: 'aurat',
        },
        {
          Image: Girl4,
          name: "Short Kurti",
          uni: 'aurat',
        },
        {
          Image: Girl5,
          name: "Styled Lehenga ",
          uni: 'aurat',
        },
        {
          Image: Girl6,
          name: "Red sharara",
          uni: 'aurat',
        },
        {
          Image: Girl7,
          name: "Red gown full",
          uni: 'aurat',
        },
        {
          Image: Girl8,
          name: "Women cloths",
          uni: 'aurat',
        },
        {
          Image: Girl9,
          name: "One piece full Gown",
          uni: 'aurat',
        },
        {
          Image: Girl10,
          name: "Red Indian Co-ord set ",
          uni: 'aurat',
        },
        {
          Image: Men1,
          name: "Golden styled Kurta Set",
          uni: 'Admin',
        },
        {
          Image: Men2,
          name: "Mens Formal Set",
          uni: 'Admin',
        },
        {
          Image: Men3,
          name: "Wedding attire Black Blazer",
          uni: 'Admin',
        },
        {
          Image: Men4,
          name: "Kurta with jacket ",
          uni: 'Admin',
        },
        {
          Image: Men5,
          name: "Sherwani ",
          uni: 'Admin',
        },
        {
          Image: Men6,
          name: "Mens casual Full shirt",
          uni: 'Admin',
        },
        {
          Image: Men7,
          name: "Mens Formal",
          uni: 'Admin',
        },
        {
          Image: Men8,
          name: "Mens Co-ord set",
          uni: 'Admin',
        },
        {
          Image: Men9,
          name: "Mens casual kurta",
          uni: 'Admin',
        },
        {
          Image: Men10,
          name: "Mens Genz fashion ",
          uni: 'Admin',
        },
        {
          Image: Men11,
          name: "Mens wedding sherwani with shawl",
          uni: 'Admin',
        },
        {
          Image: Men12,
          name: "Mens kurta",
          uni: 'Admin',
        },
        {
          Image: Men13,
          name: "Mens Formal and Casual Blazer",
          uni: 'Admin',
        },
        {
          Image: BabyGirl1,
          name: "Kids Lehenga",
          uni: 'bache',
        },
        {
          Image: BabyGirl2,
          name: "Kids Two Piece Set",
          uni: 'bache',
        },
        {
          Image: BabyGirl3,
          name: "Kids Party Wear",
          uni: 'bache',
        },
        {
          Image: BabyGirl4,
          name: "Kida Traditional Kurta Set",
          uni: 'bache',
        },
        {
          Image: BabyGirl5,
          name: "Kids Net Gown",
          uni: 'bache',
        },
        {
          Image: BabyGirl6,
          name: "Kids Frock",
          uni: 'bache',
        },
        {
          Image: BabyBoy1,
          name: "Kids Sherwani ",
          uni: 'bache',
        },
        {
          Image: BabyBoy2,
          name: "Kids Formal Set",
          uni: 'bache',
        },
        {
          Image: BabyBoy3,
          name: "Kids Casual Shirt",
          uni: 'bache',
        },
        {
          Image: BabyBoy4,
          name: "Kids Traditional Kurta Set",
          uni: 'bache',
        },
        {
          Image: BabyBoy5,
          name: "Kids Blazer",
          uni: 'bache',
        },
      ];
      
      
      const Categories = [
        {
          id: 1,
          name: "Womens",
          uni: 'aurat'
        },
        {
          id: 2,
          name: "Mens",
          uni: 'Admin'
        },
        {
          id: 3,
          name: "Kids",
          uni: 'bache'
        },
      ];


      const [categoriesData, setCategoriesData] = useState([]);
      const activeClass = useRef();
    
      const handleCategory = (id) => {
        activeClass.current = id
        setCategoriesData(
          vendorDetails.filter((category) =>
            category.uni.toLowerCase().match(id.toLowerCase())
          )
        );
      };

  return (
    <div>
        <div className="text-center mt-10">
        <h2 className="text-4xl xs:text-5xl text-[#cd865c] font-['Italiana']">Design And Styles</h2>
        <p className="xs:w-2/3 px-1 mx-auto py-3 text-sm xs:text-base">Welcome to Loom, where your sewing journey begins! We’re excited to help you explore a vibrant array of clothing designs and styles. <span className='hidden xs:inline'>As you navigate our collection, you'll discover everything from casual pieces to elegant attire, perfect for any occasion.</span> </p>
        <div className="mx-auto w-10/12">
          <div className="flex gap-5 md:gap-10 items-center justify-center my-10">
            {Categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategory(category.uni)}
                className={`md:px-3 uppercase md:text-xl hover:text-[#cd865c] ${category.uni === activeClass.current ? 'active' : ''}`}
              >
                {/* bg-gray-200 hover:bg-gray-300 border border-[#98a8b4]  rounded */}
                {category.name}
              </button>
            ))
              
        }
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
            {categoriesData.length
              ? categoriesData.map((vendor, i) => (
                  <div key={i} className="">
                    <div className="h-[20rem] w-full border sm:h-h-[20rem] sm:w-full overflow-hidden rounded">
                      <img
                        src={vendor.Image}
                        alt=""
                        className="w-full h-full  hover:scale-105 transition-all duration-700 object-cover object-left-top rounded"
                      />
                    </div>
                    <div className="text-left mt-3 mb-5">
                      <p>
                        <span className="font-bold">Name: </span> {vendor.name}<br/>
                        {/* <span className="font-bold">Price: </span> ₹ {vendor.price} */}
                      </p>
                      <button className='bg-[#f1d9b7] border border-[#5b5957bc] px-2 rounded mt-2'>Order now</button>
                    </div>
                  </div>
                ))
              : vendorDetails.map((vendor, i) => (
                  <div key={i} className="w-full">
                   <div className="h-[20rem] w-full border sm:h-h-[20rem] sm:w-full overflow-hidden rounded">
                      <img
                        src={vendor.Image}
                        alt=""
                        className="w-full h-full hover:scale-105 transition-all duration-700 object-cover object-left-top rounded"
                      />
                    </div>
                    <div className="text-left mt-3 mb-5">
                      <p>
                        <span className="font-bold">Name: </span> {vendor.name}<br/>
                        {/* <span className="font-bold">Price: </span> ₹ {vendor.price} */}
                      </p>
                      <button className='bg-[#f1d9b7] border border-[#5b5957bc] px-2 rounded mt-2'>Order now</button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
          <p className='pb-10'> <span className='text-red-700 text-xl'>Note </span>  :   Customizable clothes and price call us for booking now.</p>
      </div>
    </div>
  )
}

export default Design