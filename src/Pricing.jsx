import React from 'react'
import data1 from './assets/data1.svg'
import data2 from './assets/data2.svg'
import data3 from './assets/data3.png'
import data4 from './assets/data4.png'
import data5 from './assets/data5.png'
import data6 from './assets/data6.png'
import data7 from './assets/data7.png'
import data8 from './assets/data8.png'
import play from './assets/play.svg'
import card from './assets/card.png'
import doctor from './assets/doctor.svg'
import profile5 from './assets/profile5.png'
import profile7 from './assets/profile7.png'
import cardlogo from './assets/cardlogo.svg'
import cardlogo2 from './assets/cardlogo2.svg'
import tick from './assets/tick.svg'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <div>


      <div className="relative w-full flex flex-col items-center justify-between text-center text-gray-100 font-manrope px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <b className="max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            <p className="m-0">Individual Subscription</p>
            <p className="m-0">Institutional Subscription</p>
          </b>

          <div className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#a1a1aa]">
            The pricing is custom-tailored for each institution in an effort to match
            price with value of JOMI.
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="mt-6 rounded-lg bg-[#18181b] border border-[#3f3f46] flex text-sm sm:text-base">
          {/* Bill Annually */}
          <Link to='/form' className="rounded-md bg-gradient-to-t from-indigo-600 to-sky-400 px-4 sm:px-6 py-2 sm:py-3 text-[#e2e8f0] font-medium">
            Bill Annually
          </Link>
          {/* Bill Monthly */}
          <Link to='/form' className="px-4 sm:px-6 py-2 sm:py-3 text-[#e2e8f0]">
            Bill Monthly
          </Link>
        </div>
      </div>



      {/* Parent Div */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-6 px-4">

        {/* Card 1 */}
        <div className="flex-1 w-full relative rounded-lg bg-[#18181b] border border-[#3f3f46] flex flex-col items-start p-4 sm:p-6 md:p-8 gap-6 text-left text-[#fafafa] font-manrope">
          {/* Icon */}
          <img className="w-8 h-8 md:w-10 md:h-10" alt="" src={cardlogo} />

          {/* Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="text-lg md:text-xl font-semibold">Free</div>
              <div className="text-3xl md:text-5xl font-bold text-[#fafafa]">$0</div>
              <div className="text-sm text-darkgray">per year</div>
            </div>

            {/* Subscription Features */}
            <div className="flex flex-col items-start gap-5 text-base md:text-lg">
              <div className="font-medium">In Subscription</div>
              <div className="flex flex-col items-start gap-4 text-sm text-[#a1a1aa] ">
                <div className="flex items-center gap-2 ">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Unlimited Screen Time</span>
                </div>
                <div className="flex items-center gap-2 text-[#fafafa]">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Multiple Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Quiz per week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to='/form' className="w-full mt-6 rounded-lg border border-[#3f3f46] flex items-center justify-center py-3 px-4 text-base font-medium hover:bg-[#fafafa] hover:text-[#000] cursor-pointer transition">
            Get Started
          </Link>
        </div>

        {/* Card 2 */}
        <div className="flex-1 w-full relative rounded-lg bg-gradient-to-t from-indigo-600 to-blue-400 border border-darkslategray flex flex-col items-start p-4 sm:p-6 md:p-8 gap-6 text-left text-gray-50 font-manrope">
          {/* Icon */}
          <img className="w-8 h-8 md:w-10 md:h-10" alt="" src={cardlogo2} />

          {/* Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="text-lg md:text-xl font-semibold">Surgical Tech</div>
              <div className="text-3xl md:text-5xl font-bold text-[#f4f4f5]">$150</div>
              <div className="text-sm text-[#f3f4f6]">per year</div>
            </div>

            {/* Subscription Features */}
            <div className="flex flex-col items-start gap-5 text-base md:text-lg">
              <div className="font-medium">In Subscription</div>
              <div className="flex flex-col items-start gap-4 text-sm md:text-base text-[#f4f4f5]">
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded bg-[#fafafa]" alt="" src={tick} />
                  <span>Unlimited Screen Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded bg-[#fafafa]" alt="" src={tick} />
                  <span>Multiple Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded bg-[#fafafa]" alt="" src={tick} />
                  <span>Quiz per week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to='/form' className="w-full mt-6 rounded-lg bg-[#fff] flex items-center justify-center py-3 px-4 text-base text-[#000] font-medium hover:bg-[#000] hover:text-[#fff] cursor-pointer transition">
            Get Started
          </Link>
        </div>

        {/* Card 3 */}
        <div className="flex-1 w-full relative rounded-lg bg-[#18181b] border border-[#3f3f46] flex flex-col items-start p-4 sm:p-6 md:p-8 gap-6 text-left text-[#f4f4f5] font-manrope">
          {/* Icon */}
          <img className="w-8 h-8 md:w-10 md:h-10" alt="" src={cardlogo} />

          {/* Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="text-lg md:text-xl font-semibold">Trainee</div>
              <div className="text-3xl md:text-5xl font-bold text-[#fafafa]">$250</div>
              <div className="text-sm text-[#a1a1aa]">per year</div>
            </div>

            {/* Subscription Features */}
            <div className="flex flex-col items-start gap-5 text-base md:text-lg">
              <div className="font-medium">In Subscription</div>
              <div className="flex flex-col items-start gap-4 text-sm md:text-base text-[#a1a1aa]">
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Unlimited Screen Time</span>
                </div>
                <div className="flex items-center gap-2 text-[#f4f4f5]">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Multiple Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Quiz per week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to='/form' className="w-full mt-6 rounded-lg border border-[#3f3f46]  flex items-center justify-center py-3 px-4 text-base text-[#fafafa] font-medium bg-[#18181b] hover:bg-[#fafafa] hover:text-[#000] cursor-pointer transition">
            Get Started
          </Link>
        </div>

        {/* Card 4 */}
        <div className="flex-1 w-full relative rounded-lg bg-[#18181b] border border-darkslategray flex flex-col items-start p-4 sm:p-6 md:p-8 gap-6 text-left text-[#f4f4f5] font-manrope">
          {/* Icon */}
          <img className="w-8 h-8 md:w-10 md:h-10" alt="" src={cardlogo} />

          {/* Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="text-lg md:text-xl font-semibold">Attending</div>
              <div className="text-3xl md:text-5xl font-bold text-[#fafafa]">$1000</div>
              <div className="text-sm text-[#a1a1aa]">per year</div>
            </div>

            {/* Subscription Features */}
            <div className="flex flex-col items-start gap-5 text-base md:text-lg">
              <div className="font-medium">In Subscription</div>
              <div className="flex flex-col items-start gap-4 text-sm md:text-base text-[#a1a1aa]">
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Unlimited Screen Time</span>
                </div>
                <div className="flex items-center gap-2 text-[#f4f4f5]">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Multiple Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded bg-[#3f3f46]" alt="" src={tick} />
                  <span>Quiz per week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to='/form' className="w-full mt-6 rounded-lg border border-[#3f3f46] flex items-center justify-center py-3 px-4 text-base text-[#fafafa] font-medium bg-[#18181b] hover:bg-[#fafafa] hover:text-[#000] cursor-pointer transition">
            Get Started
          </Link>
        </div>
      </div>





      {/* <div className="w-full relative flex flex-col gap-8 px-4 sm:px-6 lg:px-12"> */}
      {/* First row */}
      {/* <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
    <img className="h-8 sm:h-10 md:h-12 object-contain" alt="" />
    <img className="h-8 sm:h-10 md:h-12 object-contain" alt="" />
    <img className="h-8 sm:h-10 md:h-12 object-contain" alt="" />
    <img className="h-10 sm:h-12 md:h-14 object-contain" alt="" />
    <img className="h-8 sm:h-10 md:h-12 object-contain" alt="" />
  </div> */}

      {/* Second row */}
      {/* <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
    <img className="h-8 sm:h-10 md:h-12 object-contain" alt="" />
    <img className="h-10 sm:h-12 md:h-14 object-contain" alt="" />
    <img className="h-8 sm:h-10 md:h-12 object-contain" alt="" />
    <img className="h-10 sm:h-12 md:h-14 object-contain" alt="" />
    <img className="h-8 sm:h-10 md:h-12 object-contain" alt="" />
  </div>
</div> */}







      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Logo 1 */}
          <div className=" flex items-center justify-center p-6  rounded-lg">
            <img src={data1} alt="Logo 1" className="w-32 h-16 object-contain" />
          </div>

          {/* Logo 2 */}
          <div className=" flex items-center justify-center p-6 ">
            <img src={data2} alt="Logo 2" className="w-32 h-16 object-contain" />
          </div>

          {/* Logo 3 */}
          <div className=" flex items-center justify-center p-6 ">
            <img src={data3} alt="Logo 3" className="w-32 h-16 object-contain" />
          </div>

          {/* Logo 4 */}
          <div className=" flex items-center justify-center p-6 ">
            <img src={data4} alt="Logo 4" className="w-32 h-16 object-contain" />
          </div>

          {/* Logo 5 */}
          <div className=" flex items-center justify-center p-6 ">
            <img src={data5} alt="Logo 5" className="w-32 h-16 object-contain" />
          </div>

          {/* Logo 6 */}
          <div className=" flex items-center justify-center p-6 ">
            <img src={data6} alt="Logo 6" className="w-32 h-16 object-contain" />
          </div>

          {/* Logo 7 */}
          <div className=" flex items-center justify-center p-6 ">
            <img src={data7} alt="Logo 7" className="w-32 h-16 object-contain" />
          </div>

          {/* Logo 8 */}
          <div className=" flex items-center justify-center p-6 ">
            <img src={data8} alt="Logo 8" className="w-32 h-16 object-contain" />
          </div>


        </div>
      </div>



      {/* Parent Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
  flex flex-wrap gap-6 justify-between">

        {/* Card 1 */}
        <div className="flex-1 min-w-[220px] sm:min-w-[200px] md:w-[18%] flex flex-col items-start gap-4 sm:gap-5 text-left font-manrope">

          {/* Heading */}
          <div className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa]">
            Compare plans
          </div>

          {/* Billing Frequency */}
          <div className="flex flex-col items-start gap-1.5 text-xs sm:text-sm text-[#a1a1aa] w-full">
            <div className="leading-tight">Billing frequency</div>

            {/* Toggle Buttons */}
            <div className="rounded-lg bg-gray-200 border border-[#3f3f46] flex w-full text-sm sm:text-base overflow-hidden">
              <Link to='/form' className="bg-gradient-to-t from-indigo-600 to-blue-400 text-white px-3 sm:px-4 py-1.5 sm:py-2 font-medium cursor-pointer text-center flex-1">
                Bill Annually
              </Link>
              <Link to='/form' className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#18181b] text-[#fafafa] hover:text-gray-200 cursor-pointer text-center flex-1">
                Bill Monthly
              </Link>
            </div>
          </div>

        </div>


        {/* Card 2 */}
        <div className="flex-1 min-w-[220px] sm:min-w-[200px] md:w-[18%] rounded-lg bg-[#18181b] border border-darkslategray h-auto sm:h-[11.5rem] flex flex-col justify-between p-4 sm:p-6 gap-6 text-left text-[#fafafa] font-manrope">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-1">
              <div className="text-base sm:text-lg font-semibold">Free</div>
              <div className="text-xs sm:text-sm text-[#a1a1aa]">Recurring payments</div>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs sm:text-sm text-aquamarine">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden rounded-full bg-green-600 text-white py-1 px-3 text-xs sm:text-sm">
                  Save 30%
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-medium text-[#fafafa]">$0</div>
              </div>
              <div className="text-[#a1a1aa]">per month</div>
            </div>
          </div>
          <Link to='/form' className="w-full rounded-md border border-darkslategray flex items-center justify-center py-2 sm:py-3 px-4 text-sm sm:text-base font-medium hover:bg-[#3f3f46] transition">
            Get Started
          </Link>
        </div>

        {/* Card 3 */}
        <div className="flex-1 min-w-[220px] sm:min-w-[200px] md:w-[18%] relative rounded-lg bg-gradient-to-t from-indigo-600 to-sky-400 border border-[#3f3f46] overflow-hidden flex flex-col items-start p-5 gap-8 text-left text-[1.125rem] text-white font-manrope">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-start gap-2">
              <div className="leading-7 font-semibold">Surgical Tech</div>
              <div className="text-sm leading-4 text-white/90">Paid once a year</div>
            </div>
            <div className="flex flex-col items-end gap-2 text-sm text-aquamarine">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-green-500 hidden items-start py-1 px-3">
                  <div className="leading-none text-white text-xs font-medium">Save 30%</div>
                </div>
                <div className="text-2xl font-medium text-white">$150</div>
              </div>
              <div className="text-white/80 text-sm">per year</div>
            </div>
          </div>
          <Link to='/form' className="w-full rounded-md bg-white flex items-center justify-center py-3 px-6 text-base text-black font-medium hover:bg-[#000] hover:text-[#fff] transition">
            Get Started
          </Link>
        </div>

        {/* Card 4 */}
        <div className="flex-1 min-w-[220px] sm:min-w-[200px] md:w-[18%] relative rounded-lg bg-[#18181b] border border-[#3f3f46] overflow-hidden flex flex-col p-5 gap-6 text-left text-[1.125rem] text-[#fafafa] font-manrope">
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col items-start gap-2">
              <div className="font-semibold text-lg">Trainee</div>
              <div className="text-sm leading-4 text-[#a1a1aa]">Recurring payments</div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-aquamarine">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-green-500 hidden items-start py-1 px-3">
                  <div className="leading-none text-white text-xs font-medium">Save 30%</div>
                </div>
                <div className="text-2xl font-medium text-[#fafafa]">$250</div>
              </div>
              <div className="text-[#a1a1aa] text-sm">per month</div>
            </div>
          </div>
          <Link to='/form' className="w-full rounded-md bg-[#18181b] border border-[#3f3f46] flex items-center justify-center py-3 px-6 text-base text-[#fafafa] font-medium hover:bg-[#3f3f46] transition">
            Get Started
          </Link>
        </div>

        {/* Card 5 */}
        <div className="flex-1 min-w-[220px] sm:min-w-[200px] md:w-[18%] relative rounded-lg bg-[#18181b] border border-[#3f3f46] overflow-hidden flex flex-col p-5 gap-6 text-left text-[1.125rem] text-[#fafafa] font-manrope">
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col items-start gap-2">
              <div className="font-semibold text-lg">Attending</div>
              <div className="text-sm text-[#a1a1aa]">Paid once a year</div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-aquamarine">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-green-500 hidden items-start py-1 px-3">
                  <div className="text-xs font-medium text-white">Save 30%</div>
                </div>
                <div className="text-2xl font-medium text-[#fafafa]">$1000</div>
              </div>
              <div className="text-[#a1a1aa] text-sm">per month</div>
            </div>
          </div>
          <Link to='/form' className="w-full rounded-md bg-[#18181b] border border-[#3f3f46] flex items-center justify-center py-3 px-6 text-base text-[#fafafa] font-medium hover:bg-[#3f3f46] transition">
            Get Started
          </Link>
        </div>

      </div>






      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 px-4 sm:px-6 lg:px-8 mt-12">

        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row gap-6">
          <details className="flex-1 rounded-lg border border-[#3f3f46] bg-[#27272a] p-5 group text-[#f4f4f5]">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-[1.125rem]">
              Is JOMI free for students?
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="mt-3 pl-2 text-sm text-gray-700">
              Yes, JOMI is free for students. You can sign up and start learning right away.
            </div>
          </details>

          <details className="flex-1 rounded-lg border border-[#3f3f46] bg-[#27272a] p-5 group text-[#f4f4f5]">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-[1.125rem]">
              How to subscribe to JOMI?
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="mt-3 pl-2 text-sm text-gray-700">
              You can subscribe via monthly or annual plans using credit card or PayPal.
            </div>
          </details>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row gap-6">
          <details className="flex-1 rounded-lg border border-[#3f3f46] bg-[#27272a] p-5 group text-[#f4f4f5]">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-[1.125rem]">
              Can I cancel anytime?
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="mt-3 pl-2 text-sm text-gray-700">
              Yes, you can cancel your subscription at any time from your account settings.
            </div>
          </details>

          <details className="flex-1 rounded-lg border border-[#3f3f46] bg-[#27272a] p-5 group text-[#f4f4f5]">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-[1.125rem]">
              Payment methods available?
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="mt-3 pl-2 text-sm text-gray-700">
              We accept credit cards, debit cards, and PayPal for all subscriptions.
            </div>
          </details>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col sm:flex-row gap-6">
          <details className="flex-1 rounded-lg border border-[#3f3f46] bg-[#27272a] p-5 group text-[#f4f4f5]">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-[1.125rem]">
              Support options?
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="mt-3 pl-2 text-sm text-gray-700">
              You can contact support via chat, email, or phone.
            </div>
          </details>

          <details className="flex-1 rounded-lg border border-[#3f3f46] bg-[#27272a] p-5 group text-[#f4f4f5]">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-[1.125rem]">
              Are courses certified?
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="mt-3 pl-2 text-sm text-gray-700">
              Yes, all completed courses come with a certificate of completion.
            </div>
          </details>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col sm:flex-row gap-6">
          <details className="flex-1 rounded-lg border border-[#3f3f46] bg-[#27272a] p-5 group text-[#f4f4f5]">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-[1.125rem]">
              Support options?
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="mt-3 pl-2 text-sm text-gray-700">
              You can contact support via chat, email, or phone.
            </div>
          </details>

          <details className="flex-1 rounded-lg border border-[#3f3f46] bg-[#27272a] p-5 group text-[#f4f4f5]">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-[1.125rem]">
              Are courses certified?
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </summary>
            <div className="mt-3 pl-2 text-sm text-gray-700">
              Yes, all completed courses come with a certificate of completion.
            </div>
          </details>
        </div>

      </div>





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
            <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white cursor-pointer">
              <img
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                alt="icon"
                src={play}
              />
              <b className="leading-tight">Watch Now</b>
            </div>
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
