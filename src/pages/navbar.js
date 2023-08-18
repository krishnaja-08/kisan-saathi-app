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
    <div className="flex flex-col fixed top-0 w-full left-0 z-50 px-12 py-8">
      <div
        ref={navRef}
        className="flex flex-row justify-between  transition-colors duration-300 ease-in-out"
      >
        <img src="logo.png" className="h-[4em] px-8"></img>
        <div className="md:flex hidden flex-row gap-8 text-[#093A01] font-semibold">
          <p>Home</p>
          <p>About us</p>
          <p>Service</p>
          <p>People </p>
          <p>Featured articles</p>
          <p>Careers</p>
          <p>Contact us</p>
        </div>
        <div className="flex flex-row gap-8 ">
          <img src="search.png" className="h-[2em]"></img>
          <div className="flex flex-col">
            <img
              onClick={() => {
                setVal(!val);
              }}
              src="menu.png"
              className="h-[2em]"
            ></img>
          </div>
        </div>
      </div>
      <div
        className={`${
          val === true ? "flex" : "hidden"
        } md:hidden flex-col gap-8 text-[#093A01] font-semibold`}
      >
        <p>Home</p>
        <p>About us</p>
        <p>Service</p>
        <p>People </p>
        <p>Featured articles</p>
        <p>Careers</p>
        <p>Contact us</p>
      </div>
    </div>
  );
}
