import React from 'react'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import filter from './assets/filter.svg'
import { Link } from 'react-router-dom'


export default function Article() {
  return (
    <div>

      {/* All parent div */}
      <div className='w-full flex flex-col md:flex-row gap-4'>




        {/* parent div1 */}
        <div className="w-full md:w-1/4 pl-4 sm:pl-6 lg:pl-8 mt-6">
          {/* Header */}
          <div className="w-full border-b border-[#3f3f46] flex items-center py-4 px-6 text-left text-lg text-white font-manrope">
            <div className="flex items-center gap-3 w-full max-w-xs">
              <img className="w-5 h-5" alt="" src={filter} />
              <div className="font-medium">Filters</div>
            </div>
          </div>

          {/* Filter items */}
          <div className="w-full flex flex-col gap-4 py-2 px-4 text-left text-white font-manrope bg-[#27272a]">
            <div className="flex justify-between items-center">
              <div className="font-medium text-base">General Surgery</div>
              {/* Dropdown instead of image */}
              <select className="bg-[#2a2a2a] text-white text-sm rounded-md px-2 py-1 focus:outline-none">
                <option>All</option>
                <option>Hepatobiliary</option>
                <option>Hernia</option>
                <option>Breast</option>
                <option>Endocrine</option>
                <option>Colorectal</option>
                <option>Head and Neck</option>
                <option>Anesthesia</option>
                <option>Pediatric Surgery</option>
                <option>Skin & Soft Tissue</option>
                <option>Surgical Critical Care</option>
                <option>Thoracic</option>
                <option>Transplantation</option>
                <option>Trauma</option>
                <option>Vascular</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-[#a1a1aa]">
              <div className="w-1 bg- rounded-sm" />
              {[
                "All", "Hepatobiliary", "Hernia", "Breast", "Endocrine", "Colorectal",
                "Head and Neck", "Anesthesia", "Pediatric Surgery", "Skin & Soft Tissue",
                "Surgical Critical Care", "Thoracic", "Transplantation", "Trauma", "Vascular"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center py-1 px-2 rounded-md min-w-[6rem] sm:min-w-[8rem] md:min-w-[10rem] lg:min-w-[12rem] flex-1"
                >
                  <div className="font-light text-[0.875rem] sm:text-sm md:text-base">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>








        {/* section2 */}

        <div className='w-full md:flex-1'>


          <div className="w-full relative flex flex-col items-start gap-8 text-left text-[#fafafa] font-manrope px-4 sm:px-6 lg:px-8 mt-8">
            {/* Header */}
            <div className="w-full flex items-center gap-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">Article Index</div>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[2px]"></div>
            </div>

            {/* Content */}
            <div className="w-full flex flex-col gap-6 text-base sm:text-lg md:text-xl">
              <div className="leading-relaxed">
                <span className="font-medium">{`JOMI is a peer-reviewed surgical video journal with over `}</span>
                <span className="text-[#fff] font-semibold underline">200 articles</span>
                <span className="font-medium">{` spanning a wide range of surgical subspecialties. Scrub into the OR from anywhere.`}</span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to='/pricing' className="w-full sm:w-auto rounded bg-gradient-to-r from-indigo-600 to-blue-400 py-3 px-5 text-center font-medium text-[#fff] hover:text-[#000] transition">
                  Subscribe to JOMI
                </Link>
                <Link to='form' className="w-full sm:w-auto rounded border border-[rgba(255,255,255,0.25)] bg-[#18181b] py-3 px-5 text-center font-medium text-[#fafafa] hover:bg-[#27272a] transition">
                  Get Institutional Access
                </Link>
              </div>
            </div>
          </div>




          {/* parent Container */}


          <div className='bg-[#27272a]'>

            <div className="w-full flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-start px-4 sm:px-6 lg:px-8 mt-8">

              {/* Free Cases Header */}
              <div className="w-full flex items-center gap-4 sm:gap-6 text-left text-lg sm:text-xl md:text-2xl text-gray-100 font-manrope">
                <div className="relative leading-tight font-semibold">Free Cases</div>
                <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[2px]"></div>
              </div>

              {/* card1 */}
              <div className="flex-1 w-full sm:w-[50%] md:w-[30%] max-w-sm relative rounded-lg border border-gray-700 overflow-hidden flex flex-col p-2 gap-1 text-left text-gray-100 font-manrope">
                {/* Image with Play Button */}
                <a href='https://youtu.be/PzlYPvFw54k?si=dVnwT5VUzqgFpx5A' target="_blank"  className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image1}
                    alt="Laparoscopic Cholecystectomy"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="w-full flex flex-col justify-between mt-1 gap-1">
                  <b className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6">
                    Laparoscopic Cholecystectomy
                  </b>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <div className="leading-4 sm:leading-5">Hepatobiliary</div>
                    <div className="leading-4 sm:leading-5 text-right">24:10</div>
                  </div>
                </div>
              </div>

              {/* card2 */}
              <div className="flex-1 w-full sm:w-[50%] md:w-[30%] max-w-sm relative rounded-lg border border-gray-700 overflow-hidden flex flex-col p-2 gap-1 text-left text-gray-100 font-manrope">
                {/* Image with Play Button */}
                <a href='https://youtu.be/FPYHPZvBLBM?si=MWGfZ6JfeRNmVw5f' target="_blank" className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image2}
                    alt="Distal Gastrectomy"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="w-full flex flex-col justify-between mt-1 gap-1">
                  <b className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6">
                    Distal Gastrectomy
                  </b>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <div className="leading-4 sm:leading-5">Anesthesia</div>
                    <div className="leading-4 sm:leading-5 text-right">24:10</div>
                  </div>
                </div>
              </div>

              {/* card3 */}
              <div className="flex-1 w-full sm:w-[50%] md:w-[30%] max-w-sm relative rounded-lg border border-gray-700 overflow-hidden flex flex-col p-2 gap-1 text-left text-gray-100 font-manrope">
                {/* Image with Play Button */}
                <a href='https://youtu.be/WlDj-Cr9tBw?si=6nHS1ZNFyQWXUJHZ' target="_blank" className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image3}
                    alt="Arteriovenous Fistula Creation"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="w-full flex flex-col justify-between mt-1 gap-1">
                  <b className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6">
                    Arteriovenous Fistula Creation
                  </b>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <div className="leading-4 sm:leading-5">Vascular</div>
                    <div className="leading-4 sm:leading-5 text-right">24:10</div>
                  </div>
                </div>
              </div>

              {/* card4 */}
              <div className="flex-1 w-full sm:w-[50%] md:w-[30%] max-w-sm relative rounded-lg border border-gray-700 overflow-hidden flex flex-col p-2 gap-1 text-left text-gray-100 font-manrope">
                {/* Image with Play Button */}
                <a href='https://youtu.be/orUO-M9Z4tU?si=rtUS7wmx6B3tursM' target="_blank" className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image4}
                    alt="Epidural at T9 - T10"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="w-full flex flex-col justify-between mt-1 gap-1">
                  <b className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6">
                    Epidural at T9 - T10
                  </b>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <div className="leading-4 sm:leading-5">Anesthesia</div>
                    <div className="leading-4 sm:leading-5 text-right">24:10</div>
                  </div>
                </div>
              </div>

            </div>








            <div className="w-full flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-start px-4 sm:px-6 lg:px-8 mt-8">

              <div className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-manrope text-gray-100 ">
                General Surgery
              </div>

              <div className="w-full text-xs sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-6 md:leading-7 text-gray-400 font-manrope text-left">
                Our physician editorial staff has carefully selected a list of procedures based on those surgical cases deemed by the Surgical Council on Resident Education (SCORE) as most relevant to surgical resident education, as well as surgical targets published for the various general surgery subspecialties.
              </div>





              {/* card1 */}
              <div className="flex-1 w-full sm:w-[50%] md:w-[30%] max-w-sm relative rounded-lg border border-gray-700 overflow-hidden flex flex-col p-2 gap-1 text-left text-gray-100 font-manrope">
                {/* Image with Play Button */}
                <a href='https://youtu.be/PzlYPvFw54k?si=dVnwT5VUzqgFpx5A' target="_blank" className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image1}
                    alt="Laparoscopic Cholecystectomy"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="w-full flex flex-col justify-between mt-1 gap-1">
                  <b className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6">
                    Laparoscopic Cholecystectomy
                  </b>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <div className="leading-4 sm:leading-5">Hepatobiliary</div>
                    <div className="leading-4 sm:leading-5 text-right">24:10</div>
                  </div>
                </div>
              </div>

              {/* card2 */}
              <div className="flex-1 w-full sm:w-[50%] md:w-[30%] max-w-sm relative rounded-lg border border-gray-700 overflow-hidden flex flex-col p-2 gap-1 text-left text-gray-100 font-manrope">
                {/* Image with Play Button */}
                <a href='https://youtu.be/FPYHPZvBLBM?si=MWGfZ6JfeRNmVw5f' target="_blank" className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image2}
                    alt="Distal Gastrectomy"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a >

                {/* Content */}
                <div className="w-full flex flex-col justify-between mt-1 gap-1">
                  <b className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6">
                    Distal Gastrectomy
                  </b>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <div className="leading-4 sm:leading-5">Anesthesia</div>
                    <div className="leading-4 sm:leading-5 text-right">24:10</div>
                  </div>
                </div>
              </div>

              {/* card3 */}
              <div className="flex-1 w-full sm:w-[50%] md:w-[30%] max-w-sm relative rounded-lg border border-gray-700 overflow-hidden flex flex-col p-2 gap-1 text-left text-gray-100 font-manrope">
                {/* Image with Play Button */}
                <a href='https://youtu.be/WlDj-Cr9tBw?si=6nHS1ZNFyQWXUJHZ' target="_blank" className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image3}
                    alt="Arteriovenous Fistula Creation"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="w-full flex flex-col justify-between mt-1 gap-1">
                  <b className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6">
                    Arteriovenous Fistula Creation
                  </b>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <div className="leading-4 sm:leading-5">Vascular</div>
                    <div className="leading-4 sm:leading-5 text-right">24:10</div>
                  </div>
                </div>
              </div>

              {/* card4 */}
              <div className="flex-1 w-full sm:w-[50%] md:w-[30%] max-w-sm relative rounded-lg border border-gray-700 overflow-hidden flex flex-col p-2 gap-1 text-left text-gray-100 font-manrope">
                {/* Image with Play Button */}
                <a href='https://youtu.be/orUO-M9Z4tU?si=rtUS7wmx6B3tursM' target="_blank" className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image4}
                    alt="Epidural at T9 - T10"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a >

                {/* Content */}
                <div className="w-full flex flex-col justify-between mt-1 gap-1">
                  <b className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6">
                    Epidural at T9 - T10
                  </b>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <div className="leading-4 sm:leading-5">Anesthesia</div>
                    <div className="leading-4 sm:leading-5 text-right">24:10</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}
