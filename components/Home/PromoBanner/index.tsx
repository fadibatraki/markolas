"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const EnhancedPromoBanner = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const mainBannerRef = useRef<HTMLDivElement>(null)
  const smallBanner1Ref = useRef<HTMLDivElement>(null)
  const smallBanner2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main banner animation
      gsap.fromTo(
        mainBannerRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainBannerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Small banners staggered animation
      gsap.fromTo(
        [smallBanner1Ref.current, smallBanner2Ref.current],
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: smallBanner1Ref.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Text animations
      gsap.fromTo(
        ".animate-text",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: mainBannerRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Image animations
      gsap.fromTo(
        ".animate-image",
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mainBannerRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    })
  }
  const handleButtonLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      duration: 0.4,
      ease: "power2.out",
    })
  }
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
      duration: 0.4,
      ease: "power2.out",
    })
  }

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-[#a5adaf] via-[#a5adaf ] to-[#a5adaf]"
    >
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-6 xl:px-0 flex flex-col gap-12">
        {/* Enhanced main promo banner */}
        <div
          ref={mainBannerRef}
          className="relative flex flex-col lg:flex-row items-center rounded-3xl bg-gradient-to-br from-[#1a1e20] via-[#2e3334] to-[#3a4042] overflow-hidden p-8 sm:p-10 lg:p-16 gap-8 lg:gap-16 shadow-xl border border-white/20 backdrop-blur-sm"
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f0810b]/40 to-[#f92524]/40 rounded-3xl blur-3xl -rotate-12"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#f92524]/40 to-transparent rounded-3xl blur-2xl rotate-6"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#f0810b]/30 to-[#f35c0d]/30 rounded-3xl blur-xl rotate-45"></div>
          <div className="flex-1 relative z-10">
            <span className="animate-text block font-semibold text-xl sm:text-2xl bg-gradient-to-r from-[#f0810b] to-[#f92524] bg-clip-text text-transparent mb-3">
              About Markolas
            </span>
            <h2 className="animate-text font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-50 mb-6 leading-tight">
              Markolas – The{" "}
              <span className="bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] bg-clip-text text-transparent">
                Signature
              </span>{" "}
              of Quality.
            </h2>
            <div className="animate-text text-lg sm:text-xl text-gray-200 leading-relaxed space-y-4">
              <p>
                At Markolas, we believe mobile accessories should do more than just work — they should last. Born from a
                vision to merge <span className="font-semibold text-white">remarkable quality</span> with{" "}
                <span className="font-semibold text-white">fabulous functionality</span>, Markolas is a brand built for
                people who care about what powers their everyday life.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="font-medium text-gray-50 mb-3">Our focus is simple:</p>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] rounded-full"></div>
                    Only real specifications.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] rounded-full"></div>
                    Only tested, high-performance components.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] rounded-full"></div>
                    Only long-lasting, reliable products.
                  </li>
                </ul>
              </div>
              <p>
                Whether it's a power bank that holds strong for years or a cable that doesn't give out after a month, we
                design every product to earn your trust over time.
              </p>
              <p className="pb-4 font-medium text-gray-50">Markolas is more than a name. It's our mark of quality.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold text-base text-white bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg group"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Buy Now
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="animate-image flex-shrink-0 w-full sm:w-auto max-w-[280px] mx-auto lg:mx-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f0810b]/20 to-[#f92524]/20 rounded-3xl blur-xl"></div>
            <Image
              src="/images/hero/6.png"
              alt="iPhone promo"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
              width={300}
              height={400}
              priority
            />
          </div>
        </div>
        {/* Enhanced small promos in grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Enhanced small promo 1 */}
          <div
            ref={smallBanner1Ref}
            className="flex flex-col-reverse sm:flex-row items-center rounded-3xl bg-gradient-to-br from-[#1a1e20] via-[#2e3334] to-[#3a4042] overflow-hidden p-8 gap-8 shadow-xl border border-white/30 backdrop-blur-sm relative"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#f0810b]/50 to-transparent rounded-3xl blur-2xl -rotate-12"></div>
            <div className="flex-1 text-right sm:text-left relative z-10">
              <span className="block text-lg sm:text-xl text-gray-200 mb-2 font-medium">
                Markolas Dual USB & Type-C Fast Charging Head
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-50 mb-3">Dual-Port Fast Charger</h2>
              <p className="font-bold text-xl text-[#f0810b] mb-4">Up to 20% off</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-base text-white bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg group"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Buy Now
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f0810b]/20 to-[#f92524]/20 rounded-2xl blur-lg"></div>
              <Image
                src="/images/hero/11.png"
                alt="Charger promo"
                className="relative w-full h-auto rounded-xl shadow-lg"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
          {/* Enhanced small promo 2 */}
          <div
            ref={smallBanner2Ref}
            className="flex flex-col sm:flex-row items-center rounded-3xl bg-gradient-to-br from-[#1a1e20] via-[#2e3334] to-[#3a4042] overflow-hidden p-8 gap-8 shadow-xl border border-white/30 backdrop-blur-sm relative"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#f0810b]/50 to-transparent rounded-3xl blur-2xl rotate-12"></div>
            <div className="flex-shrink-0 w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f0810b]/20 to-[#f92524]/20 rounded-2xl blur-lg"></div>
              <Image
                src="/images/hero/12.png"
                alt="Watch promo"
                className="relative w-full h-auto rounded-xl shadow-lg"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex-1 relative z-10">
              <span className="block text-lg sm:text-xl text-gray-200 mb-2 font-medium">
                Markolas Dual USB & Type-C Fast Charging Head
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-50 mb-3">
                Up to <span className="text-[#f0810b] drop-shadow-sm">30%</span> off
              </h2>
              <p className="text-base sm:text-lg text-gray-200 max-w-[285px] mb-4">Dual-Port Fast Charger</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-base text-white bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg group"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Buy Now
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnhancedPromoBanner
