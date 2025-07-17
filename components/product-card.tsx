// components/ProductCard.tsx
import Image from "next/image";
import { Product } from "@/lib/types";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";



interface ProductCardProps {
  product: Product
}

interface ProductCardProps {
  product: Product;
}

export async function ProductCard({ product }: ProductCardProps) {
  const locale = await getLocale();
  const t = await getTranslations("Product");

  // Default image if no images are available
  const imageUrl = product.images?.[0].url || "/placeholder-image.jpg";

  return (
    <section className="overflow-hidden pt-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

        <Card className="overflow-hidden border-0 bg-gradient-to-br from-[#1a1e20] via-[#2e3334] to-[#3a4042] shadow-xl rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <div className="group p-4">
            <div className="relative overflow-hidden flex items-center justify-center rounded-lg  min-h-[250px] mb-2">
              <Link href={`/products/${product.id}`}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#f0810b]/40 to-[#f92524]/40 rounded-3xl blur-3xl -rotate-42"></div>
                <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-tr from-[#f92524]/40 to-transparent rounded-3xl blur-2xl rotate-6"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#f0810b]/20 to-[#f92524]/20 rounded-3xl blur-xl"></div>

                <Image
                  src={imageUrl}
                  alt={
                    locale === "zh" && product.name_zh
                      ? product.name_zh
                      : product.name
                  }
                  fill
                  className="object-cover transition-all hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </Link>
              {product.featured && (
                <Badge className="absolute top-3 right-3 z-10 bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] text-white">{t("featured")}</Badge>
              )}
            </div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={14}
                  height={14}
                />
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={14}
                  height={14}
                />
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={14}
                  height={14}
                />
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={14}
                  height={14}
                />
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={14}
                  height={14}
                />
              </div>
            </div>
            <CardContent className="mt-0 p-0">
              <div className="flex items-center justify-between pb-2 pt-2">
                <Link href={`/products/${product.id}`} className="hover:underline">
                  <h3 className="font-semibold text-white text-lg">
                    {locale === "zh" && product.name_zh
                      ? product.name_zh
                      : product.name}
                  </h3>
                </Link>

                <Link
                  href={`/category/${product.category.id}`}
                  className="text-sm text-white hover:underline"
                >
                  {locale === "zh" && product.category.name_zh
                    ? product.category.name_zh
                    : product.category.name}
                </Link>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="#"
                  className="w-full py-3 inline-flex items-center justify-center gap-2 font-semibold text-base text-white bg-gradient-to-br from-[#f0810b] via-[#f35c0d] to-[#f92524] py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg group text-center"
                >
                  Buy Now
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


            </CardContent>

          </div>
        </Card>
      </div>
    </section>
  );
}
