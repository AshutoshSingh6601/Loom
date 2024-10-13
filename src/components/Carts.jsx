import React, { useContext } from "react";
import productContext from "../context/ProductContext";
import { Link } from "react-router-dom";

const Carts = () => {
  const { cartData } = useContext(productContext);

  return (
    <div className="w-9/12 mx-auto">
      <h2 className='text-5xl text-[#cd865c] font-["Italiana"] text-center my-10'>Cart Details</h2>
      {cartData.length ? (
        cartData.map((product, i) => (
          <div key={i} className="md:flex mb-20 gap-10">
            <div className="h-[20rem] w-full border sm:h-[10rem] sm:w-40 overflow-hidden rounded">
              <img
                src={product.Image}
                alt=""
                className="w-full h-full  hover:scale-105 transition-all duration-700 object-cover object-left-top rounded"
              />
            </div>
            <div className="w-full">
              <p>
                <span className="font-bold"> Name : </span> {product.name}
              </p>
              <p className="text-justify line-clamp-3 md:line-clamp-none">
                <span className="font-bold"> Detail : </span>{" "}
                {product.ProductDetail}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className=" text-center my-3">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            className="w-96 mx-auto mb-5"
            alt=""
          />
          <p>Not Ordered Any Product</p>
        </div>
      )}

      <div className="pb-10 text-center">
        <p>
          <span className="text-red-700 text-xl">Note </span> : Customizable
          clothes and price call us for booking now.
        </p>
        <Link onClick={()=>window.scrollTo(0, 0)}
          to="/design"
          className="text-blue-500 underline underline-offset-2"
        >
          Go To Design
        </Link>
      </div>
    </div>
  );
};

export default Carts;
