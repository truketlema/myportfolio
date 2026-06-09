import React, { useState } from "react";
import { GiButterfly } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#1b1b1b]/40
        backdrop-blur-md
        border-b border-white/10
      "
    >
      <div className="navbar-content flex justify-between items-center w-full py-4 px-8 md:px-14 lg:px-32 ">
        {/* Logo */}
        <h1 className="navbar-title text-lg font-fira text-white flex items-center">
          <GiButterfly className="text-3xl mr-2 text-white" />
          Truket
        </h1>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white z-50 "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop + Mobile Links */}
        <ul
          className={`
            ${open ? "flex" : "hidden"}
            flex-col gap-4

            absolute top-16 right-6
            w-48

            bg-[#1b1b1b]/70
            backdrop-blur-xl
            border border-white/10
            p-5 rounded-xl
            shadow-lg

            md:static md:flex md:flex-row md:items-center md:gap-8
            md:bg-transparent md:backdrop-blur-none md:border-none
            md:p-0 md:shadow-none md:rounded-none md:w-auto
          `}
        >
          <li>
            <a
              href="#hero"
              className="text-white hover:text-[#c778dd] transition-colors"
            >
              <span className="text-[#c778dd]">#</span>home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-white hover:text-[#c778dd] transition-colors"
            >
              <span className="text-[#c778dd]">#</span>about-me
            </a>
          </li>

          <li>
            <a
              href="#footer"
              className="text-white hover:text-[#c778dd] transition-colors"
            >
              <span className="text-[#c778dd]">#</span>contacts
            </a>
          </li>

          <li>
            <select className="bg-transparent text-white outline-none cursor-pointer">
              <option value="eng" className="bg-[#1b1b1b]">
                EN
              </option>
              <option value="amh" className="bg-[#1b1b1b]">
                AM
              </option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}
