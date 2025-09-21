import React from 'react'
import LightGrad from './assets/LightGrad.png'
import data from './assets/data.png'
import team1 from './assets/team1.svg'
import logo2 from './assets/logo2.svg'
import logo3 from './assets/logo3.png'
import logo4 from './assets/logo4.png'
import logo5 from './assets/logo5.png'
import logo6 from './assets/logo6.png'
import { Link } from 'react-router-dom'

export default function page2() {
  return (
    <div>


      <div className="w-full relative overflow-hidden text-left text-[0.875rem] text-[#f8fafc] font-dm-sans">

        {/* Background Image */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src={LightGrad}   // <-- apna image ka path yahan do
          alt="background"
        />

        {/* Content */}
        <div className="w-full px-4 sm:px-8 lg:px-16 py-20 flex flex-col items-center text-center gap-8 relative z-10">
          <div className="flex flex-col items-center gap-4 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium leading-snug">
              Surgical Video Articles for Attendings, Residents, and Medical Students
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#94a3b8] leading-relaxed">
              The Journal of Medical Insight seeks to improve outcomes through publication of videos of cutting-edge and standard of care surgical procedures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-base">
            <Link to='/article' className="rounded bg-gradient-to-t from-blue-600 to-cyan-400 text-white font-medium py-3 px-5">
              View Articles
            </Link>
            <Link to='/form' className="rounded border border-gray-300 font-medium py-3 px-5">
              Get Started
            </Link>
          </div>
        </div>

        {/* Video Card Section */}
        <div className="mt-10 w-full px-4 sm:px-8 lg:px-16 flex justify-end relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-px h-32 border-r border-dashed border-[#fff] hidden sm:block" />

            <div className="backdrop-blur-lg rounded bg-[rgba(255,255,255,0.25)] border border-gray-400 p-3 max-w-md">
              <div className="flex gap-3">
                <img
                  className="w-24 h-24 object-cover rounded"
                  src={data}
                  alt=""
                />
                <div className="flex flex-col justify-center gap-2">
                  <p className="font-medium leading-snug">
                    Intraventricular Tumor Resection
                  </p>
                  <div className="flex justify-between text-xs text-[#94a3b8]">
                    <span className="font-medium">48:54</span>
                    <span className="font-medium">regionName</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








      <div className="w-full bg-[#0b111f] flex flex-col items-center py-10 px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-screen-2xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 sm:gap-10">
          <img className="w-20 sm:w-28 lg:w-40 h-auto object-contain" src={team1} alt="" />
          <img className="w-24 sm:w-32 lg:w-44 h-auto object-contain" src={logo2} alt="" />
          <img className="w-24 sm:w-32 lg:w-44 h-auto object-cover" src={logo3} alt="" />
          <img className="w-20 sm:w-28 lg:w-40 h-auto object-cover" src={logo4} alt="" />
          <img className="w-20 sm:w-28 lg:w-40 h-auto object-cover" src={logo5} alt="" />
          <img className="w-28 sm:w-36 lg:w-48 h-auto object-cover" src={logo6} alt="" />
        </div>
      </div>



    </div>
  )
}
