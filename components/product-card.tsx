// components/ProductCard.tsx
import Image from "next/image";
import { Product } from "@/lib/types";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";

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

        <Card className="overflow-hidden border-0">
          <div className="group">
            <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
              <Link href={`/products/${product.id}`}>
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
                <Badge className="absolute top-3 right-3 z-10">{t("featured")}</Badge>
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
            <CardContent className=" mt-0 p-0">
              <div className="flex items-center justify-between pb-2 pt-2">
                <Link href={`/products/${product.id}`} className="hover:underline">
                  <h3 className="font-semibold">
                    {locale === "zh" && product.name_zh
                      ? product.name_zh
                      : product.name}
                  </h3>
                </Link>
              </div>
              <Link
                href={`/category/${product.category.id}`}
                className="mb-1 text-sm text-muted-foreground"
              >
                {locale === "zh" && product.category.name_zh
                  ? product.category.name_zh
                  : product.category.name}
              </Link>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
