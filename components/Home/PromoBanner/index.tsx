import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-12 sm:py-16">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-6 xl:px-0 flex flex-col gap-8">

        {/* Big promo banner */}
        <div className="flex flex-col lg:flex-row items-center rounded-lg bg-[#F5F5F7] overflow-hidden p-6 sm:p-8 lg:p-12 gap-6 lg:gap-12">
          <div className="flex-1">
            <span className="block font-medium text-lg sm:text-xl text-dark mb-2">
              About Markolas
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-dark mb-4">
              Markolas – The Signature of Quality.
            </h2>
            <p className="text-base sm:text-lg text-dark">
              At Markolas, we believe mobile accessories should do more than just work — they should last. Born from a vision to merge markable quality with fabulous functionality, Markolas is a brand built for people who care about what powers their everyday life.
              <br></br>
              Our focus is simple:<br></br>
              •	Only real specifications.<br></br>
              •	Only tested, high-performance components.<br></br>
              •	Only long-lasting, reliable products.<br></br>

              Whether it’s a power bank that holds strong for years or a cable that doesn’t give out after a month, we design every product to earn your trust over time. We don’t do gimmicks — just smart, solid accessories that get the job done and stand the test of time.

              Markolas is more than a name. It’s our mark of quality.   </p>
            <a
              href="#"
              className="inline-flex font-medium text-sm sm:text-base text-white bg-blue py-3 px-6 rounded-md transition duration-200 hover:bg-blue-dark mt-6"
            >
              Buy Now
            </a>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto max-w-[200px] mx-auto lg:mx-0">
            <Image
              src="/images/hero/6.png"
              alt="iPhone promo"
              className="w-full h-auto"
              width={300}
              height={400}
              priority
            />
          </div>
        </div>

        {/* Small promos in grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">

          {/* Small promo 1 */}
          <div className="flex flex-col-reverse sm:flex-row items-center rounded-lg bg-[#a6adb1] overflow-hidden p-6 sm:p-8 gap-6">
            <div className="flex-1 text-right sm:text-left">
              <span className="block text-base sm:text-lg text-dark mb-1.5">
                Markolas Dual USB & Type-C Fast Charging Head
              </span>
              <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-dark mb-2">
                Dual-Port Fast Charger
              </h2>
              <p className="font-semibold text-base text-dark">
                Up to 20% off
              </p>
              <a
                href="#"
                className="inline-flex font-medium text-sm sm:text-base text-white bg-blue py-3 px-6 rounded-md transition duration-200 hover:bg-orange-dark mt-6"
              >
                Buy Now
              </a>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0">
              <Image
                src="/images/hero/11.png"
                alt="treadmill promo"
                className="w-full h-auto"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>

          {/* Small promo 2 */}
          <div className="flex flex-col sm:flex-row items-center rounded-lg bg-[#f0810a] overflow-hidden p-6 sm:p-8 gap-6">
            <div className="flex-shrink-0 w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0">

              <Image
                src="/images/hero/12.png"
                alt="watch promo"
                className="w-full h-auto"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex-1">
              <span className="block text-base sm:text-lg text-dark mb-1.5">
                Markolas Dual USB & Type-C Fast Charging Head
              </span>
              <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-dark mb-2">
                Up to <span className="text-bold">30%</span> off
              </h2>
              <p className="text-sm sm:text-base text-dark max-w-[285px]">
                Dual-Port Fast Charger
              </p>
              <a
                href="#"
                className="inline-flex font-medium text-sm sm:text-base text-white bg-[#a6adb1] py-2.5 px-6 rounded-md transition duration-200 hover:bg-orange-dark mt-4"
              >
                Buy Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
