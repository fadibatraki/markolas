import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import prisma from "@/lib/prisma";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await prisma.product.findMany({
    where: { featured: true },
    include: { category: true, images: true },
  });

  const t = await getTranslations("HomePage");

  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="mb-0 text-5xl font-extrabold text-white bg-clip-text text-transparent">{t("featuredProducts")}</h2>
         <div className="flex justify-center mt-4">
                <a
                  href="/products"
                  className="w-full py-3 inline-flex items-center justify-center gap-2 font-semibold text-base text-white bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg group text-center"
                >
                  View All
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
