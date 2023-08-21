import a from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  // on navbar scroll change the bg of navbar to white
  const [val, setVal] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    // event listener to see scroll
    function onScroll() {
      if (window.scrollY > navRef.current.clientHeight)
        navRef.current.classList.add("bg-white");
      else navRef.current.classList.remove("bg-white");
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="flex bg-white/40 md:backdrop-blur backdrop-blur-lg flex-col fixed top-0 w-full left-0 z-50 ">
      <div
        ref={navRef}
        className="flex flex-row px-12 py-2 justify-between items-center transition-colors duration-300 ease-in-out"
      >
        <img src="logo.webp" className="h-[4em] px-8"></img>
        <div className="md:flex hidden text-right flex-row gap-12 text-[#093A01] font-semibold">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#people">People </a>
          <a href="#featured">Featured articles</a>
          <a href="#">Careers</a>
          <a href="#contactus">Contact us</a>
        </div>
        <div className="flex flex-row gap-8 ">
          <div className="flex flex-col">
            <img
              onClick={() => {
                setVal(!val);
              }}
              src="menu.webp"
              className="h-[2em] md:hidden"
            ></img>
          </div>
        </div>
      </div>
      <div
        onClick={(e) => e.target !== e.currentTarget && setVal(false)}
        className={`${
          val === true ? "flex" : "hidden"
        } md:hidden text-center py-4 flex-col items-center gap-8 text-[#093A01] font-semibold`}
      >
        <a href="#home">Home</a>
        <a href="#about">About us</a>
        <a href="#services">Services</a>
        <a href="#people">People </a>
        <a href="#featured">Featured articles</a>
        <a href="#">Careers</a>
        <a href="#contactus">Contact us</a>
      </div>
    </div>
  );
}
