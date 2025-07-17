"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperClass } from "swiper"
import { useCallback, useRef, useId } from "react"
import { ChevronLeft, ChevronRight, MessageSquareText, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import "swiper/css"
import "swiper/css/navigation"

interface Testimonial {
  review: string
  authorName: string
  authorImg: string
  authorRole: string
}

const testimonialsData: Testimonial[] = [
  {
    review: `The power bank I bought charges my phone super fast and lasts forever. I’ve never been this confident traveling with my phone!`,
    authorName: "Hannah Collins",
    authorImg: "/images/users/user-01.jpg",
    authorRole: "Travel Blogger",
  },
  {
    review: `Finally found charging cables that don’t break after a month. Excellent quality and quick charging. Highly recommended!`,
    authorName: "Ryan Patel",
    authorImg: "/images/users/user-02.jpg",
    authorRole: "Software Engineer",
  },
  {
    review: `I needed reliable memory cards for my camera. These cards have great speed and never failed me during shoots.`,
    authorName: "Aisha Thompson",
    authorImg: "/images/users/user-03.jpg",
    authorRole: "Professional Photographer",
  },
  {
    review: `Fast shipping and the chargers work perfectly with both my iPhone and Android devices. Will definitely buy again.`,
    authorName: "Lucas Meyer",
    authorImg: "/images/users/user-01.jpg",
    authorRole: "E-commerce Consultant",
  },
  {
    review: `The build quality of the cables and power banks is top-notch. Feels premium, and the prices are unbeatable!`,
    authorName: "Isabella Rossi",
    authorImg: "/images/users/user-02.jpg",
    authorRole: "Tech Reviewer",
  },
]

const GradientStar = ({ size = 20 }: { size?: number }) => {
  const gradientId = useId()
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0810b" />
          <stop offset="50%" stopColor="#f35c0d" />
          <stop offset="100%" stopColor="#f92524" />
        </linearGradient>
      </defs>
      <Star
        width={size}
        height={size}
        fill={`url(#${gradientId})`}
        stroke={`url(#${gradientId})`}
      />
    </svg>
  )
}

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="h-full flex flex-col bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
      <CardContent className="flex-grow p-0">
        <div className="flex items-center gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <GradientStar key={i} size={16} />
          ))}
        </div>
        <p className="text-gray-300 leading-relaxed mb-6">{testimonial.review}</p>
        <div className="flex items-center gap-4 ">
          <Image
            src={testimonial.authorImg || "/placeholder.svg"}
            alt={testimonial.authorName}
            width={48}
            height={48}
            className="object-cover"
          />
          <div>
            <h3 className="font-medium text-white">{testimonial.authorName}</h3>
            <p className="text-sm text-gray-300">{testimonial.authorRole}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const Testimonials = () => {
  const sliderRef = useRef<SwiperClass | null>(null)

  const handlePrev = useCallback(() => {
    sliderRef.current?.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    sliderRef.current?.slideNext()
  }, [])

  return (
    <section className="relative  overflow-hidden bg-gradient-to-br from-[#a5adaf] via-[#4f5759] to-[#a5adaf]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-6">
            <span className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] rounded-full border border-blue-500/30 backdrop-blur-sm mb-2 md:mb-0">
              <MessageSquareText className="text-white w-4 h-4" />
              <span className="text-white text-sm font-medium ml-2">Testimonials</span>
            </span>
            <h2 className="font-bold text-4xl lg:text-5xl text-white leading-tight">
              What Our {" "}
              <span className="bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] bg-clip-text text-transparent">
                Customers
              </span>{" "}
              Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            sliderRef.current = swiper
          }}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="pb-4"
        >
          {testimonialsData.map((item, key) => (
            <SwiperSlide key={key}>
              <SingleItem testimonial={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
