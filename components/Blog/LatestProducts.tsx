import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Product {
  imgs?: {
    thumbnails?: string[];
  };
  title: string;
  price: number;
}

interface LatestProductsProps {
  products: Product[];
}
const LatestProducts = ({ products }: LatestProductsProps) => {
  return (
    <div className="shadow-1 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">Latest Products</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          {/* <!-- product item --> */}
          {products.slice(0, 3).map((product, key) => (
            <div className="flex items-center gap-6" key={key}>
            <div className="flex items-center justify-center rounded-[10px] bg-gray-3 max-w-[90px] w-full h-22.5">
                {product.imgs?.thumbnails?.[0] ? (
                  <Image
                    src={product.imgs.thumbnails[0]}
                    alt={product.title}
                    width={74}
                    height={74}
                  />
                ) : (
                  <div className="w-[74px] h-[74px] bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-medium text-dark mb-1 ease-out duration-200 hover:text-blue">
                  <Link href="/shop-details"> {product.title} </Link>
                </h3>
                <p className="text-custom-sm">Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
