import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[65vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/rise-lebanon.MOV"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly md:gap-20 px-4 text-white h-full">
        {/* Text */}
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3">
            Nabeel Simplifies Insurance
          </h1>
          <p className="text-xs sm:text-sm md:text-base max-w-sm sm:max-w-md text-gray-200 mb-3 sm:mb-4 text-left">
            Whether it’s your car, home, health, or business — Nabeel is here to
            make insurance easy, and stress-free. Compare policies, get instant
            quotes, and enjoy expert support every step of the way.
          </p>

          <Link
            href="#"
            className="bg-green-800 hover:bg-green-700 text-white px-4 sm:px-5 py-2 rounded-md font-medium text-xs sm:text-sm shadow-md"
            onClick={() => {
              const phoneNumber = "+96178791910";
              const message = encodeURIComponent(
                "Hi there! 👋 I've been hearing great things about your services and I'm eager to learn more. Can you please provide me with some details?"
              );
              window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
            }}
          >
            Get a Free Quote on WhatsApp
          </Link>
        </div>

        {/* Logo */}
        <div className="mt-4 md:mt-0">
          <Image
            src="/nabeel-icons.png"
            width={230}
            height={80}
            alt="Logo"
            className="w-28 sm:w-36 md:w-[260px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
