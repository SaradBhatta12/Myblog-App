"use client";
import React, { useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
const Dyna = ({ date, title, description, image }) => {
  return (
    <div className="upper">
      <div className="head-sec flex items-center justify-between p-10">
        <div className="left flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-[50%]"
            src="https://avatars.githubusercontent.com/u/88665300?s=400&u=8fbf16e60db14babaf0162981a43621320b47249&v=4"
            alt=""
          />
          <div className="bio">
            <h1 className="name text-2xl capitalize">sarad bhatta</h1>
            <p className="date">{date}</p>
          </div>
        </div>
        <CiMenuKebab className=" text-2xl" />
      </div>
      <img className="w-[90%]  m-auto rounded mb-2" src={image} alt="" />

      <h1 className="title text-3xl w-[90%] m-auto text-center text-[aqua]">
        👉 {title}
      </h1>
      <p className="description w-[90%] m-auto text-center text-xl mb-5">
        {description}
      </p>
    </div>
  );
};

export default Dyna;
