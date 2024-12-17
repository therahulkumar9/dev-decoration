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
  inclusion: string[]
  additionalOptions: string[]
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
  additionalOptions,
}: BirthdayCardProps): JSX.Element {
  const images: ImageItem[] = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
  ]

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // State to track if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000)
      return () => clearInterval(interval)
    }
  }, [nextSlide, isHovered])

  const handleMouseOver = (): void => {
    setIsHovered(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }

  return (
    <div className="p-5 sm:p-10">
      <div className="mt-10 sm:flex items-center justify-center relative top-20 p-5 w-full">
        <div className="relative w-full sm:w-1/2 mx-auto mt-4">
          <div
            className="relative h-72 sm:h-96 mx-12 group hover:-translate-y-2"
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
            className="absolute left-0 top-1/2 transform rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group sm:w-10 sm:h-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-400 group-hover:text-white sm:w-6 sm:h-6" />
          </button>
          <button
            title="next-slide"
            className="absolute right-0 top-1/2 transform rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group sm:w-10 sm:h-10"
            onClick={nextSlide}
          >
            <ChevronRight className="text-gray-400 group-hover:text-white sm:w-6 sm:h-6" />
          </button>
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-10 mx-1 ${index === currentIndex ? "bg-[#beff46] rounded-xl" : "bg-gray-300 rounded-xl"} transition-all duration-500 ease-in-out`}
              ></div>
            ))}
          </div>
        </div>
        <div className="mt-2 pl-5 p-4 sm:w-1/2">
          <h1 className="mt-2 text-2xl sm:text-3xl font-semibold">{title}</h1>
          <p className="text-sm sm:text-base mt-2">{description}</p>
          <h2 className="text-green-500 text-2xl sm:text-3xl font-bold mt-3">₹ {price}</h2>
          <div className="flex gap-5 mt-3">
            <WhatsappButton />
            <CallButton />
          </div>
        </div>
      </div>
      <div className="p-5 mt-10">
        <div className="mb-5">
          <h1 className="bg-gray-400 text-black text-xl p-3 rounded-lg border-none mb-3">Inclusion</h1>
          <ul className="list-disc pl-5 text-sm sm:text-base">
            {inclusion.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-5">
          <h1 className="bg-gray-400 text-black text-xl p-3 rounded-lg border-none mb-3">Description</h1>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div>
          <h1 className="bg-gray-400 text-black text-xl p-3 rounded-lg border-none mb-3">Additional Options</h1>
          <div dangerouslySetInnerHTML={{ __html: additionalOptions }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
