import React from 'react'

import { useNavigate } from "react-router-dom"


const ErrorPage = () => {

    const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Centered content wrapper — max-width 1550px */}
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-1">

        <main
          className="flex flex-col items-center justify-center flex-1 py-10 sm:py-15"
          role="main"
        >

          {/* Heading section */}
          <header className="text-center mb-8 sm:mb-7">
            <h1 className="font-Schotis-Bold text-2xl sm:text-3xl md:text-3xl tracking-wide text-gray-900">
              We're losing our cool.
            </h1>
            <p className="font-Schotis-Bold text-2xl sm:text-3xl md:text-3xl tracking-wide text-sharp-pink mt-1">
              Let's get you back to the freezer!
            </p>
          </header>


            <section aria-label="Return to home">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 font-Mazzard-Regular text-white text-sm bg-sharp-pink hover:opacity-95 px-6 py-3 rounded-full transition-all cursor-pointer"
            >
              BACK TO PARLOR!
            </button>
          </section>

          {/* Illustration */}
          <figure className="w-full flex items-center justify-center mb-10 sm:mb-0 translate-y-12 xl:translate-y-8">
            <img
              src="error.png"
              alt="Melting ice cream illustration showing an error state"
              className="w-60 h-60 sm:w-80 sm:h-80 md:w-95 md:h-95 object-contain"
            />
          </figure>

          {/* CTA */}
        

        </main>

      </div>
    </div>
  )
}

export default ErrorPage