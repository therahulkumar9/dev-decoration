'use client'

import React from 'react'

function AboutUs() {
    return (
      <div className="min-h-screen  bg-black text-white py-16">
        <div className="max-w-6xl mt-20 mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Dev Decoration
            </h1>
            <p className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl">
              We transform ordinary moments into extraordinary memories. 
              Every celebration deserves a touch of magic, and we are here to make that happen.
            </p>
          </div>

          {/* Our Story Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-teal-400">Our Story</h2>
              <p className="text-neutral-300 space-y-4 leading-relaxed">
                Founded in 2024, Dev Decoration began with a simple mission: 
                to create unforgettable experiences that tell a story. What started 
                as a small passion project has grown into a premier decoration service 
                trusted by hundreds of clients.
              </p>
            </div>
            <div className="bg-neutral-900 rounded-lg p-6 flex items-center justify-center">
              <div className="text-6xl">🎉</div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-teal-400">Our Mission</h2>
            <p className="text-neutral-300 max-w-4xl mx-auto text-lg">
              We believe that every celebration is a unique story waiting to be told. 
              Our mission is to create personalized, breathtaking decorations that 
              capture the essence of your special moment and leave lasting memories.
            </p>
          </div>
        </div>
      </div>
    );
}
  
export default AboutUs;