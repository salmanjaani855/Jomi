import React from 'react'

export default function EditorialBoard() {
  return (
    <div>
      


<div className="w-full max-w-7xl mx-auto flex items-center gap-4 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 text-[#fafafa]">
  <b className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] leading-none">
    Editorial Board
  </b>
  <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[1px]" />
</div>






<div className="w-full  mt-12 sm:mt-16 lg:mt-20 pb-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl bg-[#27272a] mx-auto flex flex-col gap-6 text-left text-base text-[#a1a1aa] font-manrope">

<div className='px-6'>
    {/* Managing Editor */}
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
      <div className="w-44 font-medium shrink-0">Managing Editor:</div>
      <div className="font-semibold text-[#fafafa]">Stephanie Abrams, DO</div>
    </div>

    {/* Senior Consulting Editor */}
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
      <div className="w-44 font-medium shrink-0">Senior Consulting Editor:</div>
      <div className="font-semibold text-[#fafafa]">Richard A. Hodin MD</div>
    </div>

    {/* Additional Info */}
    <div className="flex flex-col gap-1 sm:pl-44">
      <div>Chief, Division of Gastrointestinal and Oncologic Surgery, Massachusetts General Hospital</div>
      <div>Professor of Surgery, Harvard Medical School</div>
      <div>Editor in Chief, Journal of Gastrointestinal Surgery</div>
    </div>

  </div>
</div>
</div>




      

<div className="w-full flex items-center gap-4 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 text-[#fafafa]">
  <b className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] leading-none">
    Section Editors
  </b>
  <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[1px]" />
</div>







<div className="w-full  flex flex-col gap-6 px-4 sm:px-6 lg:px-8  mt-8 sm:mt-12 lg:mt-16">


  {/* Editor Entries */}
  <div className="flex flex-col gap-6 bg-[#27272a] px-10">

  {/* Section Header */}
  <div className='bg-[#27272a]'>
  <div className="flex items-center  gap-4 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] text-[#fafafa] font-manrope">
    <b className="leading-none ">General Surgery</b>
    <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[1px]" />
  </div>
  </div>

    
    {/* Endocrine and Gastrointestinal Surgery */}
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Endocrine and Gastrointestinal Surgery:</div>
        <div className="font-semibold text-[#fafafa]">Richard A. Hodin MD</div>
        <i className="text-[#d4d4d8] font-inter sm:ml-2">@HodinRichard</i>
      </div>
      <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
        <div>Chief, Division of Gastrointestinal and Oncologic Surgery, Massachusetts General Hospital</div>
        <div>Professor of Surgery, Harvard Medical School</div>
        <div>Editor in Chief, Journal of Gastrointestinal Surgery</div>
      </div>
    </div>

    {/* Hernia Surgery */}
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Hernia Surgery:</div>
        <div className="font-semibold text-gray-100">Luca Gordini, MD</div>
        <i className="text-[#d4d4d8] font-inter sm:ml-2">@lucagordini</i>
      </div>
      <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
        <div>Chief, Division of Gastrointestinal and Oncologic Surgery, Massachusetts General Hospital</div>
        <div>Professor of Surgery, Harvard Medical School</div>
        <div>Editor in Chief, Journal of Gastrointestinal Surgery</div>
      </div>
    </div>

    {/* Hepatobiliary Surgery */}
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Hepatobiliary Surgery:</div>
        <div className="font-semibold text-gray-100">Keith Lillemoe, MD</div>
      </div>
      <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
        <div>Chief of Surgery, Massachusetts General Hospital</div>
        <div>Professor of Surgery, Harvard Medical School</div>
        <div>Editor in Chief, Annals of Surgery</div>
      </div>
    </div>

    {/* Minimally Invasive Surgery */}
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Minimally Invasive Surgery:</div>
        <div className="font-semibold text-gray-100">Mary Hawn, MD</div>
        <i className="text-[#d4d4d8] font-inter sm:ml-2">@maryhawn</i>
      </div>
      <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
        <div>Emile Holman Professor and Chair, Department of Surgery, Stanford University</div>
        <div>Co-Editor, Operative Techniques in Surgery</div>
      </div>
    </div>

    {/* Surgical Oncology */}
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Surgical Oncology:</div>
        <div className="font-semibold text-gray-100">John T. Mullen, MD</div>
      </div>
      <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
        <div>Program Director, General Surgery Residency, Massachusetts General Hospital</div>
        <div>Associate Professor of Surgery, Harvard Medical School</div>
      </div>
    </div>

    {/* Global Surgery */}
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Global Surgery:</div>
        <div className="font-semibold text-gray-100">Jaymie Ang Henry, MD, MPH</div>
        <a className="text-[#d4d4d8] italic font-inter sm:ml-2 underline" href="https://twitter.com/JaymieClaire" target="_blank">@JaymieClaire</a>
      </div>
      <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
        <div>Founding Executive Director, Global Alliance for Surgical, Obstetric, Trauma, & Anaesthesia Care (G4 Alliance)</div>
      </div>
    </div>

  </div>
