import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative w-full h-[55vh] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/rise-lebanon.MOV"
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: 'cover' }}
            ></video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Insurance LB</h1>
                <p className="text-sm mb-6">
                    Protecting what matters most with innovative insurance solutions.
                </p>
                <Link
                  href=""
                  className="rounded-md bg-sky-600 px-3.5 py-2.5
                  text-sm font-semibold text-white shadow-sm hover:bg-sky-500
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600"
                  onClick={() => {
                    const phoneNumber = "+96171390497";
                    const message = encodeURIComponent(
                      "Hi there! 👋 I've been hearing great things about your services and I'm eager to learn more. Can you please provide me with some details?"
                    );
                    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
                  }}
                >
                  Get started
                </Link>
            </div>
        </div>
    );
};

export default Hero;