"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "./Footer"

interface BirthdayCardProps {
  title: string
  image: string
  price: number
  id?: number
  description?: string
  backgroundColor?: string
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({
  title,
  image,
  price,
  description = "A beautiful gift to celebrate the special day",
  backgroundColor = "bg-white",
}) => {
  return (
    <motion.div
      className={`w-full rounded-lg max-w-sm mx-auto group ${backgroundColor}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div
        className="mt-8 border-2 border-green-500 relative rounded-lg overflow-hidden shadow-lg 
        transform transition-all duration-300 
        hover:scale-[1.02] hover:shadow-xl
        sm:p-2 md:p-3 lg:p-4"
      >
        {/* Responsive Image Container */}
        <div
          className="relative w-full aspect-video 
          rounded-t-2xl overflow-hidden 
          transition-all duration-300 
          group-hover:brightness-90"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 
                   (max-width: 768px) 50vw, 
                   (max-width: 1024px) 33vw, 
                   25vw"
            className="object-cover transition-transform duration-300 
              group-hover:scale-105"
            priority
          />
        </div>

        {/* Responsive Content Container */}
        <div
          className="p-3 sm:p-4 md:p-5 space-y-2 
          bg-gradient-to-br from-white to-gray-50"
        >
          <div className="flex justify-between items-center">
            <h2
              className="text-base sm:text-lg md:text-xl 
              lg:text-2xl font-bold text-gray-800 
              truncate max-w-[70%]"
            >
              {title}
            </h2>
            <span
              className="text-green-600 font-semibold 
              text-sm sm:text-base md:text-lg"
            >
              ₹ {price.toLocaleString()}
            </span>
          </div>

          <p
            className="text-xs sm:text-sm md:text-base 
            text-gray-500 truncate"
          >
            {description}
          </p>
        </div>
      </div>
      
    </motion.div>
  )
}

export default BirthdayCard
