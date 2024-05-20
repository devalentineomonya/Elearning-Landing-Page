import React from "react";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
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
  return (
    <MaxWidthContainer>
      <header className="w-full h-[4rem] flex justify-between items-center">
        <div className="font-bold text-2xl  text-slate-500">
          <span className="text-purple-700">De</span>v
          <span className="text-purple-700">Br</span>os
        </div>
        <nav>
          <ul className="flex items-center gap-x-6">
            {navbarLinks &&
              navbarLinks.map((navLink, index) => (
                <li
                  key={index}
                  className="text-slate-700 hover:text-slate-950 transition-all ease-in-out duration-300 font-semibold cursor-pointer"
                >
                  {navLink.name}
                </li>
              ))}
          </ul>
        </nav>
        <div>
          <button className="rounded-full border px-4 py-2 border-blue-400 text-blue-400 font-semibold">
            Login/Signup
          </button>
        </div>
      </header>
    </MaxWidthContainer>
  );
};

export default Navbar;
