import React from "react";


export default function Navbar(){
    const scrollToSection = (id) =>{
        const section = document.getElementById(id);
        if(section){
section.scrollIntoView({behavior:"smooth"});
        }
    };
    return(
        <nav className="fixed top-0 w-full bg-white shadow-md p-4 z-50 flex justify-between px-10 items-center">
      <a href="/">
        <img src="/logo1.png" alt="Brand Logo" className="w-24" />
      </a>

      <ul className="flex space-x-6 text-black">
        {["Home", "Services", "Portofolio","Contact"].map((item, index) => (
          <li key={index}>
            <button
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-yellow-500 transition focus:outline-none"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    );
}