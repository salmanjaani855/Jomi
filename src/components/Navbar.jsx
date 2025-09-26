import { useState} from "react";
import { Menu, X, Search } from "lucide-react";
// import { ChevronDown } from "lucide-react";
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";


export default function App() {
  const [isOpen, setIsOpen] = useState(false);




  return (
    <>
    <div>
      <nav className="w-full bg-[#27272a] text-darkgray font-manrope shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          <Link to='/'>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
          </Link>

          {/* Desktop Menu */}
         
            {/* <div className="flex items-center gap-2">
        <a href="#" className="hover:text-indigo-600">Articles</a>
        <img className="w-4 h-4" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <a href="#" className="hover:text-indigo-600">About</a>
        <img className="w-4 h-4" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <a href="#" className="hover:text-indigo-600">Publish</a>
        <img className="w-4 h-4" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <a href="#" className="hover:text-indigo-600">Subscribe</a>
        <img className="w-4 h-4" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <a href="#" className="hover:text-indigo-600">polish</a>
        <img className="w-4 h-4" alt="" />
      </div> */}

<div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium flex-wrap text-[#a1a1aa]">
  {[
    { title: "Article", items: [{ name: "About Articles", path: "/article" }, { name: "Popular Articles", path: "/page" },] },
    { title: "About", items: [{ name: "About Info", path: "/about" }, { name: "EditorialBoard", path: "/editorialBoard" }, ] },
    { title: "Publish", items: [{ name: "Pricing", path: "/pricing" }, { name: "Guidelines", path: "/page" },] },
    { title: "Subscribe", items: [{ name: "Newsletter", path: "/about" }, { name: "Premium Access", path: "/pricing" }] },
    { title: "More", items: [{ name: "EditorialBoard", path: "/subscribingInstitutions" }, { name: "Book Appointment", path: "/form" }] },
  ].map((navItem, idx) => (
    <div key={idx} className="relative group">
      {/* Nav Button */}
      <div className="flex items-center gap-1 cursor-pointer select-none">
        <span className="transition-colors duration-200 group-hover:text-slate-300 group-hover:underline group-hover:underline-offset-4">
          {navItem.title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown */}
      <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black text-sm rounded shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
        {navItem.items.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="block px-3 py-2 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  ))}
</div>


          {/* Search + Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Box */}
            <div className="relative text-gray-600">
              <input
                className="placeholder-current h-10 px-5 pr-16 text-sm focus:outline-none dark:bg-[#3f3f46] text-white"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786
              c0-12.682-10.318-23-23-23s-23,10.318-23,23  
              s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208
              c0.571,0.593,1.339,0.92,2.162,0.92  
              c0.779,0,1.518-0.297,2.079-0.837
              C56.255,54.982,56.293,53.08,55.146,51.887z 
              M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  
              s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>

            {/* Buttons */}
           <Link to='/form' className="relative bg-gradient-to-r from-indigo-600 to-blue-400 text-white px-4 py-2 rounded overflow-hidden group inline-block">
  {/* Shine Animation */}
  <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-20 transform -skew-x-12 animate-shine pointer-events-none"></span>

  {/* Button Text */}
  <span className="relative z-10 font-medium">
    Sign up
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

            <Link to='/form' className="border border-gray-400 text-white px-4 py-2 ">
              Log in
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

    {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden bg-[#000] text-white shadow-md px-4 py-4 space-y-4">
    {/* Nav Items with Dropdown */}
    {[
      { title: "Article", items: [{ name: "About Articles", path: "/article" }, { name: "Popular Articles", path: "/page" }] },
      { title: "About", items: [{ name: "About Info", path: "/about" }, { name: "EditorialBoard", path: "/editorialBoard" }] },
      { title: "Publish", items: [{ name: "Pricing", path: "/pricing" }, { name: "Guidelines", path: "/page" }] },
      { title: "Subscribe", items: [{ name: "Newsletter", path: "/about" }, { name: "Premium Access", path: "/pricing" }] },
      { title: "More", items: [{ name: "EditorialBoard", path: "/subscribingInstitutions" }, { name: "Book Appointment", path: "/form" }] },
    ].map((navItem, idx) => (
      <div key={idx} className="border-b pb-2">
        <p className="font-medium text-gray-700 mb-2">{navItem.title}</p>
        <div className="flex flex-col gap-1 pl-3">
          {navItem.items.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="block px-2 py-1 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-200 text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    ))}

    {/* Search + Buttons */}
    <div className="flex flex-col gap-3 pt-4">
      {/* Search Box */}
      <div className="flex items-center gap-2 bg-darkslategray text-white px-3 py-2 rounded-md">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search Articles"
          className="bg-transparent focus:outline-none text-sm w-full"
        />
      </div>

      {/* Buttons */}
                 {/* Buttons */}
           <Link to='/form' className="relative bg-gradient-to-r from-indigo-600 to-blue-400 text-white px-4 py-2 rounded overflow-hidden group inline-block">
  {/* Shine Animation */}
  <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-20 transform -skew-x-12 animate-shine pointer-events-none"></span>

  {/* Button Text */}
  <span className="relative z-10 font-medium">
    Sign up
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

            <Link to='/form' className="border border-gray-400 text-white px-4 py-2 ">
              Log in
            </Link>
    </div>
  </div>
)}






          




        
      </nav>






</div>


    </>

  );
}
