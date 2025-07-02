"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                20%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[14px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Power Bank Markolas 22.5W</a>
            </h1>

            <p>
              A sleek, compact power bank with an LED digital display showing precise battery percentage. Supports 22.5W fast charging and comes with a convenient carrying strap. Perfect for travelers and everyday use   </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-[#f0810a] py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Shop Now
            </a>
          </div>

          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <Image
              src="/images/hero/1.png"
              alt="headphone"
              width={351}
              height={358}
              className="w-[180px] h-[180px] sm:w-[351px] sm:h-[358px] object-contain"
            />
          </div>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                20%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Markolas Dual-Port Fast Charger</a>
            </h1>

            <p>
              Compact and powerful charger , Delivers fast and efficient charging for smartphones, tablets, and other devices. Designed with premium materials for durability and safety.


            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-[#f0810a] py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Shop Now
            </a>
          </div>


          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <Image
              src="/images/hero/11.png"
              alt="headphone"
              width={351}
              height={358}
              className="w-[180px] h-[180px] sm:w-[351px] sm:h-[358px] object-contain"
            />
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
