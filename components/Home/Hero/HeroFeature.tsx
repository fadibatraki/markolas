"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A] text-white">
      {/* Background Gradient and Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#4C1D95] to-[#0F172A] opacity-90"></div>
        {/* Subtle background pattern/texture */}
        <div className="absolute inset-0 bg-[url('/images/hero/abstract-pattern.svg')] bg-cover bg-center opacity-5"></div>

        {/* Dynamic, glowing shapes using the specified colors */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#f0810b]/15 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#a5adb0]/15 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#fff]/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Elevate Your Mobile Experience with{" "}
            <span className="bg-gradient-to-r from-[#f0810b] to-orange-400 bg-clip-text text-transparent">
              Premium Accessories
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#a5adb0] max-w-3xl mx-auto">
            Discover a curated collection of high-quality cases, chargers, audio gear, and more, designed to enhance
            your device's style and functionality.
          </p>
          <div className="flex justify-center pt-4">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 ease-out bg-[#f0810b] hover:scale-105 hover:shadow-lg hover:shadow-[#f0810b]/40">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-orange-600 to-orange-700 group-hover:translate-x-0 ease"></span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Shop All Accessories
              </span>
              <span className="relative">
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Placeholder Image - centered below text for visual balance */}
        <div className="mt-16 relative w-full max-w-4xl mx-auto h-80 sm:h-96 lg:h-[500px]">
          <Image
            src="/placeholder.svg?height=500&width=800"
            alt="Collection of mobile accessories"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
