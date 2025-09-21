import React from 'react'
import videoplayback from './assets/videoplayback.mp4'
import post from './assets/post.png'


export default function About() {
  return (
    <div className='bg-[#18181b]'>



      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col gap-8 font-manrope px-4 sm:px-6 lg:px-8 pt-16">
        {/* Container to align everything consistently */}
        <div className="w-full flex flex-col gap-8">

          {/* Heading with line */}
          <div className="flex items-center gap-4">
            <b className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight text-[#fafafa]">
              About JOMI
            </b>
            <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[#fafafa]">
            <p>
              <span>Journal of Medical Insight (</span>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://jomi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://jomi.com
              </a>
              <span>
                ) is a peer-reviewed surgical video journal that offers a new gold
                standard in video-based surgical education. What makes JOMI unique is
                the opportunity for an unprecedented experience with the operating
                surgeon –{" "}
              </span>
              <b>a full-length virtual shadowing experience optimised for learning.</b>
            </p>

            <p>
              JOMI films and publishes surgical procedures offering incision-to-closure,
              long-form, high-quality, surgeon-narrated didactic experiences /
              masterclasses. JOMI is used by residents, attending, medical students,
              surgical technologists, clinical staff, patients, and others around the
              world to help them prepare for cases, learn about novel advancements, and
              otherwise to have a deep and rich learning experience.
            </p>

            <p>
              JOMI has published surgeons operating at Massachusetts General Hospital,
              Stanford, Yale, Brigham and Women's Hospital, Duke Medical Center, the
              Othman Institute, and more. Most of JOMI content is focused on general
              surgery, orthopaedics, orthopaedic trauma, neurosurgery, and head and neck
              surgery.
            </p>
          </div>

          {/* Footer note */}
          <div className="text-sm sm:text-base text-gray-400">
            For more information, watch this 2-minute video:
          </div>
        </div>
      </div>




      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mt-8">
        <video
          className="w-full h-auto rounded-lg object-cover"
          controls
          src={videoplayback}
          poster={post}
        >
          Your browser does not support the video tag.
        </video>
      </div>




      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-12 font-manrope">
        {/* Wrapper to keep everything aligned consistently */}
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">

          {/* Heading with line */}
          <div className="flex items-center gap-4">
            <b className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#fafafa] leading-tight">
              Value of JOMI
            </b>
            <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
          </div>

          {/* Content */}
          <div className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
            JOMI creates a window into the practice of expert surgeons creating on-demand
            virtual shadowing experiences. In so doing, our goal is to improve patient outcomes
            and surgical education.
          </div>
        </div>
      </div>






      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-12 font-manrope">
        {/* Container to center everything */}
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">

          {/* Heading with line */}
          <div className="flex items-center gap-4">
            <b className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-100 leading-tight">
              Primary Contexts of Relevance
            </b>
            <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
          </div>

          {/* Content */}
          <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 leading-relaxed">
            JOMI creates a window into the practice of expert surgeons creating
            on-demand virtual shadowing experiences. In so doing, our goal is to
            improve patient outcomes and surgical education.
          </div>
        </div>
      </div>





      <div className="w-full relative bg-[#27272a] flex flex-col items-center px-4 sm:px-6 lg:px-8 xl:px-10 py-12 font-manrope mt-12">
        {/* Container */}
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">

          {/* Education Section */}
          <div className="flex flex-col gap-6">
            {/* Heading with line */}
            <div className="flex items-center gap-4">
              <b className="text-lg sm:text-xl lg:text-2xl text-[#fafafa] leading-snug">
                Education
              </b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <div className="text-base sm:text-lg font-medium text-[#fafafa]">
                Virtual Shadowing Teaching Experience
              </div>
              <div className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                <ul className="list-disc pl-6">
                  <li>Medical Students (3rd and 4th year)</li>
                  <li>Pre-medical Education</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clinical Section */}
          <div className="flex flex-col gap-6">
            {/* Heading with line */}
            <div className="flex items-center gap-4">
              <b className="text-lg sm:text-xl lg:text-2xl text-[#fafafa] leading-snug">
                Clinical
              </b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <div className="text-base sm:text-lg font-medium text-[#fafafa]">
                A Bridge to High-Volume Surgeons
              </div>
              <div className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                <ul className="list-disc pl-6">
                  <li>Resident Training</li>
                  <li>Preparation for Trauma Cases</li>
                  <li>Access in Rural Areas</li>
                  <li>Cross-Continental Knowledge Transfer</li>
                  <li>Preparation for Rare Procedures</li>
                  <li>Adoption of Novel Procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="w-full relative flex flex-col items-center px-4 sm:px-6 lg:px-8 xl:px-12 mt-12 font-manrope">
        {/* Container */}
        <div className="w-full max-w-7xl flex flex-col gap-8">

          {/* Heading with line */}
          <div className="flex items-center gap-4">
            <b className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#fafafa] leading-tight">
              Who Uses JOMI and Why?
            </b>
            <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
          </div>

          {/* Content */}
          <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#fafafa] leading-relaxed">
            JOMI creates a window into the practice of expert surgeons creating on-demand
            virtual shadowing experiences. In so doing, our goal is to improve patient outcomes
            and surgical education.
          </div>
        </div>
      </div>








      <div className="w-full relative bg-[#27272a] flex flex-col items-center p-6 sm:p-8 lg:p-12 text-left text-[1.125rem] text-gray-100 font-manrope mt-12">
        <div className="w-full max-w-7xl flex flex-col gap-8">
          {/* Attending Physicians */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-full">
              <b className="text-lg sm:text-xl md:text-2xl leading-[150%]">Attending Physicians</b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]"></div>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-[#fff]">
              <div className="flex gap-2">
                <li className="font-medium">Stay on the Edge:</li>
                <span className="text-[#a1a1aa]">Stay up-to-date on the latest surgical procedures and open the door for collaboration.</span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Adopt Latest Advances:</li>
                <span className="text-[#a1a1aa]">Adopt the best practices with a bird's eye view of specific cases or techniques without the cost of travel.</span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Prepare for Rare Procedures:</li>
                <span className="text-[#a1a1aa]">Example: JOMI: Cloacal Exstrophy Repair - Cloacal Exstrophy happens 1 in 250,000 births.</span>
              </div>
            </div>
          </div>

          {/* Residents */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-full">
              <b className="text-lg sm:text-xl md:text-2xl leading-[150%]">Residents</b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]"></div>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-[#fff]">
              <div className="flex gap-2">
                <li className="font-medium">Improve Pre-Op Preparation:</li>
                <span className="text-[#a1a1aa]">Reduce pressure and increase skill in the OR by virtually “scrubbing-in” during preparation.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <li className="font-medium">Lower Risk due to Inexperience:</li>
                <span className="text-[#a1a1aa]">Mitigate the risks of substandard patient care and outcomes resulting from unfamiliarity (low-volume cases, trauma), low technical proficiency, and geographic isolation. Video education has shown success in instructing residents in surgical procedures; in one instance test scores increased by 300% after an instructional video and simulation.3.</span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Continuing Education:</li>
                <span className="text-[#a1a1aa]">Stay up-to-date with the newest surgical techniques and a diverse range of cases.</span>
              </div>
            </div>
          </div>

          {/* Medical Students */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-full">
              <b className="text-lg sm:text-xl md:text-2xl leading-[150%]">Medical Students</b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]"></div>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-[#fff]">
              <div className="flex gap-2">
                <li className="font-medium">High Quality Didactic Experience:</li>
                <span className="text-[#a1a1aa]">JOMI articles are filmed to provide optimal viewing angles with narration/teaching...</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <li className="font-medium">AnchorKnowledge:</li>
                <span className="text-[#a1a1aa]">Apply medical information from the classroom to relevant surgical procedures showcasing the most up-to-date procedures performed at some of the best hospitals in the country. JOMI enhances clinical experiences, an emphasis on which has been shown to increase the medical preparedness of beginning physicians by 10% and reduce stress during the transition from medical school.</span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Prepare for Rotations:</li>
                <span className="text-[#a1a1aa]">Prepare with peer-reviewed full-length procedures. Example:
                  <a href="https://jomi.com/article/2/microsurgical-technique-for-1mm-vessel-end-to-end-anastomosis/" target="_blank" className="underline"> Microsurgical Anastomosis</a>.
                </span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Unique Study:</li>
                <span className="text-[#a1a1aa]">Engage in a unique method of learning.</span>
              </div>
            </div>
          </div>

          {/* Surgical Technologists */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-full">
              <b className="text-lg sm:text-xl md:text-2xl leading-[150%]">Surgical Technologists and Students</b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]"></div>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-[#fff]">
              <div className="flex flex-col sm:flex-row gap-2">
                <li className="font-medium">Anchor Knowledge:</li>
                <span className="text-[#a1a1aa]">Improve understanding of medical terminology and anatomy ... instrumentation as used intra-operatively.</span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Role Clarity:</li>
                <span className="text-[#a1a1aa]">Students can start to understand roles and expectations from real cases in real time.</span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Prepare for Clinical Rotations:</li>
                <span className="text-[#a1a1aa]">Prepare with full-length peer-reviewed procedures.</span>
              </div>
            </div>
          </div>

          {/* Pre-medical Students */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-full">
              <b className="text-lg sm:text-xl md:text-2xl leading-[150%]">Pre-medical Students</b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]"></div>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-[#fff]">
              <div className="flex flex-col sm:flex-row gap-2">
                <li className="font-medium">Optimized Shadowing:</li>
                <span className="text-[#a1a1aa]">Complement physician shadowing with a better view of the surgical procedure, comprehensive teaching by surgeons, and the ability to control its pace. Gain a valuable understanding that allows you to ask educated questions.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <li className="font-medium">Anchor Knowledge:</li>
                <span className="text-[#a1a1aa]">Use articles like
                  <a href="https://jomi.com/article/21/right-hemithyroidectomy/" target="_blank" className="underline"> Right Hemithyroidectomy</a> or
                  <a href="https://jomi.com/article/13/total-knee-arthroplasty/" target="_blank" className="underline"> Total Knee Arthroplasty</a>.
                </span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Increase Exposure:</li>
                <span className="text-[#a1a1aa]">Explore specialties with the perfect vantage point.</span>
              </div>
            </div>
          </div>

          {/* Nurses */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-full">
              <b className="text-lg sm:text-xl md:text-2xl leading-[150%]">Nurses, Physician Assistants, & respective students</b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]"></div>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-[#fff]">
              <div className="flex gap-2">
                <li className="font-medium">Flexible Pre-Op Preparation:</li>
                <span className="text-[#a1a1aa]">Prepare for cases on your own time.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <li className="font-medium">Improve Post-Op Care:</li>
                <span className="text-[#a1a1aa]">Much of the staff involved in postoperative care does not have an in-depth understanding of the surgical procedures that their patients have undergone. JOMI affords these specialists an ability to develop that understanding to optimize postoperative care.</span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Facilitated Transitions:</li>
                <span className="text-[#a1a1aa]">Ease the transition of coming into a surgical specialty.</span>
              </div>
              <div className="flex gap-2">
                <li className="font-medium">Role Clarity:</li>
                <span className="text-[#a1a1aa]">Understand roles and expectations from real cases in real time.</span>
              </div>
            </div>
          </div>

          {/* Patients */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-full">
              <b className="text-lg sm:text-xl md:text-2xl leading-[150%]">Patients</b>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]"></div>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-[#fff]">
              <div className="flex flex-col sm:flex-row gap-2">
                <li className="font-medium">Reduce Anxiety / Improve Recovery:</li>
                <span className="text-[#a1a1aa]">JOMI articles afford patients an ability to better understand the procedures they will undergo, thereby reducing their level of anxiety prior to an operation. It has been shown that there is a correlation between anxiety and postoperative recovery.</span>
              </div>
            </div>
          </div>
        </div>
      </div>








      <div className="relative w-full flex flex-col items-center gap-8 text-[#fafafa] font-manrope px-4 sm:px-6 lg:px-8 xl:px-10 mt-12">
        {/* Heading */}
        <div className="w-full max-w-7xl flex items-center gap-6">
          <b className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
            References
          </b>
          <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
        </div>

        {/* References List */}
        <div className="w-full max-w-7xl bg-[#27272a] rounded-lg p-4 sm:p-6 lg:p-8 text-sm sm:text-base text-darkgray">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              “Easing the transition from student to doctor: How can medical schools help prepare their graduates for starting work?” Cave, Judith, Woolf, Katherine, et al.
              <div>Medical Teacher. Web. 22 May 2015.</div>
              <a
                className="underline text-blue-600 break-words"
                href="https://www.tandfonline.com/doi/abs/10.1080/01421590802348127#.Vbvn0IuZ7Ap"
                target="_blank"
              >
                https://www.tandfonline.com/doi/abs/10.1080/01421590802348127#.Vbvn0IuZ7Ap
              </a>
            </li>
            <li>
              “The transition from medical student to junior doctor: today’s experiences for Tomorrow’s Doctors.” Brennan, Nicola, Corrigan, Oonagh, Allard, John, et al.
              <div>NCBI. May 2010.</div>
              <a
                className="underline text-blue-600 break-words"
                href="https://www.ncbi.nlm.nih.gov/pubmed/20518984"
                target="_blank"
              >
                https://www.ncbi.nlm.nih.gov/pubmed/20518984
              </a>
            </li>
            <li>
              “Video Skills Curricula and Simulation: A Synergistic Way to Teach 2-Layered, Hand Sewn Small Bowel Anastomosis.” Rowse PG, RK Ruparel, et al.
              <div>NCBI. 19 May 2015.</div>
              <a
                className="underline text-blue-600 break-words"
                href="https://www.ncbi.nlm.nih.gov/pubmed/26002534"
                target="_blank"
              >
                https://www.ncbi.nlm.nih.gov/pubmed/26002534
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-600 break-words"
                href="https://www.urologyhealth.org/urologic-conditions/cloacal-exstrophy"
                target="_blank"
              >
                https://www.urologyhealth.org/urologic-conditions/cloacal-exstrophy
              </a>
            </li>
            <li>
              “Anxiety and Postoperative Recovery in Ambulatory Surgery Patients.” Parris, W., Denise, M., Jamison, R., Maxson, W.
              <div>NCBI. Mar-Apr 1988. 61-64.</div>
              <a
                className="underline text-blue-600 break-words"
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2148590/"
                target="_blank"
              >
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2148590/
              </a>
            </li>
          </ol>
        </div>
      </div>






      <div className="relative w-full flex flex-col items-center gap-8 text-center font-manrope px-4 sm:px-6 lg:px-8 xl:px-10 mt-12">
        {/* Heading with line */}
        <div className="w-full max-w-7xl flex items-center gap-4">
          <b className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#fafafa] leading-tight">
            Learn More
          </b>
          <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
        </div>

        {/* Content */}
        <div className="w-full max-w-7xl bg-[#27272a] rounded-lg p-6 sm:p-8 lg:p-10 text-sm sm:text-base lg:text-lg text-white text-left">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://jomi.com/editorial-board"
                target="_blank"
                rel="noopener noreferrer"
              >
                Editorial Board
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://jomi.com/index"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article Index
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://jomi.com/publish"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Publication
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://blog.jomi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                News
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://blog.jomi.com/category/testimonials/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://jomi.com/subscribers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribers
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://jomi.com/partners/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Partners / Sponsors
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://jomi.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-blue-400 transition"
                href="https://jomi.com/peer-review"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peer Review Process
              </a>
            </li>
          </ul>
        </div>
      </div>







      <div className="relative w-full flex flex-col items-center gap-8 text-[#fff] font-manrope px-4 sm:px-6 lg:px-8 mb-6 xl:px-10 mt-12">
        {/* Heading */}
        <div className="w-full max-w-7xl flex items-center gap-6">
          <b className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            Career Opportunities
          </b>
          <div className="flex-1 border-t border-[rgba(255,255,255,0.25)]" />
        </div>

        {/* Content Box */}
        <div className="w-full max-w-7xl bg-[#27272a] rounded-lg p-4 sm:p-6 lg:p-8 text-sm sm:text-base lg:text-lg text-white">
          <div className="leading-relaxed">
            Please visit our{" "}
            <a
              className="underline text-blue-600 hover:text-blue-400 transition-colors break-words"
              href="https://jomi.com/careers/"
              target="_blank"
            >
              Careers Page
            </a>{" "}
            for more information about current opportunities.
          </div>
        </div>
      </div>





    </div>
  )
}
