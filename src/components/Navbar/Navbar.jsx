import React, { useState } from "react";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
const navbarLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Service",
    href: "/services",
  },
  {
    name: "Tools",
    href: "/tools",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MaxWidthContainer>
      <header className="w-full h-[4rem] flex justify-between items-center">
        <div className="font-bold text-2xl  text-slate-500">
          <span className="text-[#9380f6]">De</span>v
          <span className="text-[#9380f6]">Br</span>os
        </div>
        <nav
          className={`fixed md:static  w-1/2 md:w-full bg-slate-50 top-[4rem] bottom-0  transition-all ease-in-out duration-300  ${
            isOpen ? "right-0" : "-right-1/2"
          }`}
        >
          <ul className="flex items-start md:justify-center pl-4 md:pl-0 flex-col md:flex-row gap-x-6 ">
            {navbarLinks &&
              navbarLinks.map((navLink, index) => (
                <li
                  key={index}
                  className="text-slate-700 hover:text-slate-950 transition-all ease-in-out duration-300 font-semibold cursor-pointer mt-4 md:mt-0 text-xl"
                >
                  <Link to={navLink.href}>{navLink.name}</Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-x-3 pr-2">
          <button className="rounded-full border px-4 py-2 border-[#9380f6] text-[#9380f6] font-semibold">
            Login/Signup
          </button>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className=" md:hidden block cursor-pointer text-[#9380f6] "

          >
            {isOpen ? <HiX size={36} /> : <HiOutlineMenuAlt4 size={36} />}{" "}
          </div>
        </div>
      </header>
    </MaxWidthContainer>
  );
};

export default Navbar;
