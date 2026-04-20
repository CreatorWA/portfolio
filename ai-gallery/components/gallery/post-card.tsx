"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface PostCardProps {
  id: string
  imageUrl: string
  alt: string
  aspectRatio?: "square" | "portrait" | "landscape" | "auto"
}

export function PostCard({ imageUrl, alt, aspectRatio = "auto" }: PostCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    auto: "",
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card cursor-pointer",
        "transition-all duration-300 ease-out",
        isHovered && "ring-2 ring-primary/20"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("relative w-full overflow-hidden", aspectClasses[aspectRatio])}>
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-muted" />
        )}
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={cn(
            "object-cover transition-all duration-500 ease-out",
            isLoaded ? "opacity-100" : "opacity-0",
            isHovered ? "brightness-100 scale-105" : "brightness-90 scale-100"
          )}
          style={{
            // GPU 가속을 강제하여 지글거림 방지
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent",
          "transition-opacity duration-300",
          isHovered ? "opacity-0" : "opacity-20",
          "absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
        )}
      />
    </div>
  )
}