</div>










<div className="w-full flex flex-col gap-6 px-4 sm:px-6 lg:px-8 s">

<div className='bg-[#27272a] px-10'>
  {/* Orthopaedic Surgery Header */}
  <div className="flex items-center gap-4 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] text-[#fff] font-manrope">
    <b className="leading-none ">Orthopaedic Surgery</b>
    <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[1px]" />
  </div>

  {/* Hand Surgery */}
  <div className=''>
  <div className="flex flex-col gap-1">
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
      <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Hand Surgery:</div>
      <div className="font-semibold text-gray-100">Asif M. Ilyas, MD</div>
    </div>
    <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
      <div>Professor of Orthopedic Surgery, Sidney Kimmel Medical College at Jefferson</div>
      <div>President, Rothman Foundation for Opioid Research & Education Foundation</div>
    </div>
  </div>

  {/* Foot & Ankle Surgery */}
  <div className="flex flex-col gap-1">
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
      <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Foot & Ankle Surgery:</div>
      <div className="font-semibold text-gray-100">Eric M. Bluman, MD, PhD</div>
      <i className="text-[#d4d4d8] font-inter sm:ml-2">@maryhawn</i>
    </div>
    <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
      <div>Vice Chairman for Safety, Quality and Patient Experience, Brigham & Women's Department of Orthopedic Surgery</div>
      <div>Associate Professor of Orthopedic Surgery, Harvard Medical School</div>
    </div>
  </div>

  {/* Sports Medicine */}
  <div className="flex flex-col gap-1">
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
      <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Sports Medicine:</div>
      <div className="font-semibold text-gray-100">Xinning “Tiger” Li, MD</div>
      <a className="text-[#d4d4d8] italic font-inter sm:ml-2 underline" href="https://twitter.com/TigerLiMD" target="_blank">@TigerLiMD</a>
    </div>
    <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
      <div>Associate Professor, Boston University School of Medicine</div>
      <div>Team Physician, Boston University Terriers</div>
    </div>
  </div>

  {/* Otolaryngology Header */}
  <div className="flex items-center gap-4 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] text-gray-100 font-manrope">
    <b className="leading-none ">Otolaryngology</b>
    <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[1px]" />
  </div>

  {/* Otology */}
  <div className="flex flex-col gap-1">
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
      <div className="w-48 font-medium shrink-0 text-[#a1a1aa]">Otology:</div>
      <div className="font-semibold text-gray-100">C. Scott Brown, MD</div>
      <a className="text-[#d4d4d8] italic font-inter sm:ml-2 underline" href="https://twitter.com/i_fix_ears" target="_blank">@i_fix_ears</a>
    </div>
    <div className="flex flex-col gap-1 sm:pl-48 text-[#a1a1aa]">
      <div>Neurotologist & Lateral Skull Base Surgeon, Atlanta Institute for Ear and Skull Base Surgery</div>
    </div>
  </div>

  </div>


</div>
</div>






