"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

export function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // استخدم صورة افتراضية إذا لم تتوفر صور
  const imageList =
    images.length > 0 ? images : ["/placeholder.svg?height=600&width=600"];

  return (
    <div className="grid gap-4">
      {/* الصورة الرئيسية */}
      <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
        <Image
          src={imageList[selectedImage] || "/placeholder.svg"}
          alt={`${alt} - Image ${selectedImage + 1}`}
          fill
          className="object-contain"
        />
      </div>

      {/* الصور المصغرة في الأسفل إذا كانت أكثر من صورة */}
      {imageList.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2 snap-x snap-mandatory">
          {imageList.map((image, index) => (
            <button
              key={index}
              className={cn(
                "relative flex-shrink-0 overflow-hidden rounded-md border snap-start",
                "h-16 w-16 sm:h-20 sm:w-20",
                selectedImage === index ? "border-primary" : "border-gray-200",
              )}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
