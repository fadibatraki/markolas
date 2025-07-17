"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  useDotButton,
} from "@/components/ui/carousel";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Product } from "@/lib/types";
import { Link } from "@/i18n/navigation";
import gsap from "gsap";

type HeroCarouselProps = {
  products: Product[];
};

const TWEEN_FACTOR_BASE = 0.2;

export default function HeroCarousel({ products }: HeroCarouselProps) {
  const t = useTranslations("Hero");
  const [api, setApi] = React.useState<CarouselApi | undefined>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const rotatingImageRefs = useRef<(HTMLDivElement | null)[]>([]); // صور المنتجات لتأثير الدوران

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector("img") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          const distanceToCenter = Math.abs(scrollSnap - scrollProgress);
          const isCenter = distanceToCenter < 0.1;
          const scale = isCenter ? "1.1" : "0.9";

          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
          tweenNode.style.transition = "transform 0.5s ease";
        });
      });
    },
    [],
  );




  // إعداد Embla الأساسي
  useEffect(() => {
    if (!api) return;

    setTweenNodes(api);
    setTweenFactor(api);
    tweenScale(api);

    api
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [api, tweenScale]);

  // 🌀 دوران الصورة + حركة الإضاءة اللامعة
  useEffect(() => {
    rotatingImageRefs.current.forEach((el) => {
      if (el) {
        // دوران الصورة حول المحور Y باستمرار
        gsap.to(el, {
          rotateY: 360,
          duration: 10,
          ease: "linear",
          repeat: -1,
          transformOrigin: "center center",
        });

        // حركة الإضاءة اللامعة
        const shine = el.querySelector(".shine-overlay");
        if (shine) {
          gsap.to(shine, {
            x: "200%", // تحريك الإضاءة من اليسار لليمين
            duration: 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          });
        }
      }
    });
  }, []);

  return (
    <section id="home" className="bg-gradient-to-br from-[#4f5759] via-[#a5adaf] to-[#a5adaf]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 ">
        <div className="w-full px-4 pt-10">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_834_7356)">
                    <path
                      d="M3.94024 13.4474C2.6523 12.1595 2.00832 11.5155 1.7687 10.68C1.52908 9.84449 1.73387 8.9571 2.14343 7.18231L2.37962 6.15883C2.72419 4.66569 2.89648 3.91912 3.40771 3.40789C3.91894 2.89666 4.66551 2.72437 6.15865 2.3798L7.18213 2.14361C8.95692 1.73405 9.84431 1.52927 10.6798 1.76889C11.5153 2.00851 12.1593 2.65248 13.4472 3.94042L14.9719 5.46512C17.2128 7.70594 18.3332 8.82635 18.3332 10.2186C18.3332 11.6109 17.2128 12.7313 14.9719 14.9721C12.7311 17.2129 11.6107 18.3334 10.2184 18.3334C8.82617 18.3334 7.70576 17.2129 5.46494 14.9721L3.94024 13.4474Z"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="7.17245"
                      cy="7.39917"
                      r="1.66667"
                      transform="rotate(-45 7.17245 7.39917)"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9.61837 15.4164L15.4342 9.6004"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_834_7356">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Categories
              </span>
              <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
                Browse by Category
              </h2>
            </div>
          </div>

          <div className="mt-0">
            <Carousel
              setApi={setApi}
              className="w-full"
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem
                    key={product.id}
                    className="relative basis-1/2 md:basis-1/6"
                    ref={(el) => {
                      if (el) itemsRef.current[index] = el;
                    }}
                  >
                    <Link
                      href={`/products/${product.id}`}
                      className="group flex flex-col items-center"
                    >
                      <div
                        className="relative max-w-[130px] w-full bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] h-32.5 rounded-full flex items-center justify-center mb-4 overflow-hidden"
                        ref={(el) => {
                          if (el) {
                            rotatingImageRefs.current[index] = el;
                            itemsRef.current[index] = el; // هذا العنصر يدعم ref
                          }
                        }}
                      >
                        <Image
                          className="object-contain mx-auto will-change-transform z-[1]"
                          src={product.images[0].url}
                          alt={product.name}
                          width={500}
                          height={500}
                          priority
                        />
                        <div className="shine-overlay absolute inset-0 z-[2] pointer-events-none" />
                      </div>
                      <div className="flex justify-center">
                        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
                          {product.name}
                        </h3>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* CSS للإضاءة اللامعة */}
      <style jsx>{`
        .shine-overlay {
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 80%
          );
          transform: translateX(-100%);
        }
      `}</style>
    </section>
  );
}
