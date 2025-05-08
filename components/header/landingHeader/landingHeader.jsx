import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function LandingHeader({ landingHeader }) {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adjust this value for the delay between words
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative isolate">
      <div className="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
        <svg
          viewBox="0 0 801 1036"
          aria-hidden="true"
          className="w-[50.0625rem]"
        >
          <path
            fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
            fillOpacity=".3"
            d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
          />
          <defs>
            <linearGradient
              id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
              x1="508.179"
              x2="-28.677"
              y1="-116.221"
              y2="1091.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0284c7" />
              <stop offset={1} stopColor="#9ca3af" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-8 lg:pt-12">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.span variants={wordVariants}>Feel</motion.span>{" "}
                  <motion.span variants={wordVariants}>secure</motion.span>{" "}
                  <motion.span variants={wordVariants}>and</motion.span>{" "}
                  <motion.span variants={wordVariants}>content,</motion.span>{" "}
                  <motion.span variants={wordVariants}>knowing</motion.span>{" "}
                  <motion.span variants={wordVariants}>our</motion.span>{" "}
                  <motion.span variants={wordVariants}>
                    comprehensive
                  </motion.span>{" "}
                  <motion.span variants={wordVariants}>policies</motion.span>{" "}
                  <motion.span variants={wordVariants}>have</motion.span>{" "}
                  <motion.span variants={wordVariants}>you</motion.span>{" "}
                  <motion.span variants={wordVariants}>covered.</motion.span>
                </motion.div>
              </h1>
              {/* {landingHeader?.length > 0 &&
                landingHeader?.map((landingText) => ( */}
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                {/* {landingText?.landingHeaderText} */}
                Founded with a commitment to prioritize the well-being of
                individuals and families, InsuranceLB has emerged as a prominent
                name in the medical insurance landscape. With a rich history
                spanning over two years, our mission has been to provide
                comprehensive healthcare solutions that go beyond coverage – we
                strive to nurture and safeguard the vitality of our valued
                clients.
              </p>
              {/* ))} */}
              {/* {!landingHeader?.length > 0 && <p>Error fetching content.</p>} */}
              <div className="mt-10 flex items-center gap-x-6">
                {/* TODO: change link */}
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
                {/* <Link
                  href="/company/contact"
                  className="text-sm font-semibold leading-6
                  text-gray-900 hover:underline hover:opacity-80"
                >
                  Contact us <span aria-hidden="true">→</span>
                </Link> */}
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <motion.div
                animate={{
                  y: -20,
                  transition: { duration: 1 },
                }}
                className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
              >
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1514415008039-efa173293080?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </motion.div>
              <motion.div
                animate={{
                  y: -40,
                  transition: { duration: 1 },
                }}
                className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
              >
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </motion.div>
              <motion.div
                animate={{
                  y: 30,
                  transition: { duration: 1 },
                }}
                className="w-44 flex-none space-y-8 pt-32 sm:pt-0"
              >
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1517554558809-9b4971b38f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-[2/3] object-left-top w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
