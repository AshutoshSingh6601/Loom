import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const SewerDetail = ({ sewer, setSewer }) => {
  const [sewerInput, setSewerInput] = useState({
    image: null,
    name: "",
    experience: "",
    email: "",
    location: "",
  });

  
  const handleSewer = () => {
    setSewer(false);
  };

  const onChange = (e) => {
    setSewerInput({ ...sewerInput, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSewerInput({
      ...sewerInput,
      image: e.target.files[0],
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", sewerInput.image); // Append image file
    formData.append("name", sewerInput.name);
    formData.append("experience", sewerInput.experience);
    formData.append("email", sewerInput.email);
    formData.append("location", sewerInput.location);

    try {
      const response = await fetch("http://127.0.0.1:8000/sewer/", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      console.log(json);
      setSewer(false);
    } catch (error) {
      console.error("Error uploading data:", error); // Handle errors
    }
  };

  return (
    <div>
      {sewer && (
        <div className="fixed top-0 left-0 z-50 w-full h-screen bg-smallNav flex items-center justify-center overflow-hidden">
          <div className=" bg-[#DBB594] xs:p-10 p-3 mt-5 xs:mt-0 rounded-lg xs:rounded-2xl w-11/12 xs:w-1/3 text-gray-800 ">
            <div className="flex items-center mb-5">
              <span className="text-2xl">Sewer Profile</span>
              <FaXmark
                onClick={handleSewer}
                className="ms-auto text-xl transition ease-in-out duration-300 hover:scale-110 hover:text-[#cd865c] cursor-pointer "
              />
            </div>
            {/* encType="multipart/form-data" */}
            <form
              action=""
              onSubmit={handleClick}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1">
                <label className="ms-1" htmlFor="image">
                  Select profile photo
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="ms-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  id="name"
                  name="name"
                  onChange={onChange}
                  className="p-2 rounded-lg outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="ms-1" htmlFor="experience">
                  Eperience
                </label>
                <input
                  type="text"
                  placeholder="Enter your experience"
                  id="experience"
                  name="experience"
                  onChange={onChange}
                  className="p-2 rounded-lg outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="ms-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  className="p-2 rounded-lg outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="ms-1" htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  id="location"
                  name="location"
                  onChange={onChange}
                  className="p-2 rounded-lg outline-none"
                />
              </div>
              <div className="text-end">
                <button className="bg-[#F2E1CA] mt-5 py-1 px-3 rounded hover:bg-[#f1dab8] border border-[#ca9e61b2]">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SewerDetail;
