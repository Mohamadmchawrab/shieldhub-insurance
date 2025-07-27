import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 text-white md:gap-0 h-full">
        {/* Text */}
        <div className="flex flex-col items-start  md:text-left">
          <h1 className="text-2xl sm:text-3xl  md:text-5xl font-extrabold mb-3">
            Nabeel Simplifies Insurance
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-md text-gray-200 mb-2">
            Protecting what matters most with innovative insurance solutions.
          </p>
          <p className="text-sm sm:text-base md:text-base max-w-md text-gray-200 mb-4">
            Whether it’s your car, home, health, or business — Nabeel is here to
            make insurance easy, accessible, and stress-free. Compare policies,
            get instant quotes, and enjoy expert support every step of the way.
          </p>

          <Link
            href="#"
            className="bg-green-800 hover:bg-green-700 text-white px-5 py-2.5 rounded-md font-semibold text-sm shadow-md"
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
        <div className="pt-4 md:pt-0">
          <Image
            src="/nabeel-icons.png"
            width={230}
            height={80}
            alt="Logo"
            className="w-36 sm:w-40 md:w-[260px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
