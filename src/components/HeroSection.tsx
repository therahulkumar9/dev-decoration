import React from "react"
import Link from "next/link"
// import { Spotlight } from "@/components/ui/Spotlight"

function HeroSection() {
  return (
    <div className="h-auto top-12 md:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto px-4 py-16 md:py-0">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-5xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Patna Decoration
        </h1>
        <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-normal text-neutral-300 max-w-4xl mx-auto px-4">
          Transform your special moments with our magical decoration services.
          From birthdays to anniversaries, we create unforgettable experiences
          that bring your celebrations to life.
        </p>

        <div className="mt-8 md:mt-12 lg:mt-16 flex flex-wrap justify-center space-x-4 md:space-x-8 lg:space-x-12">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="text-6xl md:text-7xl lg:text-8xl">🎂</div>
            <span className="text-lg md:text-xl lg:text-2xl text-neutral-300 mt-2">
              Birthday
            </span>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="text-6xl md:text-7xl lg:text-8xl">❤️</div>
            <span className="text-lg md:text-xl lg:text-2xl text-neutral-300 mt-2">
              Anniversary
            </span>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="text-6xl md:text-7xl lg:text-8xl">🥳</div>
            <span className="text-lg md:text-xl lg:text-2xl text-neutral-300 mt-2">
              Special Occasions
            </span>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="text-6xl md:text-7xl lg:text-8xl">🧸</div>
            <span className="text-lg md:text-xl lg:text-2xl text-neutral-300 mt-2">
              Kids Birthday
            </span>
          </div>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16">
          <Link href={"/services"}>
            <button className="border-2 border-white text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-black text-white font-bold rounded-full shadow-md hover:bg-white hover:text-black hover:shadow-lg transition-colors duration-300 ease-in-out">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