<div className="w-full flex flex-col gap-4 px-4 sm:px-6 lg:px-8 ">
  <div className='bg-[#27272a] px-10'>

  {/* Section Header */}
  <div className="flex items-center gap-4 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] text-gray-100 font-manrope">
    <b className="leading-none text-[#fff]">Editorial Staff</b>
    <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[1px]" />
  </div>

  {/* Editorial Production Coordinator */}
  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 text-[1rem] text-darkgray ">
    <div className="w-52 font-medium shrink-0 text-[#a1a1aa]">Editorial Production Coordinator:</div>
    <div className="font-semibold text-gray-100">Christopher Boisvert</div>
  </div>
</div>
</div>





<div className="w-full pb-30 flex flex-col gap-6 px-4 sm:px-6 lg:px-8  mt-8 sm:mt-12 lg:mt-16">

<div className='bg-[#27272a] px-10'>
  {/* Section Header */}
  <div className="flex items-center gap-4 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] text-gray-100 font-manrope">
    <b className="leading-none">Advisors</b>
    <div className="flex-1 border-t border-[rgba(255,255,255,0.25)] h-[1px]" />
  </div>

  {/* Advisor Entries */}
  <div className="flex flex-col gap-4">

    {/* Frederick Browne */}
    <div className="flex flex-col gap-1">
      <div className="font-medium text-gray-100">Frederick Browne, MD, MBA</div>
      <div className="text-[0.875rem] text-[#a1a1aa]">Chief Medical Officer, VPMA, Griffin Hospital</div>
    </div>

    {/* Keith A. Delman */}
    <div className="flex flex-col gap-1">
      <div className="font-medium text-gray-100">Keith A. Delman, MD</div>
      <div className="text-[0.875rem] text-[#a1a1aa]">
        Professor of Surgery, Division of Surgical Oncology, Department of Surgery, Emory University School of Medicine
      </div>
    </div>

    {/* Jon Dickens */}
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <div className="font-medium text-gray-100">Jon Dickens, MD</div>
        <a className="text-[#d4d4d8] italic font-inter underline" href="https://twitter.com/jondickensmd" target="_blank">@jondickensmd</a>
      </div>
      <div className="text-[0.875rem] text-[#a1a1aa]">
        Orthopedics, Walter Reed National Military Medical Center
      </div>
    </div>

    {/* Bruce L. Gewertz */}
    <div className="flex flex-col gap-1">
      <div className="font-medium text-gray-100">Bruce L. Gewertz, MD</div>
      <div className="text-[0.875rem] text-[#a1a1aa]">
        Surgeon-in-Chief, Department of Surgery Chair, and H and S Nichols Distinguished Professor, Cedars-Sinai Health System
      </div>
    </div>

    {/* Christopher Morse */}
    <div className="flex flex-col gap-1">
      <div className="font-medium text-gray-100">Christopher Morse, MD</div>
      <div className="text-[0.875rem] text-[#a1a1aa]">
        Co-Director Gastroesophageal Surgery Program, Massachusetts General Hospital
      </div>
      <div className="text-[0.875rem] text-[#a1a1aa]">
        Associate Professor of Surgery, Harvard Medical School
      </div>
    </div>

    {/* Fotios Tjoumakaris */}
    <div className="flex flex-col gap-1">
      <div className="font-medium text-gray-100">Fotios Tjoumakaris, MD</div>
      <div className="text-[0.875rem] text-[#a1a1aa]">
        Associate Professor of Orthopaedic Surgery, Sidney Kimmel Medical College at Jefferson
      </div>
    </div>

    {/* Steven Wexner */}
    <div className="flex flex-col gap-1">
      <div className="font-medium text-gray-100">Steven Wexner, MD</div>
      <div className="flex flex-col gap-1 text-[0.875rem] text-[#a1a1aa]">
        <div>Chair, Department of Colorectal Surgery, Cleveland Clinic Florida</div>
        <div>Director, Digestive Disease Center, Cleveland Clinic Florida</div>
        <div>Editor in Chief, Surgery</div>
      </div>
    </div>

  </div>
</div>
</div>




    </div>
  )
}
