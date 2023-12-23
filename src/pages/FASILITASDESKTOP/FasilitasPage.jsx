import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Img, NavbarPage, Text } from "components";
import { Menu, X } from "lucide-react";


const FasilitasPage = () => {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
      setIsActive(!isActive);
    }
  
    return (
        <div id="DaftarPage" className="bg-blue-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
      <div className="flex flex-col items-center justify-start min-w-full mb-[10px] ">
        <div className="flex flex-col items-center justify-start w-full ">
          {/* Navbar */}
          <nav className="flex items-center justify-between w-full">
            {/* Logo */}
            <Img
              className="object-cover h-30 w-80 md:h-20 md:w-60 sm:w-30"
              src="images/logoPilar.png"
              alt="heroimageThree"
            />
            {/* Menu */}
            <div className="sm:hidden">
              <NavbarPage />
              </div>
              <div className="mr-10 my-5 text-3xl hidden sm:block" >
              <button onClick={toggleNavbar}>{isActive ? <X /> : <Menu/>}</button>
              </div>
          </nav>
          {isActive && (
                <div className="flex  items-center basis-1">
                  <NavbarPage />
                </div>
              )}
        </div>
        {/* Content */}
        {/* // Hero Section Start */}
            
        <div className="min-w-full h-600">
          <Img
            className=" object-cover "
            src="images/img_heroimage3_1.png"
            alt="heroimageThree"
          />
          <div className="bg-yellow-50 border border-light_blue-600 border-solid flex flex-col font-secularone items-center justify-start p-[61px] md:px-10 sm:px-5 shadow-bs w-full">
          <div className="flex flex-col items-center justify-start max-w-[1248px] mx-auto w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl"
                size="txtSecularOneRegular24Bluegray800"
              >
                <>
                  &quot;Jangan hanya belajar, tetapi belajar dengan nyaman dan
                  bermakna!&quot;
                </>
              </Text>
              <div className="md:gap-5 gap-[83px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_birudankuning.png"
                  alt="birudankuning"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_11.png"
                  alt="One"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_224.png"
                  alt="Two"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_41.png"
                  alt="Three"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_51.png"
                  alt="Four"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_31.png"
                  alt="Five"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* // Hero Section End */}

         {/* footer Section */}
        <Footer />
        
    </div>
    );
}

export default FasilitasPage;