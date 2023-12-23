import React from "react";
import { Button, Img, Text } from "components";
import { GrYoutube } from "react-icons/gr";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiMail, CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-800 flex font-inter items-center justify-center md:px-5 w-full">
      <div className="flex  flex-row md:gap-5 items-center justify-center mb-[21px] ml-[67px] mr-[105px] mt-[26px] w-[89%]">
        <Text
          className="text-white-A700 text-xl sm:text-[13px]"
          size="txtInterRegular20"
        >
          Copyright{" "}
        </Text>
        <Img
          className="h-5 md:ml-[0] ml-[9px] w-[21px]"
          src="images/img_clock.svg"
          alt="clock"
        />
        <Text
          className="ml-2 md:ml-[0] text-white-A700 text-xl sm:text-[13px]"
          size="txtInterRegular20"
        >
          2023 pilarcendekia. Allright reserved
        </Text>
        <a href="https://www.youtube.com/channel/UCK6_IO85Lq5zMm3OgVgfshA">
          <GrYoutube className="text-4xl text-white-A700 mx-4" />
        </a>
        <a href="https://www.facebook.com/pilar.cendekia?mibextid=ZbWKwL">
          <FaInstagram className="text-4xl text-white-A700 mx-4" />
        </a>
        <a href=" http://wa.me/6282231838142">
          <FaWhatsapp className="text-4xl text-white-A700 mx-4" />
        </a>
        <a href="bimbelpilarcendekia@gmail.com">
          <CiMail className="text-4xl text-white-A700 mx-4" />
        </a>
        <a href="https://www.facebook.com/pilar.cendekia?mibextid=ZbWKwL">
          <CiFacebook className="text-4xl text-white-A700 mx-4" />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
