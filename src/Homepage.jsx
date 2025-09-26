import React from 'react'
import heroImage from './assets/heroImage.png'
import Group from './assets/Group.svg'
import Group1 from './assets/Group1.svg'
import group2 from './assets/group2.png'
import group3 from './assets/group3.png'
import viewAllButton from './assets/viewAllButton.svg'
import Rectangle1 from './assets/Rectangle1.png'
import Rectangle2 from './assets/Rectangle2.png'
import Reactangle3 from './assets/Reactangle3.png'
import Rectangle4 from './assets/Rectangle4.png'
import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import rectangle5 from './assets/rectangle5.png'
import profile1 from './assets/profile1.svg'
import profile2 from './assets/profile2.svg'
import Frame from './assets/Frame.svg'
import frame1 from './assets/frame1.svg'
import profile3 from './assets/profile3.svg'
import profile4 from './assets/profile4.svg'
import profile5 from './assets/profile5.png'
import upcomma from './assets/upcomma.svg'
import downcomma from './assets/downcomma.svg'
import correct from './assets/correct.svg'
import card from './assets/card.png'
import play from './assets/play.svg'
import doctor from './assets/doctor.svg'
import profile7 from './assets/profile7.png'
import background from './assets/background.webm'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='bg-[black]'>


      <div className="relative w-full max-w-[1600px] mx-auto flex flex-col items-start gap-[3rem] md:gap-[5rem] text-left text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white font-manrope px-4 md:px-8 overflow-hidden">

