import React from 'react'

import mobile from '../assets/mobile.png'
import net from '../assets/net.png'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import maps from '../assets/maps.svg'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div>

      <div className="w-full bg-[#27272a] text-[#fafafa] font-dm-sans relative overflow-visible mt-16 sm:mt-20 lg:mt-24">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12 relative z-10">

          <div className="flex flex-col md:flex-row items-start gap-8">

            {/* Left Image */}
            <div className="w-full md:w-1/3 flex-shrink-0 relative -mt-24 md:-mt-32 lg:-mt-40 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 overflow-hidden rounded-lg ">
                <img
                  className="w-full h-full object-cover"
                  src={mobile}
                  alt="Placeholder"
                />
                <div className="absolute inset-0 flex justify-center items-start">
                  <img
                    className="w-24 h-48 sm:w-28 sm:h-60 object-cover mt-7"
                    src={net}
                    alt="Overlay"
                  />
                </div>
              </div>
            </div>







            {/* Right Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-6 md:gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

                {/* Column 1 */}
                <div className="flex flex-col gap-3">
                  <b className="text-lg md:text-xl lg:text-2xl">JOMI</b>
                  <div className="flex flex-col gap-1 text-gray-400 text-sm">
                    <a href="https://portal.issn.org/resource/ISSN/2373-6003" target="_blank">2373-6003</a>
                    <p className="m-0">Copyright © 2021 JOMI LLC.</p>
                    <p className="m-0">All rights reserved.</p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                  <b className="text-lg md:text-xl lg:text-2xl">Newsletter</b>
                  <div className="flex flex-col gap-1 text-gray-400 text-sm">
                    <Link to='/about'><div>About JOMI</div></Link>
                    <Link to='article'><div>Article Index</div></Link>
                    <Link to='/pricing'><div>Publish</div></Link>
                    <Link to='editorialBoard'><div>Editorial Board</div></Link>
                    <Link to='/form'><div>FAQ</div></Link>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3">
                  <b className="text-lg md:text-xl lg:text-2xl">Newsletter</b>
                  <div className="flex flex-col gap-1 text-gray-400 text-sm">
              
                      <Link to='/about'><div>JOMI Blog</div></Link>
                    <Link to='article'><div>Newsletter</div></Link>
                    <Link to='/pricing'><div>Careers</div></Link>
                    <Link to='subscribingInstitutions'><div>Partners/Sponsors</div></Link>
                    <Link to='/form'><div>Contact Us</div></Link>
                  </div>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-3">
                  <b className="text-lg md:text-xl lg:text-2xl">Connect with us</b>
                  <div className="flex flex-col gap-1 text-gray-400 text-sm">
                    <a href='https://www.facebook.com/JoMIJournal/' className="flex items-center gap-2"><img className="w-4 h-4" alt="Facebook" src={facebook} />Facebook</a>
                    <a href='https://x.com/JoMIJournal' className="flex items-center gap-2"><img className="w-4 h-4" alt="Twitter" src={twitter} />Twitter</a>
                    <a href='https://www.youtube.com/channel/UC4tzwuDDsZsfRswMRAXjVSg' className="flex items-center gap-2"><img className="w-4 h-4" alt="Maps" src={maps} />Maps</a >
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Optional: Background overlay if you want image to slightly overflow */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#27272a]"></div>
      </div>




    </div>
  )
}
