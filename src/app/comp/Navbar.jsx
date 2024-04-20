"use client";
import React from "react";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { FiUpload } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className=" flex justify-center items-center w-full flex-col">
      <img src="logo-main.png" alt="" id="Logo" />
      <div className="type p-2 text-2xl font-bold mb-3">
        <TypewriterComponent
          options={{
            strings: ["WELLCOME TO SARAD BLOG"],
            autoStart: true,
            loop: true,
            delay: 200,
          }}
        />
      </div>
      <div className="nav-links flex gap-4 text-xl border-b-4 border-green-700 pb-4">
        <Link
          href={"/"}
          className=" border bg-transparent border-yellow-500 p-2 rounded transition-all duration-500 hover:bg-yellow-500 hover:text-black"
        >
          Home
        </Link>
        <Link
          href={"/coding"}
          className=" border bg-transparent border-yellow-500 p-2 rounded transition-all duration-500 hover:bg-yellow-500 hover:text-black"
        >
          Coding
        </Link>
        <Link
          href={"/dailylife"}
          className=" border bg-transparent border-yellow-500 p-2 rounded transition-all duration-500 hover:bg-yellow-500 hover:text-black"
        >
          Daily Life
        </Link>
      </div>

      <Link href={"/postcreateion"}>
        <div className="upload absolute top-2 right-4 bg-stone-900 p-3 rounded hover:bg-slate-500 cursor-pointer">
          <FiUpload className=" text-3xl" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
