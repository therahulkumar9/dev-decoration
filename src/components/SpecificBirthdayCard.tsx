"use client"
import Image from "next/image"
import WhatsappButton from "./WhatsappButton"
import CallButton from "./CallButton"
import Footer from "./Footer"

import { useState, useEffect, useCallback, JSX } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Type definition for props
interface BirthdayCardProps {
  title: string
  image1: string
  image2: string
  image3: string
  price: number
  id: number
  description: string
  inclusion: string
}

// Type definition for image objects
interface ImageItem {
  src: string
}

export default function BirthdayCard({
  title,
  image1,
  image2,
  image3,
  price,
  description,
  inclusion,
}: BirthdayCardProps): JSX.Element {
  const images: ImageItem[] = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
  ]

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // State to track if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false)

  // Wrap the nextSlide function with useCallback to avoid missing dependency in useEffect
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000)

      // Cleanup the interval on component unmount
      return () => clearInterval(interval)
    }
  }, [nextSlide, isHovered])  // Depend on nextSlide and isHovered

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true)
  }

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }

  return (
    <div>
      <div className="mt-10 sm:flex items-center justify-center relative top-20 p-10 w-full">
        <div className="relative w-1/2 mx-auto mt-4">
          <div
            className="relative h-96 mx-12 group hover:-translate-y-2"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={images[currentIndex].src}
              alt={`Slider Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
            />
          </div>
          <button
            title="previous-slide"
            className="absolute left-0 top-1/2 transform rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-400 group-hover:text-white" />
          </button>
          <button
            title="next-slide"
            className="absolute right-0 top-1/2 transform rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
            onClick={nextSlide}
          >
            <ChevronRight className="text-gray-400 group-hover:text-white" />
          </button>
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-10 mx-1 ${
                  index === currentIndex
                    ? "bg-[#beff46] rounded-xl"
                    : "bg-gray-300 rounded-xl"
                } transition-all duration-500 ease-in-out`}
              ></div>
            ))}
          </div>
        </div>
        <div className="mt-2 pl-5 p-4">
          <h1 className="mt-2 font-semibold">{title}</h1>
          <p>{description}</p>
          <h2 className="text-green-500 text-3xl font-bold mb-3">₹ {price}</h2>
          <div className="flex gap-5">
            <WhatsappButton />
            <CallButton />
          </div>
        </div>
      </div>
      <div className="p-10 mt-20">
        <div>
          <h1 className="w-full bg-gray-400 text-black text-xl p-3 rounded-lg border border-none mb-3">
            Inclusion
          </h1>
          <div dangerouslySetInnerHTML={{ __html: inclusion }} />
        </div>
        <div>
          <h1 className="w-full bg-gray-400 text-black text-xl p-3 rounded-lg border border-none mb-3 mt-3">
            Description
          </h1>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
