"use client";
import Image from "next/image";
import React from "react";
import heroImage from "../assets/sample.png";
import Button from "../components/Button";
import Typewriter from "typewriter-effect";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center lg:py-20 lg:px-32 md:py-10 p-5 flex-wrap lg:gap-28 md:gap-4 gap-28">
      <div className="lg:w-[600px] md:w-[400px]">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
          Get all your
          <span className="text-blue-600">
            <Typewriter
              className=""
              options={{
                strings: ["Hardware", "Sanitary", "Plumbing"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          products at cheapest market rate
          <span className="text-blue-600">!</span>
        </h1>
        <p className="font-medium lg:text-base md:text-sm text-xs text-gray-600 lg:mt-4 lg:mb-6 my-4">
          We have a market experience of 20+ years and we have got all of your
          favourite brands.
        </p>
        <div className="flex items-center gap-2">
          <Button
            label="Call us"
            bgColor={"#2563eb"}
            textColor={"white"}
            logo={<FaPhone className="lg:w-5 lg:h-5" />}
            hoverBgColor={"inherit"}
            hoverTextColor={"#2563eb"}
          ></Button>
          <Button
            label="WhatsApp us"
            bgColor={"inherit"}
            textColor={"#2563eb"}
            logo={<FaWhatsapp className="lg:w-5 lg:h-5" />}
            hoverBgColor={"#2563eb"}
            hoverTextColor={"inherit"}
          ></Button>
        </div>
      </div>
      <div className="animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in">
        <Image
          src={heroImage}
          alt=""
          width={350}
          height={350}
          className="lg:w-[350px] lg:h-[350px] md:w-[275px] md:h-[275px]"
        />
      </div>
    </div>
  );
};

export default Hero;
