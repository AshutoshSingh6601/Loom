import React, { useContext, useEffect, useRef, useState } from "react";
import productContext from "../context/ProductContext";

const Design = () => {
  const { vendorDetails, setCartData, cartData } = useContext(productContext);

  const [searchProduct, setSearchProduct] = useState('')

  const Categories = [
    {
      id: 1,
      name: "Womens",
      uni: "aurat",
    },
    {
      id: 2,
      name: "Mens",
      uni: "Admin",
    },
    {
      id: 3,
      name: "Kids",
      uni: "bache",
    },
  ];

  const handleProduct = (product) => {
    const isProduct = cartData.find((vendor)=>vendor.name === product.name)
    if(!isProduct){
      setCartData((prev)=> [...prev, product])
    }
    
  };

  const [categoriesData, setCategoriesData] = useState([]);
  const activeClass = useRef("");


  const handleCategory = (id) => {
    activeClass.current = id;
    filterCategories();
  };

  // Filter categories when searchProduct or activeClass changes
  const filterCategories = () => {
    const filteredData = vendorDetails.filter((category) => 
      category.name.toLowerCase().includes(searchProduct.toLowerCase()) &&
      category.uni.toLowerCase().match(activeClass.current.toLowerCase())
    );
    setCategoriesData(filteredData);
  };

  // useEffect to trigger filtering when searchProduct changes
  useEffect(() => {
    filterCategories();
  }, [searchProduct]);

  useEffect(() => {
    filterCategories();
  }, [activeClass.current]);

  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="text-4xl xs:text-5xl text-[#cd865c] font-['Italiana']">
          Design And Styles
        </h2>
        <p className="xs:w-2/3 px-1 mx-auto py-3 text-sm xs:text-base">
          Welcome to Loom, where your sewing journey begins! We’re excited to
          help you explore a vibrant array of clothing designs and styles.{" "}
          <span className="hidden xs:inline">
            As you navigate our collection, you'll discover everything from
            casual pieces to elegant attire, perfect for any occasion.
          </span>
        </p>
        <div className="mx-auto w-10/12">
        
          <div className="flex gap-5 md:gap-10 items-center justify-center my-10">
            {Categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategory(category.uni)}
                className={`md:px-3 uppercase md:text-xl hover:text-[#cd865c] ${
                  category.uni === activeClass.current ? "active" : ""
                }`}
              >
                {/* bg-gray-200 hover:bg-gray-300 border border-[#98a8b4]  rounded */}
                {category.name}
              </button>
            ))}
          </div>
          <div className="">
          <input type="text" className="outline-none p-2 w-full md:w-96 rounded-xl border" placeholder="Search your design" value={searchProduct} onChange={(e)=>{setSearchProduct(e.target.value)}} />
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
            {categoriesData.length ?
              categoriesData.map((vendor, i) => (
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
                      <span className="font-bold">Name: </span> {vendor.name}
                      <br />
                      {/* <span className="font-bold">Price: </span> ₹ {vendor.price} */}
                    </p>
                    <button
                      onClick={() => handleProduct(vendor)}
                      className="bg-[#f1d9b7] border border-[#5b5957bc] px-2 rounded mt-2"
                    >
                      Order now
                    </button>
                  </div>
                </div>
              ))
            :
            'Please Enter valid design name'
            }
          </div>
        </div>
        <p className="pb-10">
          <span className="text-red-700 text-xl">Note </span> : Customizable
          clothes and price call us for booking now.
        </p>
      </div>
    </div>
  );
};

export default Design;
