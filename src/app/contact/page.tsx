'use client'

import React, { useState } from 'react'

function DecorationAbout() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setEmail("");
            setMessage("");
        }, 3000);
    };

    return (
      <div className="min-h-screen bg-black py-12 pt-36">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-4xl md:text-7xl text-center font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-center">
            We&apos;re here to help with any questions about our decoration services.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {submitted && (
              <div className="bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-lg text-center">
                Message submitted successfully!
              </div>
            )}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-lg border focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 text-white placeholder:text-neutral-700"
              required
            />
            
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="rounded-lg border focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 text-white placeholder:text-neutral-700"
              rows={5}
              required
            ></textarea>
            
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 w-full transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
}
  
export default DecorationAbout;