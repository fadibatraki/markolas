"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl";
import "../app/tailwind.css";
export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer
      id="footer"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-[#1a1e20] via-[#2e3334] to-[#3a4042] pt-20 lg:pt-[100px]"
    >
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="-mx-4 flex flex-wrap">
          {/* Company Info */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a href="/" className="mb-6 inline-block">
                <h4 className="mb-0 text-3xl font-extrabold bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] bg-clip-text text-transparent">
                  Markolas
                </h4>
              </a>
              <p className="mb-8 max-w-[290px] text-base text-gray-300 leading-relaxed">
                {t("subtitle")}
                </p>
            </div>
          </div>

          {/* Address & Socials */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-0 text-3xl font-extrabold bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] bg-clip-text text-transparent mb-6">{t("address")}</h4>
              <ul>
                <li>
                  <p className="mb-8 max-w-[290px] text-base text-gray-300 leading-relaxed">{t("address1")}</p>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className=" text-white flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-400 hover:bg-gradient-to-br hover:from-[#f0810b] hover:via-[#f35c0d] hover:to-[#f92524] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-400 hover:bg-gradient-to-br hover:from-[#f0810b] hover:via-[#f35c0d] hover:to-[#f92524] hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-400 hover:bg-gradient-to-br hover:from-[#f0810b] hover:via-[#f35c0d] hover:to-[#f92524] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-400 hover:bg-gradient-to-br hover:from-[#f0810b] hover:via-[#f35c0d] hover:to-[#f92524] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-4 w-full">
              <h4 className="mb-0 text-3xl font-extrabold bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] bg-clip-text text-transparent mb-6">{t("info")}</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:008675525894470" className="group flex items-center gap-4">
                  <span className="text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                    Tel: +86-755-25894470
                  </span>
                </a>
                <a href="mailto:info@markolas.com" className="group flex items-center gap-4">
                  <span className="text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                    Email: info@markolas.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-4 w-full">
              <h4 className="mb-0 text-3xl font-extrabold bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] bg-clip-text text-transparent mb-6">
                {t("latestBlog")}
              </h4>
              <div className="flex flex-col gap-3">
                <div
                  
                  className="group flex items-center gap-[15px]"
                >
                  <div className="overflow-hidden rounded">
                    <img
                      className="w-15 h-20"
                      src="/images/hero/1.png"
                      alt="blog"
                    />
                  </div>
                  <div className="overflow-hidden rounded">
                    <img
                      className="w-15 h-20"
                        src="/images/hero/2.png"
                      alt="blog"
                    />
                  </div>
                  <div className="overflow-hidden rounded">
                    <img
                      className="w-15 h-20"
                         src="/images/hero/11.png"
                      alt="blog"
                    />
                  </div>
                </div>

<div
                  
                  className="group flex items-center gap-[15px]"
                >
                  <div className="overflow-hidden rounded">
                    <img
                      className="w-15 h-20"
                      src="/images/hero/12.png"
                      alt="blog"
                    />
                  </div>
                  <div className="overflow-hidden rounded">
                    <img
                      className="w-15 h-20"
                        src="/images/hero/6.png"
                      alt="blog"
                    />
                  </div>
                  <div className="overflow-hidden rounded">
                    <img
                      className="w-15 h-20"
                         src="/images/hero/5.png"
                      alt="blog"
                    />
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-white/10 py-8 lg:mt-[60px]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 md:w-1/2">
              <div className="my-1 flex justify-center md:justify-start">
                <p className="text-base text-gray-400">
                  Designed and Developed by -
                  <a
                    href="https://t.me/Fadibatraki"
                    rel="noreferrer nofollow noopner"
                    target="_blank"
                    className="text-[#f0810b] hover:underline ml-1"
                  >
                    F.Company
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-gray-400">
                  &copy; {new Date().getFullYear()} Markolas. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 -rotate-30"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl rotate-15"></div>
      </div>
    </footer>
  )
}
