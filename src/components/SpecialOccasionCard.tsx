"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface SpecificOccasionCardProps {
  title: string
  image: string
  price: number
  id: number
}

const SpecificOccasionCard: React.FC<SpecificOccasionCardProps> = ({
  title,
  image,
  price,
}) => {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto mt-8 rounded-lg border-2 border-green-500 shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Responsive Image Container */}
      <div
        className="relative w-full aspect-video overflow-hidden 
        rounded-t-lg transition-transform duration-300 
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
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Responsive Content */}
      <div
        className="p-3 sm:p-4 md:p-5 space-y-2 
        bg-gradient-to-br from-white to-gray-50"
      >
        <h2
          className="text-base sm:text-lg md:text-xl 
          lg:text-2xl font-bold text-gray-800 truncate"
        >
          {title}
        </h2>
        <p
          className="text-green-600 font-semibold 
          text-sm sm:text-base md:text-lg"
        >
          ₹ {price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  )
}

export default SpecificOccasionCard
