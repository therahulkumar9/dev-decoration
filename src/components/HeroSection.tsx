import React from "react"

function HeroSection() {
  return (
    <div className="relative w-full min-h-[100%]  flex flex-col items-center justify-center overflow-hidden px-4 py-16 md:py-0 bg-black">
      <div className="relative z-10 w-full sm:mt-0 mt-[-66px] max-w-7xl mx-auto text-center px-4">
        <h1 className="text-4xl mt-32 sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-4">
          Dev Decoration
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-neutral-300 max-w-4xl mx-auto mb-8 px-4">
          Transform your special moments with our magical decoration services.
          From birthdays to anniversaries, we create unforgettable experiences.
        </p>

        <div className="grid sm:mb-0 mb-[-30px] grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {[
            { emoji: "🎂", text: "Birthday" },
            { emoji: "❤️", text: "Anniversary" },
            { emoji: "🥳", text: "Special Occasions" },
            { emoji: "🧸", text: "Kids Birthday" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center p-2 sm:p-4"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
                {item.emoji}
              </div>
              <span className="text-sm sm:text-base md:text-lg text-neutral-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection