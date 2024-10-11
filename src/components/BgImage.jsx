import React from "react";
import Attached from "../assets/Images/Attached.jpg";

const BgImage = () => {
  return (
 
    <div
      className="bg-fixed w-full h-screen bg-center bg-cover relative bg-no-repeat"
      style={{ backgroundImage: "url(" + Attached + ")" }}
    >
      <div className="absolute bg-[#0000008c] z-10 w-full h-full "></div>

<div className="z-30">
      <div className="z-30">
            <p className="text-2xl sm:text-5xl z-30 text-[#e77b3c] font-['Italiana'] text-center py-10">
              DAZZLING WAY TO STYLE YOURSELF
            </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-gray-50 px-10 items-center py-10">
        <p className="p-5 text-justify hidden md:block z-30">
          At Loom, we take orders for a stunning range of both Indian and
          Western clothing for women. Whether you’re after elegant traditional
          attire or chic contemporary styles, our expert team is here to create
          the perfect pieces tailored just for you. Experience fashion that
          speaks to your individuality, and enjoy the convenience of custom
          sewing with delivery right to your doorstep. Elevate your wardrobe
          today—because every woman deserves to look and feel fabulous!
        </p>

        <p className="p-5 text-justify z-30">
          Let's explore now and get a chance to be lost in the world of
          fashionable clothes LOOM.
        </p>

        <p className="p-5 text-justify hidden md:block  z-30">
          At Loom, we take orders for a stylish range of both Indian and Western
          clothing for men. Whether you're looking for sharp ethnic wear or
          modern casuals, our skilled team is dedicated to crafting pieces that
          fit your unique style. Experience the perfect blend of tradition and
          trend with our custom sewing services delivered right to your
          doorstep. Redefine your wardrobe today—because every man deserves to
          make a statement!
        </p>
      </div>

<div className="text-center text-gray-50 flex flex-col items-center justify-center pt-20  gap-10">
  <div className="flex gap-5 sm:gap-20">
      <button onClick={()=>console.log("EXPLORE NOW button.......")} className="bg-[#f1d9b7] cursor-pointer py-1 rounded border border-[#5b5957bc] text-gray-800 w-40 z-30">EXPLORE NOW</button>

      <button className="bg-[#f1d9b7] cursor-pointer py-1 z-30 rounded border border-[#5b5957bc] text-gray-800 w-40">ORDER NOW</button>
  </div>

      <button className="bg-[#f1d9b7] cursor-pointer z-30 py-1 rounded border border-[#5b5957bc] text-gray-800 w-40 ">CALL US</button>
</div>
        

      </div>

    </div>
  );
};

export default BgImage;
