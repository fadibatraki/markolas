import React from "react";
import HeroCarousel from "./HeroCarouseTest";
import TestHero from "../../hero";
import HeroFeature from "./HeroFeature";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-20.5 sm:pt-20 lg:pt-30 xl:pt-20.5 bg-[#E5EAF4]">


      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5 ">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden ">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[253px] font-semibold text-dark text-xl mb-5">
                      <a href="#"> Markolas Lightning Charging Cable </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                      A high-speed charging cable
                      </p>
                      <div className="flex items-center gap-4 mb-2.5 sm:mb-2">
                        <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                          10%
                        </span>
                        <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[14px]">
                          Sale
                          <br />
                          Off
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/5.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[200px] font-semibold text-dark text-xl mb-5">
                      <a href="#"> Markolas 10+ Power Bank

                      </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        with Digital Display
                      </p>
                      <div className="flex items-center gap-4 mb-2.5 sm:mb-2">
                        <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                          15%
                        </span>
                        <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[14px]">
                          Sale
                          <br />
                          Off
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/3.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
  <HeroFeature />

    </section>
  );
};

export default Hero;
