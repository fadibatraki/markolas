"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Shield, Truck, Headphones } from "lucide-react"
const GradientIcon = ({ Icon }: { Icon: any }) => (
  <svg width={40} height={40} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0810b" />
        <stop offset="50%" stopColor="#f35c0d" />
        <stop offset="100%" stopColor="#f92524" />
      </linearGradient>
    </defs>
    <Icon width={20} height={20} stroke="url(#grad)" />
  </svg>
);

const featuredProducts = [
  {
    id: 1,
    name: "Markolas Lightning Charging Cable",
    image: "/images/hero/4.png",
    rating: 4.8,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Markolas 10+ Power Bank",
    image: "/images/hero/3.png",
    rating: 4.9,
    badge: "New",
  },
  {
    id: 3,
    name: "Markolas Dual-Port Fast Charger",
    image: "/images/hero/11.png",
    rating: 4.7,
    badge: "Sale",
  },
]

const categories = [
  { name: "Free Shipping", icon: Truck, },
  { name: "2 Year Warranty", icon: Shield, },
  { name: "4.9/5 Rating", icon: Star, },
  { name: "24/7 Support", icon: Headphones, },

]

export default function MobileHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#2e3334] via-[#4f5759] to-[#a5adaf]">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] rounded-full border border-blue-500/30 backdrop-blur-sm">
                <span className="text-white text-sm font-medium">🚀 New Collection Available</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Premium
                <span className="block bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] bg-clip-text text-transparent">
                  Mobile
                </span>
                <span className="block">Accessories</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Discover our curated collection of premium mobile accessories. From protective cases to wireless
                chargers - everything your device needs.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-white/20 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-[#f0810b] transition-all duration-300 hover:scale-105">
                View Categories
              </button>
            </div>
            {/* Trust Indicators */}



          </div>
          {/* Right Content - Product Showcase */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Main Product Display */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] text-white text-xs font-bold rounded-full">
                    {featuredProducts[currentSlide].badge}
                  </span>
                </div>
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-64 h-64 group">
                    <Image
                      src={featuredProducts[currentSlide].image || "/placeholder.svg"}
                      alt={featuredProducts[currentSlide].name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">{featuredProducts[currentSlide].name}</h3>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">({featuredProducts[currentSlide].rating})</span>
                    </div>
                  
                    <div className="w-full py-3 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] text-white font-semibold rounded-xl  hover:[#f0810b] hover:scale-105">


                      <button >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] backdrop-blur-sm rounded-full hover:bg-purple-900/60 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] backdrop-blur-sm rounded-full hover:bg-purple-900/60 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] scale-125" : "bg-white/30"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Categories Section */}
        <div
          className={`mt-0 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, text: "Free Shipping" },
              { icon: Shield, text: "2 Year Warranty" },
              { icon: Star, text: "4.9/5 Rating" },
              { icon: Headphones, text: "24/7 Support" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <GradientIcon Icon={item.icon} />
                <h3 className="text-lg font-semibold text-white">{item.text}</h3>

                <div className="absolute inset-0 bg-gradient-to-br from-[#f0810b]/30 via-[#f35c0d]/30 to-[#f92524]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>





        </div>
      </div>
    </section>
  )
}