{/* Background Video Right Side Only */}
<div className="absolute inset-0 w-full h-full flex justify-end">
  <video
    className="w-3/5 h-full object-cover"
    src={background}
    autoPlay
    loop
    muted
    playsInline
  />
  {/* Gradient Overlay - left side stronger for smooth blend */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40"></div>
</div>




        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start gap-[1.5rem] md:gap-[2.5rem] w-full max-w-5xl mt-6 animate-fade-slide">
          <div className="flex flex-col items-start md:items-end gap-[1rem] md:gap-[1.25rem]">
            <b className="w-full md:w-[39.375rem] leading-[137.5%] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
              Surgical Video Articles for Attendings, Residents, and Medical Students
            </b>
            <div className="w-full md:w-[39.25rem] text-[0.875rem] md:text-[1rem] leading-[150%] text-[#a1a1aa]">
              The Journal of Medical Insight seeks to improve outcomes through publication of videos of cutting-edge and standard of care surgical procedures.
            </div>
          </div>

          <div className="flex flex-col items-start gap-[1rem] md:gap-[1.5rem] text-[1rem] md:text-[1.125rem]">
            <div className="flex flex-wrap items-start gap-[1rem] md:gap-[1.5rem]">
              <Link to='/about'>
              <div className="rounded bg-gradient-to-r from-indigo-600 to-blue-400 h-[2.75rem] md:h-[3.125rem] flex items-center justify-center py-[0.75rem] md:py-[1rem] px-[1rem] md:px-[1.25rem]">
                <div className="font-medium text-sm md:text-base">View All Articles</div>
              </div>
              </Link>

<Link to='/editorialBoard'>
  <div className="relative rounded h-[2.75rem] md:h-[3.125rem] flex items-center justify-center px-[1rem] md:px-[1.25rem] overflow-hidden group cursor-pointer">
    
    {/* Animated Gradient Border */}
    <div className="absolute inset-0 rounded border-[2px] border-transparent bg-gradient-to-r from-indigo-600 to-blue-400 bg-[length:200%_100%] animate-gradient-slide pointer-events-none"></div>
    
    {/* Inner Button */}
    <div className="relative z-10 font-medium text-sm md:text-base text-[#fff] group-hover:text-2xl transition-colors">
      Get Started
    </div>

    {/* Tailwind Inline Animation */}
    <style jsx>{`
      @keyframes gradient-slide {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .animate-gradient-slide {
        animation: gradient-slide 3s linear infinite;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }
    `}</style>
  </div>
</Link>



            </div>

            <div className="flex flex-wrap items-start gap-[0.5rem] md:gap-[1rem] text-[0.75rem] md:text-[0.875rem] text-[#a1a1aa]">
              <a href="https://youtu.be/9GeR8pe4vW8?si=T2XADKAWSqdml-8Z"  target="_blank"><div className="underline">General Surgery</div></a>
              <a href="https://youtu.be/XNIIuacYL80?si=Qnp_dbHwBVDZLzBe" target="_blank"><div className="underline">Neurosurgery</div></a>
              <a href="https://youtu.be/KUMuKUgg2RQ?si=4R2AJ3nmH3O7796t" target="_blank"><div className="underline">Urology</div></a>
              <a href="https://youtu.be/MJ4If_n_ytM?si=XPlfuzD23Ixrq6i7" target="_blank"><div className="underline">Global Surgery</div></a>
              
            </div>
          </div>

          {/* Tailwind Animation */}
          <style>
            {`
      @keyframes fadeSlide {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .animate-fade-slide {
        animation: fadeSlide 1s ease-out forwards;
      }
    `}
          </style>
        </div>


        {/* Trusted Section */}
        <div className="relative z-10 flex flex-col items-start gap-[1rem] md:gap-[1.5rem] text-[0.875rem] md:text-[1rem] text-[#fff] w-full max-w-5xl">
          <div className="self-stretch flex items-center gap-[0.5rem] md:gap-[1rem]">
  <div>Trusted by</div>
  <div className="w-100 border-t border-[rgba(66,50,50,0.25)]" /> 
</div>


          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <img className="w-20 md:w-32 h-auto" alt="" src={Group} />
            <img className="w-28 md:w-44 h-auto" alt="" src={Group1} />
            <img className="w-24 md:w-40 h-auto object-cover" alt="" src={group2} />
            <img className="w-20 md:w-28 h-auto object-cover" alt="" src={group3} />
            <Link to='/editorialBoard' className="w-8 h-8 flex items-center justify-center">
              <img className="w-7 h-7 object-contain" alt="" src={viewAllButton} />
            </Link>
          </div>
        </div>
      </div>






      {/* Herosection2 */}


      <div className="w-full max-w-[1600px] mx-auto relative flex flex-wrap items-center gap-3 sm:gap-6 
                text-left text-xl sm:text-2xl text-gray-100 font-manrope 
                mt-10 mb-6 px-4 sm:px-6 lg:px-8 bg-[#000]">
        <b className="relative leading-tight text-[#fafafa]">Latest Articles</b>
        <div className="flex-1 border-t border-[rgba(66,50,50,0.25)]" />
      </div>

<div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
  {/* Wrapper for scrolling with hover pause */}
  <div className="relative overflow-hidden group">
    <div className="flex gap-6 animate-marquee group-hover:pause">
      {[...Array(2)].map((_, idx) => (
        <React.Fragment key={idx}>
          {/* ==== Card 1 ==== */}
<div className="relative w-80 sm:w-96 flex-shrink-0 rounded-lg bg-[#000] 
  border border-[#3f3f46] overflow-hidden flex flex-col p-4 text-left 
  text-xs sm:text-sm md:text-base text-gray-200 font-manrope 
  transform transition duration-300 hover:scale-105 hover:bg-[#1f1f23]">

  {/* Card Content */}
  <a href='https://youtu.be/Ubm9ysAJclY?si=r6rACMMUNlee_yK2' 
     target="_blank" rel="noopener noreferrer" 
     className="w-full h-40 sm:h-48 md:h-56 lg:h-64 relative z-10">
    <img className="w-full h-full object-cover rounded-md" alt="" src={Rectangle1} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black/50 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </a>

  <div className="flex flex-col gap-4 mt-4 flex-1 z-10 relative">
    <div className="flex">
      <div className="rounded-sm bg-[#fdba74] px-2 py-1 text-[#18181b]">
        <b className="tracking-widest text-[0.65rem] sm:text-xs uppercase">General Surgery</b>
      </div>
    </div>
    <b className="text-sm sm:text-base md:text-lg text-[#fafafa] leading-snug line-clamp-3">
      Open Radical Cholecystectomy with Partial Hepatectomy for Gallbladder Cancer
    </b>
    <div className="flex items-center justify-between mt-auto">
      <div className="flex -space-x-1">
        <img className="w-6 h-6 rounded-full object-cover" alt="" src={profile1} />
        <img className="w-6 h-6 rounded-full object-cover bg-[#3f3f46]" alt="" src={frame1} />
        <img className="w-6 h-6 rounded-full object-cover bg-[#3f3f46]" alt="" src={frame1} />
      </div>
      <img className="w-20 sm:w-24 object-cover" alt="" src={card1} />
    </div>
  </div>

  {/* Removed animation, simple border now */}
</div>


{/* ==== Card 2 ==== */}
<div className="relative w-80 sm:w-96 flex-shrink-0 rounded-lg bg-[#000] border border-[#3f3f46] 
  overflow-hidden flex flex-col p-4 text-left text-xs sm:text-sm md:text-base text-gray-200 font-manrope 
  transform transition duration-300 hover:scale-105 hover:bg-[#1f1f23]">

  {/* Sliding Subtle Border Effect */}
  <span className="absolute inset-0 rounded-lg border border-[#3f3f46] pointer-events-none overflow-hidden">
    <span className="absolute top-0 left-[-50%] w-1/2 h-full bg-white/10 blur-md animate-slide-border"></span>
  </span>

  <a href='https://youtu.be/xQy3xRb5jKw?si=YfcJTdTo3KBsRUp2' target="_blank" rel="noopener noreferrer" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 relative z-10">
    <img className="w-full h-full object-cover rounded-md" alt="" src={Reactangle3} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black/50 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </a>

  <div className="flex flex-col gap-4 mt-4 flex-1 z-10 relative">
    <div className="flex">
      <div className="rounded-sm bg-[#fdba74] px-2 py-1 text-[#18181b]">
        <b className="tracking-widest text-[0.65rem] sm:text-xs uppercase">General Surgery</b>
      </div>
    </div>
    <b className="text-sm sm:text-base md:text-lg text-gray-100 leading-snug line-clamp-3">
      Laparoscopic Heller Myotomy
    </b>
    <div className="flex items-center justify-between mt-auto">
      <img className="w-6 h-6 rounded-full object-cover" alt="" src={profile2} />
      <img className="w-20 sm:w-24 object-cover" alt="" src={card2} />
    </div>
  </div>

  {/* Keyframes for sliding subtle border */}
  <style jsx>{`
    @keyframes slide-border {
      0% { left: -50%; }
      100% { left: 100%; }
    }
    .animate-slide-border {
      animation: slide-border 3s linear infinite;
    }
  `}</style>
</div>


{/* ==== Card 3 ==== */}
<div className="relative w-80 sm:w-96 flex-shrink-0 rounded-lg bg-[#000] border border-[#3f3f46] 
  overflow-hidden flex flex-col p-4 text-left text-xs sm:text-sm md:text-base text-gray-200 font-manrope 
  transform transition duration-300 hover:scale-105 hover:bg-[#1f1f23]">

  {/* Subtle Sliding Border (lighter color) */}
  <span className="absolute inset-0 rounded-lg border border-[#52525b] pointer-events-none overflow-hidden">
    <span className="absolute top-0 left-[-50%] w-1/2 h-full bg-white/5 blur-md animate-slide-border-light"></span>
  </span>

  <a href='https://youtu.be/GByApALC8sY?si=-ALJH5kPVvqTvayL' target="_blank" rel="noopener noreferrer" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 relative z-10">
    <img className="w-full h-full object-cover rounded-md" alt="" src={Rectangle2} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black/50 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </a>

  <div className="flex flex-col gap-4 mt-4 flex-1 z-10 relative">
    <div className="flex">
      <div className="rounded-sm bg-[#93c5fd] px-2 py-1 text-[#18181b]">
        <b className="tracking-widest text-[0.65rem] sm:text-xs uppercase">Orthopaedics</b>
      </div>
    </div>
    <b className="text-sm sm:text-base md:text-lg text-gray-100 leading-snug line-clamp-3">
      Flexor Digitorum Superficialis to Flexor Digitorum Profundus Transfer...
    </b>
    <div className="flex items-center justify-between mt-auto">
      <div className="flex -space-x-1">
        <img className="w-6 h-6 rounded-full object-cover bg-[#3f3f46]" alt="" src={frame1} />
        <img className="w-6 h-6 rounded-full object-cover bg-[#3f3f46]" alt="" src={frame1} />
      </div>
      <img className="w-20 sm:w-24 object-cover" alt="" src={card1} />
    </div>
  </div>

  {/* Keyframes for lighter border animation */}
  <style jsx>{`
    @keyframes slide-border-light {
      0% { left: -50%; }
      100% { left: 100%; }
    }
    .animate-slide-border-light {
      animation: slide-border-light 3s linear infinite;
    }
  `}</style>
</div>


          {/* ==== Card 4 ==== */}
          <div className="w-80 sm:w-96 flex-shrink-0 rounded-lg bg-[#000] border border-[#3f3f46] 
            overflow-hidden flex flex-col p-4 text-left text-xs sm:text-sm md:text-base text-gray-200 font-manrope 
            transform transition duration-300 hover:scale-105 hover:bg-[#1f1f23]">
            <a href='https://youtu.be/G43L9HfC7Fk?si=3Ub1gG4VRCNcgTTu' target="_blank" rel="noopener noreferrer" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 relative">
              <img className="w-full h-full object-cover rounded-md" alt="" src={Rectangle4} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black/50 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
            <div className="flex flex-col gap-4 mt-4 flex-1">
              <div className="flex">
                <div className="rounded-sm bg-[#fcd34d] px-2 py-1 text-[#18181b]">
                  <b className="tracking-widest text-[0.65rem] sm:text-xs uppercase">Basic Skills for the OR</b>
                </div>
              </div>
              <b className="text-sm sm:text-base md:text-lg text-gray-100 leading-snug line-clamp-3">
                Opening Sterile Surgical Instrument Containers
              </b>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex -space-x-1">
                  <img className="w-6 h-6 rounded-full object-cover" alt="" src={profile3} />
                  <img className="w-6 h-6 rounded-full object-cover" alt="" src={profile4} />
                </div>
                <img className="w-20 sm:w-24 object-cover" alt="" src={rectangle5} />
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>

  {/* Button */}
<Link to='/article'>
  <div className="relative rounded bg-gradient-to-r from-indigo-600 to-sky-400 
    w-fit px-6 py-3 mt-6 flex items-center justify-center 
    text-sm sm:text-base text-white font-manrope cursor-pointer overflow-hidden group">

    {/* Animated Shine Effect */}
    <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-20 
      transform -skew-x-12 animate-shine pointer-events-none"></span>

    {/* Inner Button Text */}
    <span className="relative z-10 font-medium">View Articles</span>

    {/* Animation Keyframes */}
    <style jsx>{`
      @keyframes shine {
        0% { left: -75%; }
        100% { left: 125%; }
      }
      .animate-shine {
        animation: shine 2.5s linear infinite;
      }
    `}</style>
  </div>
</Link>


  {/* Tailwind Animation */}
  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 10s linear infinite;
      }
      .group-hover\\:pause:hover {
        animation-play-state: paused;
      }
    `}
  </style>
</div>



      {/*hero2 */}

      {/* <div className="w-full relative flex items-center gap-[1.5rem] text-left text-[2rem] text-gray-100 font-manrope">
<b className="relative leading-[100%]">Hear from the Head</b>
<div className="flex-1 relative border-gray-200 border-solid border-t-[1px] box-border h-[0.063rem]" />
</div> */}

{/* Parent Div */}
<div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6 px-4 sm:px-6 lg:px-8 mt-16">

  {/* Heading */}
  <div className="w-full flex items-center gap-4 text-left text-2xl text-[#fafafa] font-manrope">
    <b className="leading-[100%]">Hear from the Head</b>
    <div className="flex-1 border-t border-[rgba(66,50,50,0.25)]"></div>
  </div>

  {/* Cards Container */}
  <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center">
    
    {/* Card 1 */}
    <div className="flex-1 flex flex-col items-start gap-4 bg-[#000] rounded-lg shadow-md p-4 sm:p-6">
      <img
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg object-cover"
        alt="Keith Lillemoe"
        src={profile5}
      />
      <div className="flex flex-col items-start gap-2 sm:gap-3 text-[#fafafa] text-left">
        <b className="text-xl sm:text-2xl md:text-3xl leading-snug">
          <p className="m-0">Keith Lillemoe</p>
          <p className="m-0">MD, FACS</p>
        </b>
        <p className="text-sm sm:text-base md:text-lg text-[#a1a1aa] leading-relaxed">
          Chief of Surgery, Massachusetts General Hospital <br />
          Editorial Board, JOMI
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex-1 relative rounded-lg bg-[#27272a] flex flex-col items-center justify-center 
      p-5 sm:p-7 md:p-8 gap-3 text-center font-manrope shadow-md
      h-auto min-h-[200px] sm:min-h-[220px] lg:mt-6">
      {/* lg:mt-6 -> thoda neeche aur upar ka gap kam */}

      {/* Up Commas (double, closer) */}
      <div className="flex gap-0.5 self-start">
        <img src={upcomma} alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <img src={upcomma} alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </div>

      {/* Text */}
      <b className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#fafafa] max-w-[90%]">
        The future is in video journals and JOMI will be at the head of the line
        showing how to do it.
      </b>

      {/* Down Commas (double, closer) */}
      <div className="flex gap-0.5 self-end">
        <img src={downcomma} alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <img src={downcomma} alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </div>
    </div>
  </div>
</div>












{/* Main Section */}
<div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-10 flex flex-col gap-10">

  {/* Section Header */}
  <div className="w-full relative flex items-center gap-6 text-left text-[2rem] text-[#fafafa] font-manrope">
    <b className="relative leading-[100%]">Pricing</b>
    <div className="flex-1 relative border-[#27272a] border-t h-[1px]" />
  </div>

  {/* Parent Container */}
  <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch">

{/* Card 1 */}
<div className="flex-[1.5] h-full flex flex-col items-start text-left font-manrope mt-16 lg:mt-20">
  <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-5xl">
    {/* Heading */}
    <b className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-snug text-[#fafafa]">
      Simple and Transparent Pricing Plans
    </b>

    {/* Description */}
    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#a1a1aa]">
      The Journal of Medical Insight seeks to improve outcomes through
      publication of videos of cutting-edge and standard of care surgical
      procedures.
    </p>
  </div>
</div>


    {/* Card 2 */}
    <div
      className="flex-[0.9] h-full rounded-lg bg-[#000] flex flex-col items-start justify-between p-4 sm:p-6 md:p-8 gap-4 text-left font-manrope border"
      style={{ borderColor: "rgb(63, 63, 70)" }}
    >
      {/* Top Content */}
      <div className="w-full flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-3">
          {/* Title */}
          <b className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            Individual Subscription
          </b>

          {/* Price Section */}
          <div className="flex flex-col items-start gap-1 text-sm">
            <span className="text-gray-400">Starting from</span>
            <b className="text-2xl sm:text-3xl md:text-4xl text-gray-100">
              $24/mo
            </b>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sem viverra viverra sit cursus felis.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base text-gray-300">
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" alt="" src={correct} />
            <span>Feature 1</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" alt="" src={correct} />
            <span>Feature 2</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" alt="" src={correct} />
            <span>Feature 3</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" alt="" src={correct} />
            <span>Feature 4</span>
          </div>
        </div>
      </div>

      {/* Button */}
<Link to="/pricing" className="relative w-full mt-4 rounded bg-gradient-to-r from-indigo-600 to-sky-400 
  flex items-center justify-center py-3 cursor-pointer hover:opacity-90 transition transform duration-300 hover:scale-105 overflow-hidden group">
  
  {/* Shine Animation */}
  <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-20 transform -skew-x-12 animate-shine pointer-events-none"></span>

  {/* Button Text */}
  <span className="text-sm sm:text-base font-medium text-white relative z-10">
    Buy Now
  </span>

  {/* Keyframes */}
  <style jsx>{`
    @keyframes shine {
      0% { left: -75%; }
      100% { left: 125%; }
    }
    .animate-shine {
      animation: shine 2.5s linear infinite;
    }
  `}</style>
</Link>


    </div>

{/* Card 3 */}
<div className="flex-1 flex flex-col justify-between rounded-lg border border-gray-600 p-6 sm:p-8 gap-4 text-left text-base sm:text-lg text-white font-manrope">
  {/* Title */}
  <div className="flex flex-col items-start gap-4">
    <b className="relative leading-snug text-lg sm:text-xl md:text-1xl">
      Institutional Subscription
    </b>

    {/* Content */}
    <div className="relative text-sm sm:text-base leading-relaxed text-[#a1a1aa] max-w-full sm:max-w-md md:max-w-lg flex flex-col gap-2">
      <p className="m-0">
        If you would like your institution to subscribe, please:
      </p>
      <p className="m-0">
        1. Contact someone at your institution (medical librarian, program
        director, faculty, etc.) to request a subscription.
      </p>
      <p className="m-0">
        2. Log a request at{" "}
        <a
          className="underline text-mediumpurple font-semibold"
          href="https://jomi.com/request"
          target="_blank"
        >
          jomi.com/request
        </a>{" "}
        and we will follow up to the best of our abilities.
      </p>
      <p className="m-0">
        3. View more details{" "}
        <span className="underline font-semibold text-mediumpurple">here</span>
      </p>
    </div>
  </div>

  {/* Button */}
<Link
  to='/form'
  className="w-full rounded border border-gray-600 flex items-center justify-center py-3 px-4 text-sm sm:text-base text-whitesmoke 
  cursor-pointer hover:bg-darkslategray/20 transition transform duration-300 hover:scale-105"
>
  <span className="font-medium">Contact Us →</span>
</Link>

</div>



  </div>
</div>










      {/* <div className="w-full relative flex items-center gap-[1.5rem] text-left text-[2rem] text-gray-100 font-manrope">
<b className="relative leading-[100%]">Recent News</b>
<div className="flex-1 relative border-gray-200 border-solid border-t-[1px] box-border h-[0.063rem]" />
</div> */}




      {/* Parent Container */}
      <div className="ww-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-10">

        {/* Section Heading */}
        <div className="w-full flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-manrope">
            Recent News
          </h2>
          <div className="flex-1 border-t border-[#27272a]"></div>
        </div>

        {/* Cards Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Card 1 */}
          <div className="flex-1 flex flex-col items-start justify-between gap-6 text-left font-manrope">
            {/* Heading + Description */}
            <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-3xl">
              <b className="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-snug text-[#fafafa]">
                American College Of Surgeons Bulletin Brief
              </b>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#a1a1aa]">
                Dr. Steven Wexner, Vice-Chair of the ACS Board of Regents, interviews
                Dr. Keith Lillemoe, Chief of Surgery at Massachusetts General Hospital,
                and Dr. Tiffany Chao, Editor-in-Chief of JOMI. Here, they discuss the
                high-value educational opportunities that JOMI provides to surgeons,
                residents, students, scrub techs, and nurses.
              </p>
            </div>

            {/* Button Section */}
    <a href='https://youtu.be/43qP8dO9-MM?si=F7yav_6R0ZdlHTxC' target="_blank" className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white cursor-pointer group">
  <img
    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 transform transition-transform duration-300 group-hover:scale-110"
    alt="icon"
    src={play}
  />
  <b className="leading-tight relative group-hover:underline group-hover:underline-offset-4">
    Watch Now
  </b>
</a>

          </div>

          {/* Card 2 */}
          <div className="flex-1  overflow-hidden flex flex-col font-manrope shadow-lg">
            {/* Top Image */}
            <img
              className="w-full h-28 sm:h-36 md:h-44 lg:h-16 object-cover"
              alt="banner"
              src={card}
            />

            {/* Content */}
            <div className="w-full bg-[#2b3a5c] flex flex-col lg:flex-row items-center justify-between 
                      p-3 sm:p-4 md:p-6 lg:p-6 text-left text-gray-100">

              {/* Left Side (Text + Profile) */}
              <div className="flex flex-col gap-4 lg:w-2/3">
                {/* Title Section */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
                    Journal of Medical Insight
                  </h2>

                  <div className="flex flex-col gap-1 text-xs sm:text-sm md:text-base">
                    <span className="font-medium">with</span>
                    <div className="flex flex-col gap-1 text-sm sm:text-base md:text-lg">
                      <span className="font-medium">Keith D. Lillemoe, MD, FACS</span>
                      <span className="font-medium">Tiffany Chao, MD, MPH, FACS</span>
                    </div>
                  </div>
                </div>

                {/* Profile Section */}
                <div className="flex items-start gap-3 mt-3 text-xs sm:text-sm md:text-base text-gray-200">
                  <img
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    alt="profile"
                    src={doctor}
                  />
                  <div className="leading-relaxed">
                    <p className="m-0">
                      <span>A </span>
                      <b className="text-gray-100">From the Frontlines</b> conversation with
                    </p>
                    <p className="m-0">Steve D Wexner, MD, PhD (Hon),</p>
                    <p className="m-0">Hon FRCS (Glasg)</p>
                  </div>
                </div>
              </div>

              {/* Right Side (Bottom Images) */}
              <div className="flex gap-2 sm:gap-3 mt-4 lg:mt-0 lg:w-1/3 justify-end self-center">
                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded object-cover"
                  alt="extra-1"
                  src={profile5}
                />
                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded object-cover"
                  alt="extra-2"
                  src={profile7}
                />
              </div>
            </div>
          </div>
        </div>
      </div>







    </div>
  )
}
