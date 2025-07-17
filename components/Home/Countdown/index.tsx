"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const CounDown = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Set your deadline here (e.g., "July 31, 2025 23:59:59")
  const deadline = "July 31, 2025 23:59:59"

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000) // Corrected getTime call
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="overflow-hidden py-20 bg-gradient-to-br from-[#4f5759] via-[#a5adaf] to-[#a5adaf]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-10 rounded-3xl bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] p-4 sm:p-7 lg:p-10 xl:p-15 shadow-xl border border-white/20 backdrop-blur-sm">
          <div className="max-w-[422px] w-full">
            <span className="block font-medium text-white text-lg mb-2.5">Don’t Miss!!</span>
            <h2 className="font-bold text-white text-3xl lg:text-4xl xl:text-5xl mb-3 leading-tight">
              Enhance Your Charging Experience
            </h2>
           {/* <!-- Countdown timer --> */}
            <div className="flex flex-wrap gap-6 mt-6">
              {/* <!-- timer day --> */}
              <div>
                <span className="min-w-[64px] h-14 font-semibold text-xl lg:text-3xl text-[#f0810b] rounded-lg flex items-center justify-center bg-white shadow-lg px-4 mb-2">
                  {days < 10 ? "0" + days : days}
                </span>
                <span className="block text-sm text-white text-center">Days</span>
              </div>
              {/* <!-- timer hours --> */}
              <div>
                <span className="min-w-[64px] h-14 font-semibold text-xl lg:text-3xl text-[#f0810b] rounded-lg flex items-center justify-center bg-white shadow-lg px-4 mb-2">
                  {hours < 10 ? "0" + hours : hours}
                </span>
                <span className="block text-sm text-white text-center">Hours</span>
              </div>
              {/* <!-- timer minutes --> */}
              <div>
                <span className="min-w-[64px] h-14 font-semibold text-xl lg:text-3xl text-[#f0810b] rounded-lg flex items-center justify-center bg-white shadow-lg px-4 mb-2">
                  {minutes < 10 ? "0" + minutes : minutes}
                </span>
                <span className="block text-sm text-white text-center">Minutes</span>
              </div>
              {/* <!-- timer seconds --> */}
              <div>
                <span className="min-w-[64px] h-14 font-semibold text-xl lg:text-3xl text-[#f0810b] rounded-lg flex items-center justify-center bg-white shadow-lg px-4 mb-2">
                  {seconds < 10 ? "0" + seconds : seconds}
                </span>
                <span className="block text-sm text-white text-center">Seconds</span>
              </div>
            </div>
            {/* <!-- Countdown timer ends --> */}
            <a
              href="#"
              className="inline-flex font-medium text-base text-[#f0810b] bg-white backdrop-blur-sm py-3 px-9 rounded-xl ease-out duration-200 hover:bg-white/30 mt-7"
            >
              Check it Out!
            </a>
          </div>
          {/* <!-- bg shapes --> */}
          <Image
            src="/images/countdown/countdown-bg.png"
            alt="bg shapes"
            className="hidden sm:block absolute right-0 bottom-0 -z-10 opacity-30"
            width={737}
            height={482}
          />
          <Image
            src="/images/hero/13.png"
            alt="product"
            className="hidden lg:block absolute right-4 xl:right-33 bottom-4 xl:bottom-10 -z-10"
            width={411}
            height={376}
          />
        </div>
      </div>
    </section>
  )
}

export default CounDown
