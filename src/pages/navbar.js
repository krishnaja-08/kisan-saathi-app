import Link from "next/link";
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
    <div className="flex bg-white/40 backdrop-blur flex-col fixed top-0 w-full left-0 z-50 ">
      <div
        ref={navRef}
        className="flex flex-row px-12 py-2 justify-between items-center transition-colors duration-300 ease-in-out"
      >
        <img src="logo.webp" className="h-[4em] px-8"></img>
        <div className="md:flex hidden text-right flex-row gap-12 text-[#093A01] font-semibold">
          <Link href="#">Home</Link>
          <Link href="#">About us</Link>
          <Link href="#">Service</Link>
          <Link href="#">People </Link>
          <Link href="#">Featured articles</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contact us</Link>
        </div>
        <div className="flex flex-row gap-8 ">
          <img src="search.webp" className="h-[2em] md:hidden"></img>
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
        className={`${
          val === true ? "flex" : "hidden"
        } md:hidden text-end flex-col gap-8 text-[#093A01] font-semibold`}
      >
        <Link href="#">Home</Link>
        <Link href="#">About us</Link>
        <Link href="#">Service</Link>
        <Link href="#">People </Link>
        <Link href="#">Featured articles</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Contact us</Link>
      </div>
    </div>
  );
}
