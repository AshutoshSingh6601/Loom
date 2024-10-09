import React from "react";
import Attached from "../assets/Images/Attached.jpg";

const BgImage = () => {
  return (
    <div
      className="bg-fixed w-full h-screen flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: "url(" + Attached + ")" }}
    >
      <p className="text-gray-50 text-3xl w-96">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, aperiam!
      </p>
    </div>
  );
};

export default BgImage;
