
import type React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutUs1 from "@/components/about-us1";
import About from "@/components/about";
import Hero1 from "@/components/Home/Hero/index";
import IndexCategory from "@/components/Home/Categories/index-category";

import NewArribals from "@/components/Home/NewArrivals/index";
import PromoBanner from "@/components/Home/PromoBanner/index";
import Testimonials from "@/components/Home/Testimonials/index";
import Countdown from "@/components/Home/Countdown/index";
import Newsletter from "@/components/Common/Newsletter";


import CatalogCard from "@/components/catalog-card";


import Hero from "@/components/hero";
import prisma from "@/lib/prisma";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markolas",
 
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const products = await prisma.product.findMany({
    select: { name: true, name_zh: true, id: true },
  });

  const categories = await prisma.category.findMany({
    select: { name: true, name_zh: true, id: true },
    where: {
      OR: [
        { name: { contains: "Power Bank" } },
        { name: { contains: "Charging Cable" } },
        { name: { contains: "Adapters" } },
     

        //   { name: { contains: "Copper" } },
      ],
      // in: ["compressors", "Gas", "Copper", "Insulation"],
      // contains: [""]
    },
  });

  const catalogs = await prisma.catalog.findMany();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body >
        <NextIntlClientProvider>
          <div className="flex min-h-screen flex-col">
            <Header products={products} categories={categories} />
            <Hero1 />
            
            <Hero />
            
         <PromoBanner />
            <main className="flex-1 bg-gradient-to-br from-[#a5adaf] via-[#a5adaf] to-[#a5adaf]">
              <section className="overflow-hidden pb-16.5 ">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 ">
                  <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="">
                      <div className="swiper testimonial-carousel common-carousel p-5">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Newsletter />
            
            
               <Testimonials />
                  <Countdown />
          
            <div >
            <CatalogCard catalogs={catalogs} />
            </div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
