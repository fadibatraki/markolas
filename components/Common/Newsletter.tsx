import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="overflow-hidden pt-10 pb-10 bg-gradient-to-br from-[#a5adaf] via-[#a5adaf] to-[#4f5759]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 xl:px-0">
        <div className="relative overflow-hidden rounded-xl bg-black/70"> {/* fallback bg for when image doesn't cover */}
          {/* Background image */}
          <Image
            src="/images/shapes/bg11.jpg"
            alt="background illustration"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            width={1170}
            height={900}
            priority
          />
          {/* Optional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl" />

          <div className="relative z-10 flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between p-6 sm:p-8 lg:p-12">
            <div className="w-full lg:max-w-[60%]">
              <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
                Welcome to Markolas – Where Quality Powers Performance
              </h2>
              <p className="text-white text-sm sm:text-base">
                At Markolas, we don’t just sell mobile accessories — we engineer dependable experiences. From high-efficiency power banks to durable cables and reliable chargers, every product is built on one simple promise: real specs, real performance, and a long-lasting life you can trust.
              </p>
            </div>

           <div className=" py-3 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] text-white font-semibold rounded-xl  hover:[#f0810b] hover:scale-105">

              <button
                type="button"
                className="inline-flex justify-center w-full sm:w-auto py-3 px-6 text-white bg-blue font-medium rounded-md transition duration-200 hover:bg-blue-dark"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
