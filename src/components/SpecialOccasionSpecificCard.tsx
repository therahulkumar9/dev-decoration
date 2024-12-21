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
    <div className="p-2 sm:p-10">
      <div className="mt-10 sm:flex items-center justify-center relative top-20 w-full">
        <div className="relative w-full sm:w-1/2 mx-auto mt-4">
          <div
            className="relative mx-12 group hover:-translate-y-2 transition-all duration-500 ease-in-out"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image for desktop/laptop, using objectFit="cover" */}
            <Image
              src={images[currentIndex].src}
              alt={`Slider Image ${currentIndex + 1}`}
              layout="intrinsic"
              width={500}
              height={300}
              objectFit="contain" // Maintain the original image aspect ratio for mobile
              className="rounded-xl w-full sm:w-full md:h-[400px] lg:h-[500px] object-cover" // Adjust height for larger screens
            />
          </div>

          {/* Previous and Next Buttons */}
          <button
            title="previous-slide"
            className="absolute left-5 top-1/2 hidden transform -translate-y-1/2 bg-[#111927] text-white p-2 rounded-full shadow-lg hover:bg-[#1a222f] transition duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-400 sm:w-6 sm:h-6" />
          </button>
          <button
            title="next-slide"
            className="absolute right-5 top-1/2 transform hidden -translate-y-1/2 bg-[#111927] text-white p-2 rounded-full shadow-lg hover:bg-[#1a222f] transition duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="text-gray-400 sm:w-6 sm:h-6" />
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-10 ${index === currentIndex ? "bg-[#beff46] hidden" : "bg-gray-300 hidden"} rounded-xl transition-all duration-500`}
              ></div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="sm:w-1/2 pl-5 p-4 mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
          <p className="text-sm sm:text-base mt-2">{description}</p>
          <h2 className="text-green-500 text-2xl sm:text-3xl font-bold mt-3">₹ {price}</h2>
          <div className="flex gap-5 mt-3">
            <WhatsappButton />
            <CallButton />
          </div>
        </div>
      </div>

      {/* Inclusion and Additional Options */}
      <div className="p-5 sm:mt-40 mt-16">
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
